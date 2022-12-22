<template>
  <div class="p-2">
    <div v-if="!users.length" class="d-flex flex-column align-items-center">
      <h2>No users added so far...</h2>
      <img src="../assets/maneki-neko.gif" />
    </div>
    <table v-else class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Country</th>
          <th scope="col">Address</th>
          <th scope="col">Subscribe</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="index">
          <img :src="user.img" :alt="user.name" />
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.country }}</td>
          <td>{{ user.address }}</td>
          <td v-if="user.subscribe">😊</td>
          <td v-else>😢</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TableComponent",
  props: {
    users: Array,
  },
};
</script>
