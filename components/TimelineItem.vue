<template>
  <div class="timeline-item">
    <h2 class="timeline-time" @click="toggle">
      <span>{{item.year}}</span>
    </h2>

    <div class="timeline-series">
      <h2 class="timeline-series-title">
        <span>{{ item.title }}</span>
      </h2>

      <transition name="slide-fade" tag="div">
        <div class="timeline-event-content" v-show="isActive">
          <p>{{item.context}}</p>
          <img :src="item.image" alt="">
        </div>
      </transition>

    </div>
  </div>
</template>

<script>
export default {
  props: ['item'],
  data() {
    return {
      isActive: false,
    }
  },
  methods: {
    toggle() {
      this.isActive = !this.isActive
    },
  },
}
</script>

<style lang="scss">
.timeline-item {
  padding-top: 45px;
}
</style>

