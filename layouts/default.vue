<template>
  <div>
    <!-- navigation -->
    <ul class="nav">
      <li class="nav-item">
        <nuxt-link active-class="is-active" to="/" class="nav-link active" exact>Home</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link active-class="is-active" to="/pinterests" class="nav-link" exact>Pinterests</nuxt-link>
      </li>
    </ul>

    <!-- displays the page component -->
    <nuxt/>
  </div>
</template>

<style>

</style>
