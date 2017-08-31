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
    </ul>

    <!-- displays the page component -->
    <nuxt/>
  </div>
</template>

<style lang="scss">

.nav {
  background-color: rgba(0,0,0,.5);
}

.nav-link {
  color: #000;
  &:hover {

  }
  &.is-active {
     color: #fff; 
  }
}

</style>
