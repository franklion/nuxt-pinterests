<template>
  <section>
    <blockquote class="blockquote text-center">
      <h1 class="mb-0">我的食物清單</h1>
      <footer class="blockquote-footer">天然健康的食材</footer>
    </blockquote>
    <!-- 按鈕區域 -->
    <div class="bt">
      <button type="button" class="btn btn-outline-primary" @click="shuffle">Shuffle</button>
      <button type="button" class="btn btn-outline-danger" @click="reset">Reset</button>
      <button type="button" class="btn btn-outline-dark" @click="cake">cake</button>
      <button type="button" class="btn btn-outline-dark" @click="juice">juice</button>
      <button type="button" class="btn btn-outline-dark" @click="pizza">Pizza</button>
      <div class="input-group">
        <input type="text" class="form-control" placeholder="Search Name" aria-label="Username" aria-describedby="sizing-addon2">
      </div>
    </div>

    <!-- 因為每一個項目都需要執行獨立的動畫，所以用transition-group把他們包覆起來 -->
    <!-- 可以自訂一個轉場的name，並且配合自己寫的css -->
    <!-- 特別注意 每一個項目都需要一個唯一的 key屬性(不要使用index) -->
    <!-- 原因是index跟item沒有綁定再一起，index是這個陣列的索引，一旦陣列被打散或改變將會追蹤不到 -->
    <!-- 可以使用:key="item" or :key="item.id" -->
    <!-- https://vuejs.org/v2/guide/list.html#key -->
    <transition-group name="flip" tag="div" class="card-wrapper">
      <div v-for="(item, index) in filteredItems" :key="item.id" class="card">
        <div class="card-body">
          <h4 class="">{{index}} - {{ item.title }}</h4>
          <p class="card-text">{{ item.dec }}</p>
          <div class="card-photo">
            <img class="card-img" :src="item.pic">
          </div>
        </div>
      </div>
    </transition-group>

  </section>
</template>

<script>
export default {
  data() {
    return {
      /* 2017-10-17 items中id不可以重複 v-for要使用到 */
      items: [
        {
          id: 1,
          tag: 'cake',
          title: 'cake',
          pic: 'http://icons.iconarchive.com/icons/mohsenfakharian/christmas/512/cake-icon.png',
          dec: ' I like cake ',
        },
        {
          id: 2,
          tag: 'pizza',
          title: 'Pizza',
          pic: 'http://pizzerialarusticaspezzano.it/wp-content/uploads/2015/08/verdure_trasp.png',
          dec: ' I like pizza',
        },
        {
          id: 3,
          tag: 'juice',
          title: 'Juice',
          pic: 'http://hungryicon.com/sites/default/files/private/juice-bottles_1542121823.png',
          dec: ' I like juice ',
        },
        {
          id: 4,
          tag: 'cake',
          title: 'cake',
          pic: 'http://icons.iconarchive.com/icons/mohsenfakharian/christmas/512/cake-icon.png',
          dec: ' I like cake ',
        },
        {
          id: 5,
          tag: 'cake',
          title: 'cake',
          pic: 'http://icons.iconarchive.com/icons/mohsenfakharian/christmas/512/cake-icon.png',
          dec: ' I like cake ',
        },
        {
          id: 6,
          tag: 'juice',
          title: 'Juice',
          pic: 'http://hungryicon.com/sites/default/files/private/juice-bottles_1542121823.png',
          dec: ' I like juice ',
        },
        {
          id: 7,
          tag: 'cake',
          title: 'cake',
          pic: 'http://icons.iconarchive.com/icons/mohsenfakharian/christmas/512/cake-icon.png',
          dec: ' I like cake ',
        },
        {
          id: 8,
          tag: 'pizza',
          title: 'Pizza',
          pic: 'http://pizzerialarusticaspezzano.it/wp-content/uploads/2015/08/verdure_trasp.png',
          dec: ' I like pizza',
        },
        {
          id: 9,
          tag: 'juice',
          title: 'Juice',
          pic: 'http://hungryicon.com/sites/default/files/private/juice-bottles_1542121823.png',
          dec: ' I like juice ',
        },
        {
          id: 10,
          tag: 'pizza',
          title: 'Pizza',
          pic: 'http://pizzerialarusticaspezzano.it/wp-content/uploads/2015/08/verdure_trasp.png',
          dec: ' I like pizza',
        },
        {
          id: 11,
          tag: 'pizza',
          title: 'Pizza',
          pic: 'http://pizzerialarusticaspezzano.it/wp-content/uploads/2015/08/verdure_trasp.png',
          dec: ' I like pizza',
        }
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
    pizza() {
      // 選擇要過濾的項目為juice
      this.filteredItem = 'pizza'
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
/* 2017-10-17 縮短動畫時間*/
.flip-move {
  transition: transform 1s;
}


/* 一進場 & 一離場 */


/* 淡入淡出 */
/* 2017-10-17 opacity: 0 可以有淡入淡出 */
.flip-enter,
.flip-leave-to {
  opacity: 0;
  transition: all 1s;
}

/* 2017-10-17 改變定位使用絕對定位 這樣所有卡片會往左上角移動 */
.flip-leave-active {
  position: absolute;
}


/* 離場的整個動畫 */


/* 當離場結束後就恢復原狀 */


/* 使用absolute所以每個項目將會往左上角靠攏 */

/* 2017-10-17 用來包覆所有的card */
.card-wrapper {
  padding: 15px 0;
}

/* 2017-10-17 */
.card {
  width: 200px;
  height: auto;
  /* float: left; */
  margin: 15px;
  display: inline-block;
  background-color: transparent;
}

section {
  margin-left: 10px;
}
</style>

