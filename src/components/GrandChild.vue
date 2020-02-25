<template>
    <section id="grandchild">
        <h2>Hi, im a a grandchild!</h2>
        <button @click="sayHi">Say Hi to App!</button>
        <ul>
            <li v-for="(person, index) in people" :key="index" > {{ person.name }}</li>
        </ul>
    </section>
</template>
<script>
export default {
    name: 'GrandChild',
    props: {
        people: Array
    },
    data(){
        return {
            payload: { msg: 'Hello'}
        }
    },
    methods: {
        sayHi(){
            this.$emit('hi', this.payload);
        }
    }
}
</script>
<style lang="scss">
#grandchild {
    background: yellow;
}
</style>