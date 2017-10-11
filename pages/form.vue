<template>
  <section class="container">
      <h1>form page</h1>
      <info :propsObj="obj"></info>
  </section>
</template>

<script>
import info from '~/components/info.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      obj: null
    }
  },
  components: {
    info,
  },
  computed: {
    // ...mapGetters({
    //   name: 'getName',
    // }),
  },
  methods: {
    ...mapActions([
      'actionGetUserInfo',
    ]),
  },
  mounted() {
    setTimeout(()=>{
      this.obj = {'name':'leo','info':{'age':99,'gender':'boy'}, intersted:[]}
    }, 3*1000)
    this.actionGetUserInfo()
  },
}
</script>

