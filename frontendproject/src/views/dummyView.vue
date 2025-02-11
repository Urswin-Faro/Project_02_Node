<template>
    <div>
        {{ $store.state.employees }}
        {{ $store.state.attendance }}
        {{ $store.state.payroll }}
    </div>
</template>
<script>
export default {

    mounted() {
        this.$store.dispatch('getEmploy'),
        this.$store.dispatch('getAttendance');
        this.$store.dispatch('getPayroll');

    },

}
</script>
<style>
    
</style>