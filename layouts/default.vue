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
    </ul>

    <!-- displays the page component -->
    <nuxt/>
  </div>
</template>

<style lang="scss">
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
