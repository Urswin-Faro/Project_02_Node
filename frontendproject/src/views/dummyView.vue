<template>
    <div>
        {{ $store.state.employees }}
        {{ $store.state.attendance }}
    </div>
</template>
<script>
export default {

    mounted() {
        this.$store.dispatch('getEmploy'),
        this.$store.dispatch('getAttendance');
    },

}
</script>
<style>
    
</style>