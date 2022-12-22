<template>
  <div class="home">
    <TableComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import TableComponent from "../components/TableComponent";
export default {
  name: "HomeView",
  components: {
    TableComponent,
  },
};
</script>
