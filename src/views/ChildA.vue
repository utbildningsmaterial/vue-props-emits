<template>
    <main id="a">
        <h1 v-on:click="gotoB">A</h1>
    </main>
</template>
<script>
export default {
    name: 'ChildA',
    methods: {
        gotoB(){
            this.$router.push('/b');
        }
    }
}
</script>
<style lang="scss">
#a {
    background: red;
}
</style>