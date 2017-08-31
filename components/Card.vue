<template>
    <div class="card">
        <img class="card-img-top" :src="pinterest.picture" alt="Card image cap">
        <div class="card-body">
            <h4 class="card-title">{{ pinterest.title }}</h4>
            <p class="card-text">{{ pinterest.desc }}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'card',
  props: ['pinterest'],
}
</script>




<style>

</style>
