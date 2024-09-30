<script lang="ts" setup>
import { ref, onMounted, useTemplateRef } from 'vue';
import Clipboard from "@/utils/clipboard.ts";
import { useToastTool } from "@/hooks/useToastTool.ts";

const partySmiley = useTemplateRef('partySmiley');


const warningVisible = ref(false);
const vColor = ref('#ffffff');

const checkBrowserSupport = () => {
  if (window.EyeDropper === undefined) {
    warningVisible.value = true;
  }
};

const defaultColorSet = () => {
  partySmiley.value!.style.background = '#ffffff';
  partySmiley.value!.style.color = '#000000';
  partySmiley.value!.style.filter = 'drop-shadow(0px 0px 5px #333333)';
};

const pickColor = async () => {
  // @ts-ignore
  const eyeDropper = new EyeDropper();
  try {
    const pickedColor = await eyeDropper.open();
    vColor.value = pickedColor.sRGBHex;
    warningVisible.value = false;

    // 设置背景颜色
    partySmiley.value!.style.background = pickedColor.sRGBHex;

    // 差值法计算文字颜色
    const color = pickedColor.sRGBHex;
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    const gray = r * 0.299 + g * 0.587 + b * 0.114;
    partySmiley.value!.style.color = gray > 186 ? '#000000' : '#ffffff';

    // 设置 drop-shadow 阴影
    let dropShadow = '#333333';
    partySmiley.value!.style.filter = `drop-shadow(0px 0px 5px ${dropShadow})`;

  } catch (error) {
    warningVisible.value = true;
    console.error(error);
  }
};

const copyColor = () => {
  Clipboard.copyToClip(vColor.value);
  useToastTool(1000).success("复制成功");
};

onMounted(() => {
  checkBrowserSupport();
  defaultColorSet();
});

</script>
<template>
  <div class="flex flex-col items-center justify-center h-full">
    <button id="droppingTime" @click="pickColor">Pick a Color</button>
    <p v-if="warningVisible" class="text-red-500">
      很抱歉, 你的 webview2 暂不支持 <span>EyeDropper API</span>!
    </p>
    <div v-if="!warningVisible" ref="partySmiley" @click="copyColor" id="partySmiley"
         class="flex flex-col items-center justify-center text-2xl p-5 rounded-lg">
      {{ vColor }}
      <p class="text-sm">点击即可复制</p>
    </div>

  </div>
</template>


<style scoped>

#partySmiley {
  color: white;
  margin: 50px;
  width: 250px;
}

#droppingTime {
  width: max-content;
  font-size: 18px;
  font-weight: bold;
  border-radius: 5px;
  padding: 8px;
  background-color: #eee;
  border: 4px solid #333;
  margin-bottom: 20px;
}

#warning span {
  font-weight: bold;
}
</style>
