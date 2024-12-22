<template>
    <div>
      <h1>Home</h1>
      ,<button @click="goToAbout">Go to About</button>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goToAbout() {
  router.push('/test');
}

</script>

<style scoped>
/* 你的样式代码 */
</style>