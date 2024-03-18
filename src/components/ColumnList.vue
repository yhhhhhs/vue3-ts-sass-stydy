<template>
  <ul>
    <li v-for="i in list" :key="i.id" class="index rounded-md overflow-hidden">
        <img :src="i.avatar" :alt="i.description">
        <h1>{{ i.title }}</h1>
        <text class="text-2xl">{{ i.pre }}</text>
        <text class="text-xl">{{ i.pre }}</text>
        <text class="text-xl">{{ i.pre }}</text>
        <button>控制</button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { PropType } from 'vue';

 interface CloumListProp {
  id: number;
  title: string;
  avatar: string;
  description: string;
  pre: string;
}
// 直接返回组件选项对象
const props = defineProps<{
  list: CloumListProp[];
}>();
</script>

<style lang="scss">
    .index{
        background-color: $bg-color;
    }
</style>
