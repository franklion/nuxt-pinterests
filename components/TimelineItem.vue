<template>
  <div class="timeline-item">
    <h2 class="timeline-time">
      <span>{{item.year}}</span>
    </h2>

    <div class="timeline-series" v-for="(event,index) in item.event" :key="index" @click="toggle(event)">
      <h2 class="timeline-series-title">
        <span>{{ event.title }}</span>
      </h2>

      <!-- transition 配合v-show來觸發動畫 -->
      <!-- [情境設計] event.isActive 為true or false -->
      <transition name="slide-fade" tag="div">
        <div class="timeline-event-content" v-show="event.isActive">
          <p>{{event.context}}</p>
          <img :src="event.image" alt="">
        </div>
      </transition>
    </div>

  </div>
</template>

<script>
export default {
  // props 父主件與元件溝通的屬性資料，雙方講好名字就好
  props: ['item'],
  data() {
    return {
      // 不在此宣告變數來記錄是否執行過動畫，因為所有的項目將會共同此變數，造成無法分辨哪一個執行過!
      // isActive: false,
    }
  },
  methods: {
    toggle(event) {
      // 點擊後把該項目中的變數(紀錄是否執行過動畫)進行反轉
      // 小作業: 打開Vue Devtools 觀察props中isActice數值 以及 父主件items中isActice數值
      event.isActive = !event.isActive
      console.log(event.isActive)
    },
  },
}
</script>

<style lang="scss">
.timeline-item {
  padding-top: 45px;
}
</style>

