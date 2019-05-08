<template>
  <div>
    <h1>User Edit</h1>
    <p>User Info Client:</p>
    <ul>
      <li>Location: {{ $route.query.location }}</li>
      <li>Browser: {{ $route.query.browser }}</li>
    </ul>
    <hr>
    <button class="btn btn-danger" @click="show">Delete</button>
    <div style="height: 700px;"></div>
    <h3 id="react">Learn React</h3>
    <div style="height: 1700px;"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: false
    }
  },
  methods: {
    show() {
      this.status = true;
    }
  },
  beforeRouteLeave(to, from, next) {
    if(this.status) {
      next()
    } else {
      if(confirm('Are you sure? Any data will not saved!')) {
        next()
      } else {
        next(false)
      }
    }
  }
};
</script>

<style>
</style>

