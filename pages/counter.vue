<template>
    <div class="counter-section">
        <button @click="add">click</button>
        <!-- <p>counter: {{ counter }}</p> -->
        <!-- <appCount :number="counter" @resetCount="counter = $event"></appCount> -->
        <appCount :number="counter" @resetCount="reset($event)"></appCount>
    </div>
</template>

<script>
import countView from '~/components/CountView.vue'


export default {
  data() {
    return {
      counter: 0,
    }
  },
  methods: {
    add() {
      this.counter += 1
    },
    reset($event) {
      console.log($event)
      this.counter = $event
    },
  },
  components: {
    appCount: countView,
  },
}
</script>

<style>
.counter-section {
    text-align: center;
    padding-top: 50px;
}
</style>


