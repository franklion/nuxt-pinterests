<template>
  <section class="container">
      <h1>form page</h1>
      <info :propsName="name"></info>
  </section>
</template>

<script>
import info from '~/components/info.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
    }
  },
  components: {
    info,
  },
  computed: {
    ...mapGetters({
      name: 'getName',
    }),
  },
  methods: {
    ...mapActions([
      'actionGetUserInfo',
    ]),
  },
  mounted() {
    this.actionGetUserInfo()
  },
}
</script>

