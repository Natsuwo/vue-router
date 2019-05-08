<template>
    <div class="text-center">
        <h3>Errors</h3>
        <p>404 not found.</p>
        <button class="btn btn-primary" @click="backToHome">Go to home</button>
    </div>
</template>
<script>
export default {
    methods: {
        backToHome() {
            this.$router.push({ name: 'homePage' });
        }
    }
}
</script>
