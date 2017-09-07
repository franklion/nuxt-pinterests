<template>
  <section class="container">
  <section class="container">
    <div class="jumbotron">
      <h1>Nuxt Pinterests</h1>
      <p>Search something what you want!</p>
    </div>

    <div class="btn-panel">
      <button type="button" class="btn btn-outline-primary" @click="shuffle">shuffle</button>
      <button type="button" class="btn btn-outline-danger" @click="reset">reset</button>
    </div>

    <div class="btn-panel">
      <h3>Fliter第一種寫法</h3>
      <button type="button" class="btn btn-outline-success" @click="filterFood">food</button>
      <button type="button" class="btn btn-outline-success" @click="filterFashion">fashion</button>
      <button type="button" class="btn btn-outline-success" @click="filterAnimals">animals</button>
      <button type="button" class="btn btn-outline-success" @click="filterSports">sports</button>
      <button type="button" class="btn btn-outline-success" @click="filterCity">city</button>
      <button type="button" class="btn btn-outline-success" @click="filterAbstract">abstract</button>
    </div>

    <div class="btn-panel">
      <h3>Fliter第二種寫法</h3>
      <button type="button" class="btn btn-outline-success" @click="fliterTag(tag)" v-for="(tag, index) in tags" :key="index">{{ tag }}</button>
    </div>

    <div class="btn-panel">
      <label class="btn-panel-label">排列方式 :</label>

      <div class="form-check form-check-inline">
        <label class="form-check-label">
          <input class="form-check-input" type="radio" name="inlineRadioOptions" value="normal" v-model="arrangement" @change="onChangeArrangement"> 標準
        </label>
      </div>
      <div class="form-check form-check-inline disabled">
        <label class="form-check-label">
          <input class="form-check-input" type="radio" name="inlineRadioOptions" value="sequence" v-model="arrangement" @change="onChangeArrangement"> 序列
        </label>
      </div>
    </div>

    <!-- card group -->
    <div class="row grid">
      <div class="col-12 col-sm-6 col-md-4 top-offset grid-item" v-for="(pinterest, index) in pinterests" :key="index" :class="[pinterest.tag, {'is-sequence': isSequence}]">
        <Card :pinterest="pinterest" :arrangement="arrangement"></Card>
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
      arrangement: 'normal',
    }
  },
  components: {
    Card,
  },
  computed: {
    isSequence() {
      return this.arrangement === 'sequence'
    },
    tags() {
      return this.pinterests.reduce((container, pinterest) => {
        const existingElement = container.find(target => target === pinterest.tag)
        if (!existingElement) {
          container.push(pinterest.tag)
        }
        return container
      }, [])
    },
  },
  methods: {
    reset() {
      $('.grid').isotope({ filter: '' })
    },
    shuffle() {
      $('.grid').isotope('shuffle')
    },
    fliterTag(tag) {
      $('.grid').isotope({ filter: `.${tag}` })
    },
    filterFood() {
      $('.grid').isotope({ filter: '.food' })
    },
    filterFashion() {
      $('.grid').isotope({ filter: '.fashion' })
    },
    filterAnimals() {
      $('.grid').isotope({ filter: '.animals' })
    },
    filterSports() {
      $('.grid').isotope({ filter: '.sports' })
    },
    filterCity() {
      $('.grid').isotope({ filter: '.city' })
    },
    filterAbstract() {
      $('.grid').isotope({ filter: '.abstract' })
    },
    onChangeArrangement() {
      $('.grid').isotope('layout')
    },
  },
  mounted() {
    const $grid = $('.grid')

    // init Isotope first, before imagesLoaded
    // percentPosition: to reduce adjustment transitions on window resize.
    $grid.isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      layoutMode: 'masonry',
    })
    // okay to call methods
    $grid.isotope('shuffle')

    // just do layout on imagesLoaded
    $grid.imagesLoaded(() => {
      $grid.isotope('layout')
    })
  },
}
</script>

<style lang="scss">
.top-offset {
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

.form-check-label,
.form-check-input {
  cursor: pointer;
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

.grid-item {

  &.is-sequence {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
}
</style>

