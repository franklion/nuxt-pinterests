<template>
  <div>
      <input type="text" v-model="name">
  </div>
</template>

<script>
export default {
  props: ['propsName'],
  data() {
    return {
      name: '',
    }
  },
  watch: {
    // propsName(v) {
    //   this.name = v
    // },
    propsName: {
      handler(v) {
        this.name = v
      },
      // immediate: true,
    },


  },
}
</script>

