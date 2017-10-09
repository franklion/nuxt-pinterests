<template>
  <div class="container">

    <div class="jumbotron">
      <h1>Nuxt Foods</h1>
      <p>Search something what you want!</p>
    </div>

    <div class="btn-panel">
      <button type="button" class="btn btn-outline-danger" @click="shuffle">shuffle</button>
      <button type="button" class="btn btn-outline-danger" @click="reset">reset</button>
      <button type="button" class="btn btn-outline-success" @click="cake">cake</button>
      <button type="button" class="btn btn-outline-success" @click="juice">juice</button>
      <button type="button" class="btn btn-outline-success" @click="add">add</button>
    </div>

    <!-- <transition-group name="apple" tag="div" class="list-group789">
      <div v-for="item in filteredItems" :key="item.id" class="col-12 col-sm-6 col-md-3 list-group-item666">
        <div class="food">
          {{ item.dec }}
        </div>
      </div>
    </transition-group> -->

    <transition-group name="apple" tag="div" class="">
      <div v-for="item in filteredItems" :key="item.id" class="">
        <div class="food">
          {{ item.dec }}
        </div>
      </div>
    </transition-group>

  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          tag: 'cake',
          title: 'cake',
          pic: 'http://lorempixel.com/400/200/sports/',
          dec: ' I like cake',
          status: true,
        },
        {
          id: 2,
          tag: 'sweet',
          title: 'sweet',
          pic: 'http://lorempixel.com/400/200/sports/',
          dec: ' I like sweet',
          status: false,
        },
        {
          id: 3,
          tag: 'juice',
          title: 'Apple juice',
          pic: 'http://lorempixel.com/400/200/sports/',
          dec: ' I like juice',
          status: true,
        },
        {
          id: 4,
          tag: 'cake',
          title: 'cake',
          pic: 'http://lorempixel.com/400/200/sports/',
          dec: ' I like cake',
        },
        {
          id: 5,
          tag: 'juice',
          title: 'juice',
          pic: 'http://lorempixel.com/400/200/sports/',
          dec: ' I like juice',
        },
        {
          id: 6,
          tag: 'juice',
          title: 'Apple juice',
          pic: 'http://lorempixel.com/400/200/sports/',
          dec: ' I like juice',
        },
        {
          id: 7,
          tag: 'cake',
          title: 'cake',
          pic: 'http://lorempixel.com/400/200/sports/',
          dec: ' I like cake',
        },
        {
          id: 8,
          tag: 'cake',
          title: 'cake',
          pic: 'http://lorempixel.com/400/200/sports/',
          dec: ' I like cake',
        },
        // {
        //   id: 9,
        //   tag: 'cake',
        //   title: 'Apple cake',
        //   pic: 'http://lorempixel.com/400/200/sports/',
        //   dec: ' I like cake',
        // },
      ],
      filteredItem: null,
    }
  },
  computed: {
    // const filteredlikeStatusCondition = this.filteredlikeStatus === null ? true : (item.status === this.filteredlikeStatus)
    // return filteredlikeStatusCondition

    filteredItems() {
      return this.items.filter(item => (this.filteredItem === null ? true : (item.tag === this.filteredItem)))


      // return this.items.filter(item => (this.filteredlikeStatus === null ? true : (item.tag == 'cake')))
      //  this.items.filter(item => (this.filteredItem === null ? true : (item.tag === this.filteredItem)))
    },
  },
  methods: {
    shuffle() {
      this.items = _.shuffle(this.items)
    },
    reset() {
      this.filteredItem = null
    },
    cake() {
      this.filteredItem = 'cake'
      // this.list = this.items.filter(item => item.tag === 'cake')
    },
    juice() {
      this.filteredItem = 'juice'
      // this.list = this.items.filter(item => item.tag === 'juice')
    },
    add() {
      this.items.push({
        id: 1,
        tag: 'cake',
        title: 'Candy',
        pic: 'http://lorempixel.com/400/200/sports/',
        dec: ' I like cake ',
      })
    },
  },
}
</script>

<style lang="scss">
body {
  min-height: 100vh;
  overflow: scroll;
}

.jumbotron {
  margin-top: 2rem;
}

.top-offset {
  margin-bottom: 20px;
}

.btn-panel {
  padding: 15px 0;
  border-radius: .3rem;
  margin-bottom: 2rem;
  background-color: #E9ECEF;

  & .btn-panel-label {
    margin-left: 1rem;
    margin-right: 1rem;
    font-weight: 700;
  }

  & .btn {
    margin: 20px;
    cursor: pointer;
  }

  h3 {
    margin: 0 20px;
  }
}

// .foods-wrapper {
//   display: flex;
//   flex-wrap: wrap;
//   width: 100%;
//   margin-top: 10px;
// }

// .cell {
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   margin-bottom: 2%;
   // width: 25%;
  // height: 25px; 
  // border: 1px solid #aaa;
  // margin-right: -1px;
  // margin-bottom: -1px;
// }

// .cell:nth-child(3n) {
//   margin-right: 0;
// }
// .cell:nth-child(27n) {
//   margin-bottom: 0;
// }


// .cell-move {
//   transition: transform 1s;
// }

/*
.food {
  width: 95%;
  padding: 1.25rem;
  border: 1px solid #aaa;
}

.list-group {
  flex-direction: row;
  flex-wrap: wrap;
}

.list-group-item {
  border: none;
  padding: 10px 10px;
  background-color: transparent;
}
*/



.apple-move {
  transition: transform 1s;
}

.apple-enter,
.apple-leave-to {
  opacity: 0;
  transition: all 1s;
}

.apple-leave-active {
  position: absolute;
}
</style>

