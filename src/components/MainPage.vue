<template>
  <div id="page">
    <CreationField />
    <Heading />
    <List />
  </div>
</template>

<script>
import List from '@/components/List.vue'
import CreationField from '@/components/CreationField.vue'
import Heading from "@/components/Heading.vue";

export default {
  name: 'MainPage',
  components: {
    List,
    CreationField,
    Heading
  }
}
</script>

<style lang="scss">
#page {
}
</style>
