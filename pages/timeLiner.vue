<template>
  <section class="container">

    <h1>Timeliner Demo</h1>

    <div class="time-liner">

      <div class="timeline-wrapper" v-for="item in items" :key="item.id">
        <timelineItem :item="item"></timelineItem>
      </div>

    </div>

  </section>
</template>


<script>
import timelineItem from '~/components/TimelineItem.vue'

export default {
  data() {
    return {
      items: [
        {
          id: 1,
          year: 1998,
          title: 'FLYING CARS',
          context: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam necessitatibus reprehenderit veniam aliquid aperiam, amet ratione, possimus saepe accusantium accusamus aut hic praesentium ad a nam iste sed, rem dolor asperiores vel magnam at voluptatibus maiores quo. Esse odio dicta maiores! Eligendi quod eveniet repudiandae perspiciatis! Dolore ad vero repudiandae!',
          image: 'http://lorempixel.com/200/200/sports/',
        },
        {
          id: 2,
          year: 2000,
          title: 'FLYING CARS',
          context: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam necessitatibus reprehenderit veniam aliquid aperiam, amet ratione, possimus saepe accusantium accusamus aut hic praesentium ad a nam iste sed, rem dolor asperiores vel magnam at voluptatibus maiores quo. Esse odio dicta maiores! Eligendi quod eveniet repudiandae perspiciatis! Dolore ad vero repudiandae!',
          image: 'http://lorempixel.com/200/200/sports/',
        },
        {
          id: 3,
          year: 2010,
          title: 'FLYING CARS',
          context: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam necessitatibus reprehenderit veniam aliquid aperiam, amet ratione, possimus saepe accusantium accusamus aut hic praesentium ad a nam iste sed, rem dolor asperiores vel magnam at voluptatibus maiores quo. Esse odio dicta maiores! Eligendi quod eveniet repudiandae perspiciatis! Dolore ad vero repudiandae!',
          image: 'http://lorempixel.com/200/200/sports/',
        }],
      isActive: false,
    }
  },
  components: {
    timelineItem,
  },
}
</script>


<style lang="scss">
.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(-30px);
  opacity: 0;
}


.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s
}

.fade-enter,
.fade-leave-to {
  opacity: 0
}



.flip-move {
  transition: transform 1s;
}





/* 一進場 & 一離場 */


/* 淡入淡出 */

.flip-enter,
.flip-leave-to {
  opacity: 0;
  transition: all 1s;
}





/* 離場的整個動畫 */


/* 當離場結束後就恢復原狀 */


/* 使用absolute所以每個項目將會往左上角靠攏 */

.flip-leave-active {
  position: absolute;
}

.container {
  padding: 100px 0;
}

.timeline-wrapper {
  padding-left: 68px;
  margin-bottom: 30px;
}

.time-liner {
  position: relative;
  height: 100vh; // border-left: 4px solid rgba(0, 69, 121, 0.65);
  background-color: rgba(0, 0, 0, .3);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 68px;
    height: 100%;
    width: 4px;
    background: rgba(0, 69, 121, 0.65);
    ;
  }

  .timeline-time {
    cursor: pointer;
    font-size: 2.8em;
    font-weight: 400;
    margin: 0 0 30px 0;
    padding: 0;
    &::before {
      border-top: 4px solid rgba(0, 69, 121, 0.65);
      content: "";
      display: inline-block;
      height: 4px;
      margin-right: 0px;
      vertical-align: middle;
      width: 24px;
    }
    span {
      background: rgba(0, 69, 121, 0.65);
      border-radius: 10px;
      color: rgba(255, 255, 255, 0.85);
      display: inline-block;
      letter-spacing: 0;
      padding: 5px 10px;
      text-align: center;
    }
  }

  .timeline-series {


    .timeline-series-title {
      &::before {
        border-top: 3px solid rgba(0, 69, 121, 0.65);
        content: "";
        display: inline-block;
        height: 3px;
        margin-right: 10px;
        vertical-align: middle;
        width: 10px;
      }

      span {
        color: rgba(255, 255, 255, 0.4);
        cursor: pointer;
        display: inline-block;
      }
    }

    .timeline-event-content {
      padding: 0 36px 0 20px;
      display: flex;
      justify-content: flex-end;
      p {
        padding-right: 12px;
        text-align: justify;
      }
    }
  }
}
</style>
