<template>
  <section class="container">

    <div class="jumbotron">
      <h1>Vue pinterest</h1>
      <p>Search something what you want!</p>
    </div>

    <div class="btn-panel">
      <button type="button" class="btn btn-outline-primary" @click="shuffle">shuffle</button>
      <button type="button" class="btn btn-outline-success" @click="reset">reset</button>
      <button type="button" class="btn btn-outline-success" @click="filterFood">food</button>
      <button type="button" class="btn btn-outline-success" @click="filterFashion">fashion</button>
    </div>

    <div class="row grid">
      <div class="col-12 col-sm-6 col-md-4 grid-item" v-for="(pinterest, index) in pinterests" :key="index" :class="pinterest.tag">
        <Card :pinterest="pinterest"></Card>
      </div>
    </div>

  </section>
</template>


<script>
import Card from '~/components/Card.vue'

export default {
  name: 'main',
  data() {
    return {
      pinterests: [
        {
          id: 1,
          tag: 'food',
          title: 'food one',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ducimus aperiam vel laboriosam maxime dolor modi neque sed incidunt nostrum?',
          picture: 'http://lorempixel.com/600/450/food/',
          userCover: 'http://lorempixel.com/150/150/people/',
          userName: 'Finch Madam',
        },
        {
          id: 2,
          tag: 'food',
          title: 'food two',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ducimus aperiam vel laboriosam maxime dolor modi neque sed incidunt nostrum?',
          picture: 'http://lorempixel.com/600/450/food/',
          userCover: 'http://lorempixel.com/150/150/people/',
          userName: 'Princess Gutsy Alligator',
        },
        {
          id: 3,
          tag: 'food',
          title: 'food three',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ducimus aperiam vel laboriosam maxime dolor modi neque sed incidunt nostrum?',
          picture: 'http://lorempixel.com/600/450/food/',
          userCover: 'http://lorempixel.com/150/150/people/',
          userName: 'Froglet Silver',
        },
        {
          id: 4,
          tag: 'food',
          title: 'food four',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ducimus aperiam vel laboriosam maxime dolor modi neque sed incidunt nostrum?',
          picture: 'http://lorempixel.com/600/450/food/',
          userCover: 'http://lorempixel.com/150/150/people/',
          userName: 'Elastic Beast',
        },
        {
          id: 5,
          tag: 'food',
          title: 'food five',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ducimus aperiam vel laboriosam maxime dolor modi neque sed incidunt nostrum?',
          picture: 'http://lorempixel.com/600/450/food/',
          userCover: 'http://lorempixel.com/150/150/people/',
          userName: 'GnuGnu',
        },

        {
          id: 6,
          tag: 'fashion',
          title: 'fashion one',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ducimus aperiam vel laboriosam maxime dolor modi neque sed incidunt nostrum?',
          picture: 'http://lorempixel.com/600/450/fashion/',
          userCover: 'http://lorempixel.com/150/150/people/',
          userName: 'Bad Bad Hamster',
        },
        {
          id: 7,
          tag: 'fashion',
          title: 'fashion two',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ducimus aperiam vel laboriosam maxime dolor modi neque sed incidunt nostrum?',
          picture: 'http://lorempixel.com/600/450/fashion/',
          userCover: 'http://lorempixel.com/150/150/people/',
          userName: 'Vital Leopard',
        },
        {
          id: 8,
          tag: 'fashion',
          title: 'fashion three',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ducimus aperiam vel laboriosam maxime dolor modi neque sed incidunt nostrum?',
          picture: 'http://lorempixel.com/600/450/fashion/',
          userCover: 'http://lorempixel.com/150/150/people/',
          userName: 'Insane Farrow',
        },
        {
          id: 9,
          tag: 'fashion',
          title: 'fashion four',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ducimus aperiam vel laboriosam maxime dolor modi neque sed incidunt nostrum?',
          picture: 'http://lorempixel.com/600/450/fashion/',
          userCover: 'http://lorempixel.com/150/150/people/',
          userName: 'Brutal BirdieGnuGnu',
        },
        {
          id: 10,
          tag: 'fashion',
          title: 'fashion five',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ducimus aperiam vel laboriosam maxime dolor modi neque sed incidunt nostrum?',
          picture: 'http://lorempixel.com/600/450/fashion/',
          userCover: 'http://lorempixel.com/150/150/people/',
          userName: 'Lone Bella',
        },

        {
          id: 11,
          tag: 'animals',
          title: 'animals one',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ducimus aperiam vel laboriosam maxime dolor modi neque sed incidunt nostrum?',
          picture: 'http://lorempixel.com/600/450/animals/',
          userCover: 'http://lorempixel.com/150/150/people/',
          userName: 'Detective Strong',
        },
        {
          id: 12,
          tag: 'animals',
          title: 'animals two',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ducimus aperiam vel laboriosam maxime dolor modi neque sed incidunt nostrum?',
          picture: 'http://lorempixel.com/600/450/animals/',
          userCover: 'http://lorempixel.com/150/150/people/',
          userName: 'Los Monkey',
        },
        {
          id: 13,
          tag: 'animals',
          title: 'animals three',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ducimus aperiam vel laboriosam maxime dolor modi neque sed incidunt nostrum?',
          picture: 'http://lorempixel.com/600/450/animals/',
          userCover: 'http://lorempixel.com/150/150/people/',
          userName: 'Beauty Baron',
        },

        {
          id: 14,
          tag: 'sports',
          title: 'sports one',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ducimus aperiam vel laboriosam maxime dolor modi neque sed incidunt nostrum?',
          picture: 'http://lorempixel.com/600/450/sports/',
          userCover: 'http://lorempixel.com/150/150/people/',
          userName: 'Ruthless Doe',
        },
        {
          id: 15,
          tag: 'sports',
          title: 'sports two',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ducimus aperiam vel laboriosam maxime dolor modi neque sed incidunt nostrum?',
          picture: 'http://lorempixel.com/600/450/sports/',
          userCover: 'http://lorempixel.com/150/150/people/',
          userName: 'Forsaken Nymph',
        },
        {
          id: 16,
          tag: 'sports',
          title: 'sports three',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ducimus aperiam vel laboriosam maxime dolor modi neque sed incidunt nostrum?',
          picture: 'http://lorempixel.com/600/450/sports/',
          userCover: 'http://lorempixel.com/150/150/people/',
          userName: 'El Warrior',
        },
        {
          id: 17,
          tag: 'sports',
          title: 'sports four',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ducimus aperiam vel laboriosam maxime dolor modi neque sed incidunt nostrum?',
          picture: 'http://lorempixel.com/600/450/sports/',
          userCover: 'http://lorempixel.com/150/150/people/',
          userName: 'Gangster Grotesque',
        },

        {
          id: 18,
          tag: 'city',
          title: 'city one',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ducimus aperiam vel laboriosam maxime dolor modi neque sed incidunt nostrum?',
          picture: 'http://lorempixel.com/600/450/city/',
          userCover: 'http://lorempixel.com/150/150/people/',
          userName: 'Grotesque Student',
        },
        {
          id: 19,
          tag: 'city',
          title: 'city two',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ducimus aperiam vel laboriosam maxime dolor modi neque sed incidunt nostrum?',
          picture: 'http://lorempixel.com/600/450/city/',
          userCover: 'http://lorempixel.com/150/150/people/',
          userName: 'Dancing Galaxy',
        },

        {
          id: 20,
          tag: 'abstract',
          title: 'abstract one',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ducimus aperiam vel laboriosam maxime dolor modi neque sed incidunt nostrum?',
          picture: 'http://lorempixel.com/600/450/abstract/',
          userCover: 'http://lorempixel.com/150/150/people/',
          userName: 'Strong Warrior',
        },


      ],
    }
  },
  components: {
    Card,
  },
  methods: {
    reset() {
      // this.pinterests = _.sortBy(this.pinterests, ['id']);
      // $('.grid').isotope({ filter: '*' });
    },
    shuffle() {
      // this.pinterests = _.shuffle(this.pinterests)
      $('.grid').isotope('shuffle')
    },
    filterFood() {
      $('.grid').isotope({ filter: '.food' })
    },
    filterFashion() {
      $('.grid').isotope({ filter: '.fashion' })
    }
  },
  mounted() {
    let $grid = $('.grid')

    $grid.isotope({
      itemSelector: '.grid-item',
      layoutMode: 'fitRows'
    });
    // okay to call methods
    $grid.isotope('shuffle')

    // just do layout on imagesLoaded
    $grid.imagesLoaded(function() {
      $grid.isotope('layout');
    });
  },
}
</script>

<style lang="scss">
// .grid-item {
//   width: 200px;
// }

// .grid-item--width2 {
//   width: 400px;
// }


[class*="col-"] {
  margin-bottom: 1.25rem;
}

.card-block {
  -webkit-box-flex: 1;
  -webkit-flex: 1 1 auto;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 1.25rem;
}

.jumbotron {
  margin-top: 2rem;
}

.btn-panel {
  padding: 25px 0;
  border-radius: .3rem;
  margin-bottom: 2rem;
  background-color: #E9ECEF;

  & .btn {
    margin: 0 20px;
    cursor: pointer;
  }
}
</style>

