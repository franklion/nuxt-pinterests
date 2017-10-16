<template>
  <section class="container">

    <h1>Timeliner Demo</h1>

    <div class="time-liner">

      <div class="timeline-wrapper" v-for="item in items" :key="item.id">
        <!-- step3 使用元件 -->
        <!-- 透過props把資料傳到元件 -->
        <timelineItem :item="item"></timelineItem>
      </div>

    </div>

  </section>
</template>


<script>
// step1 引入元件
import timelineItem from '~/components/TimelineItem.vue'

export default {
  data() {
    return {
      items: [
        {
          id: 1,
          year: 1998,
          event: [
            {
              title: 'FLYING CARS1',
              context: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam necessitatibus reprehenderit veniam aliquid aperiam, amet ratione, possimus saepe accusantium accusamus aut hic praesentium ad a nam iste sed, rem dolor asperiores vel magnam at voluptatibus maiores quo. Esse odio dicta maiores! Eligendi quod eveniet repudiandae perspiciatis! Dolore ad vero repudiandae!',
              image: 'http://lorempixel.com/200/200/sports/',
              isActive: false,
            },
            {
              title: 'FLYING CARS2',
              context: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam necessitatibus reprehenderit veniam aliquid aperiam, amet ratione, possimus saepe accusantium accusamus aut hic praesentium ad a nam iste sed, rem dolor asperiores vel magnam at voluptatibus maiores quo. Esse odio dicta maiores! Eligendi quod eveniet repudiandae perspiciatis! Dolore ad vero repudiandae!',
              image: 'http://lorempixel.com/200/200/sports/',
              isActive: false,
            },
          ],
        },
        {
          id: 2,
          year: 2000,
          event: [
            {
              title: 'FLYING CARS1',
              context: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam necessitatibus reprehenderit veniam aliquid aperiam, amet ratione, possimus saepe accusantium accusamus aut hic praesentium ad a nam iste sed, rem dolor asperiores vel magnam at voluptatibus maiores quo. Esse odio dicta maiores! Eligendi quod eveniet repudiandae perspiciatis! Dolore ad vero repudiandae!',
              image: 'http://lorempixel.com/200/200/sports/',
              isActive: false,
            },
          ],
        },
        {
          id: 3,
          year: 2010,
          event: [
            {
              title: 'FLYING CARS1',
              context: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam necessitatibus reprehenderit veniam aliquid aperiam, amet ratione, possimus saepe accusantium accusamus aut hic praesentium ad a nam iste sed, rem dolor asperiores vel magnam at voluptatibus maiores quo. Esse odio dicta maiores! Eligendi quod eveniet repudiandae perspiciatis! Dolore ad vero repudiandae!',
              image: 'http://lorempixel.com/200/200/sports/',
              isActive: false,
            },
            {
              title: 'FLYING CARS2',
              context: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam necessitatibus reprehenderit veniam aliquid aperiam, amet ratione, possimus saepe accusantium accusamus aut hic praesentium ad a nam iste sed, rem dolor asperiores vel magnam at voluptatibus maiores quo. Esse odio dicta maiores! Eligendi quod eveniet repudiandae perspiciatis! Dolore ad vero repudiandae!',
              image: 'http://lorempixel.com/200/200/sports/',
              isActive: false,
            },
            {
              title: 'FLYING CARS3',
              context: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam necessitatibus reprehenderit veniam aliquid aperiam, amet ratione, possimus saepe accusantium accusamus aut hic praesentium ad a nam iste sed, rem dolor asperiores vel magnam at voluptatibus maiores quo. Esse odio dicta maiores! Eligendi quod eveniet repudiandae perspiciatis! Dolore ad vero repudiandae!',
              image: 'http://lorempixel.com/200/200/sports/',
              isActive: false,
            },
          ],
        },
        {
          id: 4,
          year: 2010,
          event: [],
        }
      ],
    }
  },
  components: {
    // step2 註冊元件
    timelineItem,
  },
}
</script>


<style lang="scss">
// 滑入 滑出
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

// 淡入 淡出
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

.container {
  padding: 100px 0;
}

.timeline-wrapper {
  padding-left: 68px;
  margin-bottom: 30px;
}

.time-liner {
  position: relative;
  background-color: rgba(0, 0, 0, .2);

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
