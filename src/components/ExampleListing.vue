<script setup>
import { RouterLink } from 'vue-router'
import ExampleItem from './ExampleItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
// import CommunityIcon from './icons/IconCommunity.vue'
// import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <example-item>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Basic</template>
    An example of handling basic Sphinx markup.

    <br />

    <router-link to="/basic">basic</router-link>
  </example-item>

  <example-item>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Multi-tier</template>
    An example of handling multi-tiered Sphinx markup.
    <br />
    <router-link to="/multitier">multi-tier</router-link>
  </example-item>

  <example-item>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Reference</template>

    An example of a reference through a bibliography to a sibling page.

    <br />

    <router-link to="/reference/main">reference</router-link>
  </example-item>

  <example-item>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Reference with Offset</template>

    An example showing how to offset a documentation base, in this case this example looks to hide
    the root index page of the documentation tree by splitting the sub-directories into their own
    routes.

    <br />

    <router-link to="/offsetreference/main">reference</router-link>
  </example-item>

  <!-- <ExampleItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Community</template>

    Got stuck? Ask your question on
    <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Vue Land</a>, our official
    Discord server, or
    <a href="https://stackoverflow.com/questions/tagged/vue.js" target="_blank" rel="noopener"
      >StackOverflow</a
    >. You should also subscribe to
    <a href="https://news.vuejs.org" target="_blank" rel="noopener">our mailing list</a> and follow
    the official
    <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">@vuejs</a>
    twitter account for latest news in the Vue world.
  </ExampleItem>

  <ExampleItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support Vue</template>

    As an independent project, Vue relies on community backing for its sustainability. You can help
    us by
    <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener">becoming a sponsor</a>.
  </ExampleItem> -->
</template>
