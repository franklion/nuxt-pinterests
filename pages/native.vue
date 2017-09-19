<template>
  <section>

    <!-- 按鈕區域 -->
    <div>
      <button @click="shuffle">Shuffle</button>
      <button @click="reset">Reset</button>
      <button @click="cake">cake</button>
      <button @click="juice">juice</button>
    </div>

    <!-- 因為每一個項目都需要執行獨立的動畫，所以用transition-group把他們包覆起來 -->
    <!-- 可以自訂一個轉場的name，並且配合自己寫的css -->
    <!-- 特別注意 每一個項目都需要一個唯一的 key屬性(不要使用index) -->
    <!-- 原因是index跟item沒有綁定再一起，index是這個陣列的索引，一旦陣列被打散或改變將會追蹤不到 -->
    <!-- 可以使用:key="item" or :key="item.id" -->
    <!-- https://vuejs.org/v2/guide/list.html#key -->
    <transition-group name="flip" tag="div">
      <div v-for="(item, index) in filteredItems" :key="item.id">
        <h4 class="">{{index}} - {{ item.title }}</h4>
      </div>
    </transition-group>

  </section>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          tag: 'cake',
          title: 'Candy',
          pic: 'http://lorempixel.com/400/200/sports/',
          dec: ' I like cake ',
        },
        {
          id: 2,
          tag: 'sweet',
          title: 'Sweet',
          pic: 'http://lorempixel.com/400/200/sports/',
          dec: ' I like sweet',
        },
        {
          id: 3,
          tag: 'juice',
          title: 'Apple Juice',
          pic: 'http://lorempixel.com/400/200/sports/',
          dec: ' I like cake ',
        },
        {
          id: 4,
          tag: 'cake',
          title: 'Candy',
          pic: 'http://lorempixel.com/400/200/sports/',
          dec: ' I like cake ',
        },
        {
          id: 5,
          tag: 'juice',
          title: 'Candy',
          pic: 'http://lorempixel.com/400/200/sports/',
          dec: ' I like cake ',
        },
        {
          id: 6,
          tag: 'juice',
          title: 'Apple Juice',
          pic: 'http://lorempixel.com/400/200/sports/',
          dec: ' I like cake ',
        },
        {
          id: 7,
          tag: 'cake',
          title: 'Candy',
          pic: 'http://lorempixel.com/400/200/sports/',
          dec: ' I like cake ',
        },
        {
          id: 8,
          tag: 'cake',
          title: 'Candy',
          pic: 'http://lorempixel.com/400/200/sports/',
          dec: ' I like cake ',
        },
        {
          id: 9,
          tag: 'cake',
          title: 'Apple Juice',
          pic: 'http://lorempixel.com/400/200/sports/',
          dec: ' I like cake ',
        },
      ],
      filteredItem: null,
    }
  },
  computed: {
    filteredItems() {
      // 當一載入頁面什麼都沒有選，this.filteredItem === null 將為TRUE，則顯示所有項目
      // 當按了過濾TAG按鈕後 filteredItem將會改變數值，則進行第二個條件式判斷
      return this.items.filter(item => (this.filteredItem === null ? true : (item.tag === this.filteredItem)))
    },
  },
  methods: {
    shuffle() {
      // 把項目打散，使用lodash library減少我們寫複雜的code
      // 記得在nuxt.config.js中載入lodash
      this.items = _.shuffle(this.items)
    },
    reset() {
      // 選擇要過濾的項目為空的(回到預設值)
      this.filteredItem = null
    },
    cake() {
      // 選擇要過濾的項目為cake
      this.filteredItem = 'cake'
    },
    juice() {
      // 選擇要過濾的項目為juice
      this.filteredItem = 'juice'
    },
  },
}
</script>
<style>
/* 官網動畫文件 */
/* https://vuejs.org/v2/guide/transitions.html#Transition-Classes */


/* 針對每個項目的移動 調整動畫時間 */
/* 可以試試看 transform 0s 和 1s的差別 */
/* https://vuejs.org/v2/guide/transitions.html#List-Move-Transitions */
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
</style>

