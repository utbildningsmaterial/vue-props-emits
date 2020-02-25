<template>
    <main id="b">
        <h1 @click="gotoA">B</h1>
        <GrandChild 
        :people="people"
        v-on:hi="sayHi"
        />
    </main>
</template>
<script>
import GrandChild from '@/components/GrandChild';

export default {
    name: 'ChildB',
    components: {
        GrandChild
    },
    props: {
        people: Array
    },
    methods: {
        gotoA(){
            this.$router.push('/')
        },
        sayHi(payload){
            this.$emit('hi', payload);
        }
    }
}
</script>
<style lang="scss">
#b {
    background: green;
}
</style>