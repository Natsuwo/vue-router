<template>
  <div>
    <h1>Please select one user to manage:</h1>
    <ul class="list-group" v-for="(userId, index) in 5" :key="index">
      <router-link tag="li" class="list-group-item" style="cursor: pointer;" :to="{ name: 'userDetails', params: { id: userId } }">User {{ userId }}</router-link>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>

