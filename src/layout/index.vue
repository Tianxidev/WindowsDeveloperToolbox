<script setup lang="ts">
import { NButton } from "naive-ui";
import { useRouter } from "vue-router";

const router = useRouter();
const sizeNavBtn = "tiny";
</script>

<template>
  <div>
    <div class="flex flex-col h-screen">
      <!-- content -->
      <div class="flex-grow pb-10"><RouterView /></div>
      <!-- footer -->
      <footer class="fixed bottom-0 left-0 right-0 border">
        <div class="bg-gradient-to-t to-transparent backdrop-blur-lg p-2">
          <div class="flex items-center gap-2 justify-center">
            <n-button
              :size="sizeNavBtn"
              type="info"
              @click="router.push('/home')"
              ghost
            >
              赞赏
            </n-button>
            <n-button
              :size="sizeNavBtn"
              type="info"
              @click="router.push('/naming_convention')"
              ghost
            >
              命名法
            </n-button>
            <n-button
              :size="sizeNavBtn"
              type="info"
              @click="router.push('/translate')"
              ghost
            >
              翻译
            </n-button>
            <n-button
              :size="sizeNavBtn"
              type="info"
              @click="router.push('/json_formatting')"
              ghost
            >
              Json格式化
            </n-button>
            <n-button
              :size="sizeNavBtn"
              type="info"
              @click="router.push('/network')"
              ghost
            >
              网络
            </n-button>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>
