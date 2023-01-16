<script setup lang="ts">
const {
  initializeGolangWasm,
} = useWasmDefault()

const {
  testClick,
  getWasmFileInformation,
  initializeWebAssembly,
} = useBasic();

onMounted(() => {
  initializeWebAssembly(initializeGolangWasm);
})
</script>

<template>
  <button @click="getWasmFileInformation">getWasmFileInformation</button>
</template>
