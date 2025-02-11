<template>
  <button @click="showForm = !showForm" class="add-payroll-btn">
    {{ showForm ? 'Cancel' : 'Add Payroll' }}
  </button>
  <!-- Form to Add Employee -->
  <div v-if="showForm" class="form-container">
    <form @submit.prevent="postPayroll">
      <label for="payroll_id">Payroll ID</label>
      <input type="number" v-model="newPayroll.payroll_id" required />
      <label for="employee_id">Employee ID</label>
      <input type="number" v-model="newPayroll.employee_id" required />
      <label for="hours_worked">Hours Worked</label>
      <input type="number" v-model="newPayroll.hours_worked" required />
      <label for="leave_deductions">Leave Deductions </label>
      <input type="number" v-model="newPayroll.leave_deductions" required />
      <label for="final_salary">Final Salary</label>
      <input type="number" v-model="newPayroll.final_salary" required />
      <button type="submit">Add Employee</button>
    </form>
  </div>
  <!-- Table Container with Centered Table -->
  <div class="table-container">
    <table class="payroll-table">
      <thead>
        <tr>
          <th>Payroll ID</th>
          <th>Employee ID</th>
          <th>Hours Worked </th>
          <th>Leave Deductions</th>
          <th>Salary</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="payroll in $store.state.payroll" :key="payroll.payroll_id">
          <td>{{ payroll.payroll_id }}</td>
          <td>{{ payroll.employee_id }}</td>
          <td>{{ payroll.hours_worked }}</td>
          <td>{{ payroll.leave_deductions }}</td>
          <td>{{ payroll.final_salary }}</td>
          <td><button @click="deletePayroll(payroll.payroll_id)">Delete</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
 export default{
  data() {
    return {
      showForm: false, // Tracks the visibility of the form
      newPayroll: {
        payroll_id:'',
        employee_id: '',
        hours_worked: '',
        leave_deductions: '',
        final_salary: '',
      },
  }},
  mounted(){
    this.$store.dispatch('getPayroll');
    this.$store.dispatch('getLeaveRequest');
    },
  methods: {
deletePayroll(payroll_id){
   this.$store.dispatch('deletePayroll',payroll_id);
  },
  postPayroll(){
    this.$store.dispatch('postPayroll',this.$data );
  }
}
}
// department ,position,
</script>
<style scoped>
/* Center table */
.table-container {
  display: flex;
  justify-content: center; /* This centers the table horizontally */
  padding: 20px;
  flex-direction: column;
  align-items: center; /* This centers the content vertically (if needed) */
  width: 100%;
}
.payroll-table {
  justify-content: center;
  width: 100%;
  max-width: 900px;
  border-collapse: collapse;
  background-color: #F4F4F9;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-top: 20px;
}
.payroll-table th,
.payroll-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}
.payroll-table th {
  background-color: #007BFF;
  color: white;
  text-transform: uppercase;
}
.payroll-table tr:hover {
  background-color: rgba(0, 123, 255, 0.1);
  transition: background-color 0.3s ease-in-out;
}
.payroll-table tr:last-child td {
  border-bottom: none;
}
button {
  background-color: #FF0000;
  color: white;
  border: none;
  padding: 6px 12px;
  cursor: pointer;
  border-radius: 5px;
}
button:hover {
  background-color: #930000;
}
.add-payroll-btn {
  background-color: #28A745;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;
}
.add-payroll-btn:hover {
  background-color: #218838;
}
.form-container {
  background-color: #F9F9F9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  width: 100%;
  max-width: 500px;
}
form label {
  display: block;
  margin: 10px 0 5px;
}
form input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
form button {
  background-color: #007BFF;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
}
form button:hover {
  background-color: #0056B3;
}
</style>