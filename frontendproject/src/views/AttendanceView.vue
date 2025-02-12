<template>
  <div class="container">
    <!-- Button container aligned to top left -->
    <div class="button-container">
      <button @click="showAddAttendantForm = !showAddAttendantForm">
        Add New Attendant
      </button>
      <button @click="showLeaveRequestForm = !showLeaveRequestForm">
        Request Leave
      </button>
      <button @click="showAttendanceList = !showAttendanceList">
        Show Attendance List
      </button>
      <button @click="showLeaveRequestList = !showLeaveRequestList">
        Leave Request List
      </button>
    </div>
    <!-- Add New Attendant Form (conditional rendering based on showAddAttendantForm) -->
    <div v-if="showAddAttendantForm" class="form-container">
      <h2>Add New Attendant</h2>
      <label>
        <span>Employee ID:</span>
        <input type="text" v-model="attendant.employee_id" />
      </label><br>
      <label>
        <span>Date:</span>
        <input type="text" v-model="attendant.date" />
      </label><br>
      <label>
        <span>Status:</span>
        <input type="text" v-model="attendant.status" />
      </label><br><br>
      <button @click="postAttendant()">Add New Attendant</button>
    </div>
    <!-- Leave Request Form (conditional rendering based on showLeaveRequestForm) -->
    <div v-if="showLeaveRequestForm" class="form-container">
      <h2>Request Leave</h2>
      <label>
        <span>Employee ID:</span>
        <input type="text" v-model="leaveRequest.employee_id" />
      </label><br>
      <label>
        <span>Date:</span>
        <input type="date" v-model="leaveRequest.date" />
      </label><br>
      <label>
        <span>Reason:</span>
        <textarea v-model="leaveRequest.reason" rows="2"></textarea>
      </label><br><br>
      <label>
        <span>Status:</span>
        <input type="text" v-model="leaveRequest.status" />
      </label><br>
      <button @click="postLeaveRequest()">Submit Leave Request</button>
    </div>
    <!-- Attendance List Table (conditional rendering based on showAttendanceList) -->
    <div v-if="showAttendanceList" class="attendance-list">
      <h2>Attendance List</h2>
      <table>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="attendant in $store.state.attendance" :key="attendant.employee_id">
            <td>{{ attendant.employee_id }}</td>
            <td>{{ attendant.date }}</td>
            <td>{{ attendant.status }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- Leave Request List Table (conditional rendering based on showLeaveRequestList) -->
    <div v-if="showLeaveRequestList" class="leave-request-list">
      <h2>Leave Request List</h2>
      <table>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Date</th>
            <th>Reason</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="leaveRequest in $store.state.leaveRequests" :key="leaveRequest.employee_id">
            <td>{{ leaveRequest.employee_id }}</td>
            <td>{{ leaveRequest.date }}</td>
            <td>{{ leaveRequest.reason }}</td>
            <td>{{ leaveRequest.status }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</template>
<script>
export default {
  data() {
    return {
      attendant: {
        employee_id: null,
        date: null,
        status: null
      },
      showAddAttendantForm: false,  // To control visibility of the Add Attendant form
      showLeaveRequestForm: false,  // To control visibility of the leave form
      showAttendanceList: false,    // To control visibility of the attendance list
      showLeaveRequestList: false,  // To control visibility of the leave request list

      leaveRequest: {
        employee_id: null,
        date: null,
        status: null
      }
    }
  },
  mounted() {
    this.$store.dispatch('getAttendance');
    this.$store.dispatch('getLeaveRequest');  // Dispatch action to get leave requests
  },
  methods: {
    postAttendant() {
      this.$store.dispatch('postAttendance', this.attendant);
    },

   postLeaveRequest(){
    console.log(this.
leaveRequest);
    this.$store.dispatch('postLeaveRequest', this.leaveRequest);
  }
  },
}
</script>
<!-- Scoped Styling -->
<style scoped>
/* General container styling */
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}
/* Button container */
.button-container {
  position: absolute;
  top: 70px;  /* Increased the top value */
  left: 10px;
  z-index: 1000;  /* Ensure the buttons stay on top */
  display: flex;
  flex-direction: column;
}
.button-container button {
  margin: 5px 0;
}
/* Form container styling */
.form-container {
  margin-bottom: 30px;
  background-color: #F9F9F9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
h2 {
  text-align: center;
  color: #333;
}
/* Form labels and inputs */
label {
  display: block;
  margin: 10px 0;
  font-size: 16px;
}
label span {
  font-weight: bold;
  margin-right: 10px;
}
input[type="text"],
input[type="date"],
textarea {
  padding: 8px;
  font-size: 14px;
  width: 100%;
  max-width: 300px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-top: 5px;
}
textarea {
  resize: vertical;
}
/* Button styling */
button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: block;
  margin: 20px auto;
  width: 100%;
  max-width: 200px;
}
button:hover {
  background-color: #45A049;
}
/* Table styling */
.attendance-list table,
.leave-request-list table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  background-color: #fff;
}
.attendance-list th, .attendance-list td,
.leave-request-list th, .leave-request-list td {
  padding: 12px;
  text-align: left;
  border: 1px solid #ddd;
}
.attendance-list th,
.leave-request-list th {
  background-color: #F2F2F2;
  font-weight: bold;
  text-transform: uppercase;
  color: #333;
}
.attendance-list tr:nth-child(even),
.leave-request-list tr:nth-child(even) {
  background-color: #F9F9F9;
}
.attendance-list tr:hover,
.leave-request-list tr:hover {
  background-color: #F1F1F1;
  cursor: pointer;
}
.attendance-list td,
.leave-request-list td {
  font-size: 14px;
  color: #555;
}
/* Responsive table adjustments */
@media (max-width: 600px) {
  .attendance-list table,
  .leave-request-list table,
  .attendance-list th,
  .leave-request-list th,
  .attendance-list td,
  .leave-request-list td {
    display: block;
    width: 100%;
  }
  .attendance-list th,
  .leave-request-list th {
    background-color: #F2F2F2;
    text-align: left;
    font-size: 16px;
  }
  .attendance-list td,
  .leave-request-list td {
    padding: 8px 5px;
    font-size: 14px;
  }
}
</style>