<template>
  <div id="page">
    <SignInView />
    <CreationField />
    <Heading />
    <List />
  </div>
</template>

<script>
import List from '@/components/List.vue'
import CreationField from '@/components/CreationField.vue'
import Heading from "@/components/Heading.vue";
import SignInView from "@/components/SignInView.vue";
import { mapMutations } from 'vuex';

export default {
  name: 'MainPage',
  components: {
    List,
    CreationField,
    Heading,
    SignInView
  },
  methods: {
    ...mapMutations(['initToken'])
  },
  mounted() {
    this.initToken();
  }
}
</script>

<style lang="scss">
#page {
}
</style>
