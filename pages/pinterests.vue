<template>
    <section class="section">
        <h1>hello world</h1>

    </section>
</template>


<script>
export default {
  data() {
    return {
      pinterests: [
        { id: 1, tag: 'food', title: 'food one', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ducimus aperiam vel laboriosam maxime dolor modi neque sed incidunt nostrum?', picture: 'http://lorempixel.com/200/300/food/', userCover: 'http://lorempixel.com/150/150/people/', userName: 'Finch Madam' },
        { id: 2, tag: 'food', title: 'food two', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ducimus aperiam vel laboriosam maxime dolor modi neque sed incidunt nostrum?', picture: 'http://lorempixel.com/200/300/food/', userCover: 'http://lorempixel.com/150/150/people/', userName: 'Princess Gutsy Alligator' },
        { id: 3, tag: 'food', title: 'food three', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ducimus aperiam vel laboriosam maxime dolor modi neque sed incidunt nostrum?', picture: 'http://lorempixel.com/200/300/food/', userCover: 'http://lorempixel.com/150/150/people/', userName: 'Froglet Silver' },
        { id: 4, tag: 'food', title: 'food four', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ducimus aperiam vel laboriosam maxime dolor modi neque sed incidunt nostrum?', picture: 'http://lorempixel.com/200/300/food/', userCover: 'http://lorempixel.com/150/150/people/', userName: 'Elastic Beast' },
        { id: 5, tag: 'food', title: 'food five', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ducimus aperiam vel laboriosam maxime dolor modi neque sed incidunt nostrum?', picture: 'http://lorempixel.com/200/300/food/', userCover: 'http://lorempixel.com/150/150/people/', userName: 'GnuGnu' },

        { id: 6, tag: 'fashion', title: 'fashion one', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ducimus aperiam vel laboriosam maxime dolor modi neque sed incidunt nostrum?', picture: 'http://lorempixel.com/200/300/fashion/', userCover: 'http://lorempixel.com/150/150/people/', userName: 'Bad Bad Hamster' },
        { id: 7, tag: 'fashion', title: 'fashion two', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ducimus aperiam vel laboriosam maxime dolor modi neque sed incidunt nostrum?', picture: 'http://lorempixel.com/200/300/fashion/', userCover: 'http://lorempixel.com/150/150/people/', userName: 'Vital Leopard' },
        { id: 8, tag: 'fashion', title: 'fashion three', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ducimus aperiam vel laboriosam maxime dolor modi neque sed incidunt nostrum?', picture: 'http://lorempixel.com/200/300/fashion/', userCover: 'http://lorempixel.com/150/150/people/', userName: 'Insane Farrow' },
        { id: 9, tag: 'fashion', title: 'fashion four', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ducimus aperiam vel laboriosam maxime dolor modi neque sed incidunt nostrum?', picture: 'http://lorempixel.com/200/300/fashion/', userCover: 'http://lorempixel.com/150/150/people/', userName: 'Brutal BirdieGnuGnu' },
        { id: 10, tag: 'fashion', title: 'fashion five', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ducimus aperiam vel laboriosam maxime dolor modi neque sed incidunt nostrum?', picture: 'http://lorempixel.com/200/300/fashion/', userCover: 'http://lorempixel.com/150/150/people/', userName: 'Lone Bella' },

        { id: 11, tag: 'animals', title: 'animals one', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ducimus aperiam vel laboriosam maxime dolor modi neque sed incidunt nostrum?', picture: 'http://lorempixel.com/200/300/animals/', userCover: 'http://lorempixel.com/150/150/people/', userName: 'Detective Strong' },
        { id: 12, tag: 'animals', title: 'animals two', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ducimus aperiam vel laboriosam maxime dolor modi neque sed incidunt nostrum?', picture: 'http://lorempixel.com/200/300/animals/', userCover: 'http://lorempixel.com/150/150/people/', userName: 'Los Monkey' },
        { id: 13, tag: 'animals', title: 'animals three', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ducimus aperiam vel laboriosam maxime dolor modi neque sed incidunt nostrum?', picture: 'http://lorempixel.com/200/300/animals/', userCover: 'http://lorempixel.com/150/150/people/', userName: 'Beauty Baron' },

        { id: 14, tag: 'sports', title: 'sports one', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ducimus aperiam vel laboriosam maxime dolor modi neque sed incidunt nostrum?', picture: 'http://lorempixel.com/200/300/sports/', userCover: 'http://lorempixel.com/150/150/people/', userName: 'Ruthless Doe' },
        { id: 15, tag: 'sports', title: 'sports two', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ducimus aperiam vel laboriosam maxime dolor modi neque sed incidunt nostrum?', picture: 'http://lorempixel.com/200/300/sports/', userCover: 'http://lorempixel.com/150/150/people/', userName: 'Forsaken Nymph' },
        { id: 16, tag: 'sports', title: 'sports three', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ducimus aperiam vel laboriosam maxime dolor modi neque sed incidunt nostrum?', picture: 'http://lorempixel.com/200/300/sports/', userCover: 'http://lorempixel.com/150/150/people/', userName: 'El Warrior' },
        { id: 17, tag: 'sports', title: 'sports four', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ducimus aperiam vel laboriosam maxime dolor modi neque sed incidunt nostrum?', picture: 'http://lorempixel.com/200/300/sports/', userCover: 'http://lorempixel.com/150/150/people/', userName: 'Gangster Grotesque' },

        { id: 18, tag: 'city', title: 'city one', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ducimus aperiam vel laboriosam maxime dolor modi neque sed incidunt nostrum?', picture: 'http://lorempixel.com/200/300/city/', userCover: 'http://lorempixel.com/150/150/people/', userName: 'Grotesque Student' },
        { id: 19, tag: 'city', title: 'city two', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ducimus aperiam vel laboriosam maxime dolor modi neque sed incidunt nostrum?', picture: 'http://lorempixel.com/200/300/city/', userCover: 'http://lorempixel.com/150/150/people/', userName: 'Dancing Galaxy' },

        { id: 20, tag: 'abstract', title: 'abstract one', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ducimus aperiam vel laboriosam maxime dolor modi neque sed incidunt nostrum?', picture: 'http://lorempixel.com/200/300/abstract/', userCover: 'http://lorempixel.com/150/150/people/', userName: 'Strong Warrior' },


      ],
    }
  },
}
</script>
