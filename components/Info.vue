<template>
  <div>
    <input type="text" v-model="name">
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  props: ['propsName'],
  data() {
    return {
      // localName: this.propsName
      name: null
    }
  },
  computed: {
    // name: {
    //   get() {
    //     return this.getName
    //   },
    //   set(value) {
    //     this.actionSetUserInfo(value)
    //   }
    // },
    ...mapGetters({
      getName: 'getName',
    }),
  },
  watch: {
    propsName(v) {
      this.name = v
    },
    // propsName(name) {
    //   this.localName = name
    // }
    // propsName: {
    //   handler(v) {
    //     this.name = v
    //   },
    // immediate: true,
    // },
  },
  methods: {
    ...mapActions([
      'actionSetUserInfo'
    ])
  }
}
</script>

