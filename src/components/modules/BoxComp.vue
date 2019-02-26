<template>
  <article>
    <h3>{{ title }}</h3>
  </article>
</template>

<script>
  export default {
    name: "BoxComp",
    props: ['title', 'content']
  }
</script>
