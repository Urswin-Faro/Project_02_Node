<template>
    <div>
        {{ $store.state.employees }}
    </div>
</template>
<script>
export default {
    mounted() {
        this.$store.dispatch('getEmploy')
    },
}
</script>
<style>
    
</style>