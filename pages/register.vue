<template>
  <section class="container register">
    <userInfo></userInfo>
  </section>
</template>


<script>
import userInfo from '~/components/account/userInfo.vue'
export default {
  components: {
    userInfo
  }
}
</script>

<style lang="scss">
.register {
  padding-top: 100px;
  .row {
    justify-content: center;
  }
}
</style>



