<script setup lang="ts">
import { useRouter } from "vue-router";
import { Icon } from "@iconify/vue";

const router = useRouter();

</script>

<template>
  <div>
    <div class="flex flex-col h-screen">
      <!-- content -->
      <div class="flex-grow pb-10"><RouterView /></div>
      <!-- footer -->
      <footer class="fixed bottom-0 left-0 right-0 border">
        <div class="bg-gradient-to-t to-transparent backdrop-blur-lg p-2">
          <div class="flex items-center gap-2 justify-between">
            <div class="flex">
              <Icon icon="mdi:home" class="text-2xl" @click="router.push({name: 'feature_list'})" />
            </div>
            <div class="flex">
              <Icon icon="mdi:settings" class="text-2xl" @click="router.push({name: 'settings'})" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>
