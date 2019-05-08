<template>
  <div>
    <h1>User Details</h1>
    <p>ID User: {{ id }}</p>
    <hr>
    <router-link tag="button" class="btn btn-warning" :to="link">Edit User</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      link: {
        name: "userEdit",
        params: {
          id: this.$route.params.id
        },
        query: {
          location: "jp",
          browser: "chrome"
        },
        hash: "#react"
      }
    };
  },
  watch: {
    $route(to, from) {
      this.id = to.params.id;
    }
  },
  beforeRouteEnter(to, from, next) {
    if (true) {
      next();
    } else {
      next(false);
    }
  }
};
</script>

<style>
</style>
