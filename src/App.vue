<template>
  <div class="contain columns-3">
    <!-- 确保在模板中正确地使用了 list 属性 -->
    <column-list :list="list"></column-list>
  </div>
</template>

<script setup lang="ts">
import ColumnList from './components/ColumnList.vue';
import { CloumListProp } from './components/ColumnList.vue';
const testData: CloumListProp[] = [
  {
    id: 1,
    title: 'test1',
    avatar: 'http://124.70.49.2:4040/yax-img/upload/eysMerchant/manger/1Bs6oz7u6wb/2024/03/18/4db9432fbdbd48779b16830b1b61321c.png',
    description: 'http://124.70.49.2:4040/yax-img/upload/eysMerchant/manger/1Bs6oz7u6wb/2024/03/18/4db9432fbdbd48779b16830b1b61321c.png',
    pre: 'test-pre'
  },
  {
    id: 2,
    title: 'test2',
    avatar: 'http://124.70.49.2:4040/yax-img/upload/eysMerchant/manger/1Bs6oz7u6wb/2024/03/18/4db9432fbdbd48779b16830b1b61321c.png',
    description: 'http://124.70.49.2:4040/yax-img/upload/eysMerchant/manger/1Bs6oz7u6wb/2024/03/18/4db9432fbdbd48779b16830b1b61321c.png',
    pre: 'test-pre2'
  },
  {
    id: 2,
    title: 'test2',
    avatar: 'http://124.70.49.2:4040/yax-img/upload/eysMerchant/manger/1Bs6oz7u6wb/2024/03/18/4db9432fbdbd48779b16830b1b61321c.png',
    description: 'http://124.70.49.2:4040/yax-img/upload/eysMerchant/manger/1Bs6oz7u6wb/2024/03/18/4db9432fbdbd48779b16830b1b61321c.png',
    pre: 'test-pre2'
  },
  {
    id: 2,
    title: 'test2',
    avatar: 'http://124.70.49.2:4040/yax-img/upload/eysMerchant/manger/1Bs6oz7u6wb/2024/03/18/4db9432fbdbd48779b16830b1b61321c.png',
    description: 'http://124.70.49.2:4040/yax-img/upload/eysMerchant/manger/1Bs6oz7u6wb/2024/03/18/4db9432fbdbd48779b16830b1b61321c.png',
    pre: 'test-pre2'
  },
  {
    id: 2,
    title: 'test2',
    avatar: 'http://124.70.49.2:4040/yax-img/upload/eysMerchant/manger/1Bs6oz7u6wb/2024/03/18/4db9432fbdbd48779b16830b1b61321c.png',
    description: 'http://124.70.49.2:4040/yax-img/upload/eysMerchant/manger/1Bs6oz7u6wb/2024/03/18/4db9432fbdbd48779b16830b1b61321c.png',
    pre: 'test-pre2'
  },
]

// 确保在 setup() 函数中正确地定义了 list 属性
const list = testData;
</script>

<style scoped>
/* 在这里添加样式 */
</style>
