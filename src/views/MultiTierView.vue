<script setup>
import { SphinxPage } from 'vue3-sphinx-xml'
</script>

<template>
  <div class="multitier">
    <sphinx-page baseURL="/multitier-files" />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .basic {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
