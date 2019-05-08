<template>
  <div class="mt-3">
    <div class="text-center">
      <h1 class="text-center">Users Management</h1>
      <p class="text-center">This is area to manage user of page</p>
      <hr>
      <button class="btn btn-danger" @click="backHome">Back to home</button>
      <button class="btn btn-success" @click="goUserDetails">Go to User Profile</button>
      <hr>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  methods: {
    backHome() {
      this.$router.push({name: 'homePage'});
    },
    goUserDetails() {
      this.$router.push("/user/1");
    }
  }
};
</script>

<style>
</style>
