<template>
    <div>
        <p>{{ number }}</p>
        <hr>
        <button @click="reset">歸零</button>
    </div>
</template>


<script>
export default {
  props: ['number'],
  methods: {
    reset() {
      this.$emit('resetCount', 0)
    },
  },
  model: {
    props: [],
  },
}
</script>
