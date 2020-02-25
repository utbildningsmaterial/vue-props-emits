<template>
  <div id="app">
    <input type="text" v-model="person.name">
    <button @click="addPerson">Add person</button>
    <div>{{ hello }}</div>
    <router-view 
      v-bind:people="people" 
      v-on:hi="sayHi"
    />
  </div>
</template>
<script>
export default {
  name: 'App',
  data(){
    return {
      hello: '',
      person: { name: '', email: '' },
      people: [
        {name: 'Johan', email : 'johan.kivi@zocom.se'},
        {name: 'David', email : 'david.lundholm@zocom.se'},
        {name: 'Christoffer', email : 'christoffer.wallenberg@zocom.se'}
      ]
    }
  },
  methods: {
    addPerson(){
      this.people.push({...this.person});
    },
    sayHi(payload){
      this.hello = payload.msg;
    }
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
