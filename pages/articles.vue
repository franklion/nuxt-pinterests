<template>
    <div id="list-complete-demo" class="demo">
        <!-- <div>
            <button v-on:click="shuffle">Shuffle</button>
            <button v-on:click="add">Add</button>
            <button v-on:click="remove">Remove</button>
            <button v-on:click="reset">Reset</button>
            <button v-on:click="cake">cake</button>
            <button v-on:click="juice">juice</button>
        </div> -->

        <transition-group name="list-complete" tag="div" class="">

            <div v-for="(item ,index) in items" :key="index" class="">

                <div class="">
                    <h4 class="">{{ item.title }}</h4>
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
      filteredCake: null,
      filteredJuice: null,
    }
  },
}
</script>
<style>
.top-offset {
    margin-bottom: 20px;
}

.list-group2 {
    display: flex;
    flex-wrap: wrap;
    /* width: 238px; */
    margin-top: 10px;
}

.list-group-item2 {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 1px solid #aaa;
    margin: 0 7px 10px;
    padding: 8px;
    /* transition: all 1s; */
    /* display: inline-block; */
    /* margin-right: 10px; */
}
/* .list-item-body {}

.title {}
.text {}
.photo {
    max-width: 100%;
} */

.list-complete-move {
    transition: transform 1s;
}

.list-complete-enter,
.list-complete-leave-to
{
    opacity: 0;
    transition: all 1s;
    /* transform: translateY(30px); */
}

.list-complete-leave-active {
    position: absolute;
}
</style>

