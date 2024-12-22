<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function test() {
  router.push('/hello')
}
</script>

<template>
  <div>
    <h1>Test</h1>
    <button @click="test">Test</button>
  </div>
</template>

<style scoped>

</style>