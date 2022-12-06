<template>
  <div id="app">
    <NavbarComponent/>
    <h2>{{header}}</h2>
     <TableComponent  title="Woks" :products="woks" styled="table-dark"/>
     <TableComponent title="Rolls" :products="rolls" styled="table-secondary"/>
     <TableComponent title="Geishas" :products="geishas" styled="table-light"/>
  </div>
</template>

<script>
import NavbarComponent from './components/NavbarComponent.vue'
import TableComponent from './components/TableComponent.vue'
export default {
  name: 'App',
  components: {
    NavbarComponent,
    TableComponent
  },
  data(){
    return {
        header:"New Menu! 🍣",
       woks:[
        {id:'01', name:'Pad Thai', ingredients:'rice noodles, chicken, garlic, onion, pepper', price:50},
        {id:'02', name:'Yakisoba', ingredients:'whole grain noodles, pork, garlic, onion, pepper', price:55},
        {id:'03', name:'Yakimeshi', ingredients:'rice, salmon, garlic, onion, pepper, eggs', price:75},
        {id:'04', name:'Chop Suey', ingredients:'beaf, garlic, onion, three color peppers, carrots', price:60},
       ],
       rolls:[
        {id:'011', name:'Hot Rolls', ingredients:'salmon, cucumber, avocado, panko', price:50},
        {id:'022', name:'Konoha Roll', ingredients:'terikaki salmon, avocado, garlic crispy, cucumber', price:55},
        {id:'033', name:'Kasai Roll', ingredients:'green onion, salmon, philadelphia cheese, panko', price:75},
        {id:'044', name:'Umi Roll', ingredients:'beaf, tempura shrimp, mango, cucumber, panko', price:60},
       ],
       geishas:[
        {id:'012', name:'Pink Geisha', ingredients:'salmon, avocado, philadelphia cheese', price:50},
        {id:'023', name:'Smoke Geisha', ingredients:'smoked salmon, avocado, philadelphia cheese', price:55},
        {id:'034', name:'Red Geisha', ingredients:'red tuna, avocado, philadelphia cheese', price:75},
        {id:'045', name:'Wedding Geisha', ingredients:'white salmon, avocado, philadelphia cheese', price:60},
       ],
      
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
