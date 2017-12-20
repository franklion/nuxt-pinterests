<template>
  <div>
    <!-- navigation -->
    <ul class="nav">
      <li class="nav-item">
        <nuxt-link active-class="is-active" to="/" class="nav-link" exact>Home</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link active-class="is-active" to="/pinterests" class="nav-link" exact>Pinterests</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link active-class="is-active" to="/form" class="nav-link" exact>Form</nuxt-link>
        <li class="nav-item">
          <nuxt-link active-class="is-active" to="/foods" class="nav-link" exact>Foods</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link active-class="is-active" to="/native" class="nav-link" exact>Native</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link active-class="is-active" to="/timeLiner" class="nav-link" exact>TimeLiner</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link active-class="is-active" to="/register" class="nav-link" exact>Register</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link active-class="is-active" to="/open1999" class="nav-link" exact>open1999</nuxt-link>
        </li>
    </ul>

    <!-- <div v-if="loading" class="loader loader-curtain is-active"></div> -->
    <loading v-if="loading"></loading>

    <!-- displays the page component -->
    <nuxt/>
  </div>
</template>


<script>
import { mapGetters } from 'vuex'
import loading from '~/components/Loading.vue'

export default {
  components: {
    loading,
  },
  computed: mapGetters({
    // 取得 loading state
    loading: 'getLoading',
  }),
}
</script>


<style lang="scss">
.is-loading {
  opacity: 0;
}

.nav {
  background-color: rgba(0, 0, 0, .5);
}

.nav-link {
  color: #000;
  &:hover {
    color: #fff;
  }
  &.is-active {
    color: #fff;
  }
}

</style>
