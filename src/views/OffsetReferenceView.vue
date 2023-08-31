<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import { SphinxPage } from 'vue3-sphinx-xml'

const route = useRoute()

const documentationPath = computed(() => {
  return `/offset-reference-xml-files${route.path}`
})

</script>

<template>
  <div class="offsetreference">
    <sphinx-page :baseURL="documentationPath" referenceBaseURL="/offsetreference" />
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
