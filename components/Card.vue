<template>
    <div class="card" :class="{'is-sequence': isSequence}">
        <div>
            <img class="card-img-top" :src="pinterest.picture" alt="Card image cap">
        </div>

        <div class="card-body">
            <h4 class="card-title">{{ pinterest.title }}</h4>
            <p class="card-text">{{ pinterest.desc }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'card',
    props: ['pinterest', 'arrangement'],
    computed: {
        isSequence() {
            return this.arrangement === 'sequence'
        }
    }
}
</script>




<style lang="scss">
.card.is-sequence {
    flex-direction: row;
}

// .card {
//     flex-direction: inherit;
// }
// .card-top {
//     display: flex;
//     justify-content: center;
//     align-items: center;
// }
</style>
