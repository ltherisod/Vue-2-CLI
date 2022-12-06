<template>
  <div class="p-2">
    <h4>{{title}}</h4>
    <table class="table table-bordered" :class="styled">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Ingredients</th>
        <th scope="col">Price</th>
      </tr>
    </thead>
    <tbody>
    <tr v-for="prod in this.products" :key="prod.id" >
    <th scope="row">{{prod.id}}</th>
    <td>{{prod.name}}</td>
    <td>{{prod.ingredients}}</td>
    <td>$ {{prod.price}}</td>
    </tr>
    </tbody>
  </table>
    </div>
</template>

<script>
export default{
    name:'TableComponent',
    props:{
        title:String,
        products:Array,
        styled:String
    }
}
</script>