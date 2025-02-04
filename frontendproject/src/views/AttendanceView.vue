<template>
  <nav>
    <h1 class="poes">Employee Leave & Request Form</h1>
    <form class="d-flex" role="search">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search for employees..."
        class="search-bar"
      />
    </form>
  </nav>
  <div id="app">
    <!-- Wrapper for the employee cards -->
    <div class="employee-container">
      <div
        v-for="employee in filteredEmployees"
        :key="employee.employeeId"
        :class="['employee-card', statusClass(employee)]"
      >
        <h2>{{ employee.name }}</h2>
        <button @click="toggleForm(employee.employeeId)">Request Leave</button>
        <div v-if="employee.showForm">
          <form @submit.prevent="showConfirmationModal(employee.employeeId)">
            <label for="date">Date:</label>
            <input type="date" v-model="leaveForm.date" required />
            <label for="reason">Reason:</label>
            <input
              type="text"
              v-model="leaveForm.reason"
              placeholder="Enter reason for leave"
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
        <h3>Attendance</h3>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="attendance in employee.attendance"
              :key="attendance.date"
            >
              <td>{{ attendance.date }}</td>
              <td>{{ attendance.status }}</td>
            </tr>
          </tbody>
        </table>
        <h3>Leave Requests</h3>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Reason</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="request in employee.leaveRequests" :key="request.date">
              <td>{{ request.date }}</td>
              <td>{{ request.reason }}</td>
              <td :class="request.status.toLowerCase()">
                {{ request.status }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- Custom Confirmation Modal -->
    <div v-if="showConfirmation" class="modal-overlay">
      <div class="modal-content">
        <p>Are you sure you want to submit this leave request?</p>
        <button @click="submitLeaveRequest(selectedEmployee.employeeId)">
          Yes
        </button>
        <button @click="closeConfirmation">No</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchQuery: "",
      employees: [
        {
          employeeId: 1,
          name: "Sibongile Nkosi",
          attendance: [
            { date: "2024-11-25", status: "Present" },
            { date: "2024-11-26", status: "Absent" },
            { date: "2024-11-27", status: "Present" },
            { date: "2024-11-28", status: "Present" },
            { date: "2024-11-29", status: "Present" },
          ],
          leaveRequests: [
            { date: "2024-11-22", reason: "Sick Leave", status: "Approved" },
            { date: "2024-12-01", reason: "Personal", status: "Pending" },
          ],
          showForm: false,
        },
        {
          employeeId: 2,
          name: "Lungile Moyo",
          attendance: [
            { date: "2024-11-25", status: "Present" },
            { date: "2024-11-26", status: "Present" },
            { date: "2024-11-27", status: "Absent" },
            { date: "2024-11-28", status: "Present" },
            { date: "2024-11-29", status: "Present" },
          ],
          leaveRequests: [
            {
              date: "2024-11-15",
              reason: "Family Responsibility",
              status: "Denied",
            },
            { date: "2024-12-02", reason: "Vacation", status: "Approved" },
          ],
          showForm: false,
        },
        {
          employeeId: 3,
          name: "Thabo Molefe",
          attendance: [
            { date: "2024-11-25", status: "Present" },
            { date: "2024-11-26", status: "Present" },
            { date: "2024-11-27", status: "Present" },
            { date: "2024-11-28", status: "Absent" },
            { date: "2024-11-29", status: "Present" },
          ],
          leaveRequests: [
            {
              date: "2024-11-10",
              reason: "Medical Appointment",
              status: "Approved",
            },
            { date: "2024-12-05", reason: "Personal", status: "Pending" },
          ],
          showForm: false,
        },
        {
          employeeId: 4,
          name: "Keshav Naidoo",
          attendance: [
            { date: "2024-11-25", status: "Absent" },
            { date: "2024-11-26", status: "Present" },
            { date: "2024-11-27", status: "Present" },
            { date: "2024-11-28", status: "Present" },
            { date: "2024-11-29", status: "Present" },
          ],
          leaveRequests: [
            { date: "2024-11-20", reason: "Bereavement", status: "Approved" },
          ],
          showForm: false,
        },
        {
          employeeId: 5,
          name: "Zanele Khumalo",
          attendance: [
            { date: "2024-11-25", status: "Present" },
            { date: "2024-11-26", status: "Present" },
            { date: "2024-11-27", status: "Absent" },
            { date: "2024-11-28", status: "Present" },
            { date: "2024-11-29", status: "Present" },
          ],
          leaveRequests: [
            { date: "2024-12-01", reason: "Childcare", status: "Pending" },
          ],
          showForm: false,
        },
        {
          employeeId: 6,
          name: "Sipho Zulu",
          attendance: [
            { date: "2024-11-25", status: "Present" },
            { date: "2024-11-26", status: "Present" },
            { date: "2024-11-27", status: "Absent" },
            { date: "2024-11-28", status: "Present" },
            { date: "2024-11-29", status: "Present" },
          ],
          leaveRequests: [
            { date: "2024-11-18", reason: "Sick Leave", status: "Approved" },
          ],
          showForm: false,
        },
        {
          employeeId: 7,
          name: "Naledi Moeketsi",
          attendance: [
            { date: "2024-11-25", status: "Present" },
            { date: "2024-11-26", status: "Present" },
            { date: "2024-11-27", status: "Present" },
            { date: "2024-11-28", status: "Absent" },
            { date: "2024-11-29", status: "Present" },
          ],
          leaveRequests: [
            { date: "2024-11-22", reason: "Vacation", status: "Pending" },
          ],
          showForm: false,
        },
        {
          employeeId: 8,
          name: "Farai Gumbo",
          attendance: [
            { date: "2024-11-25", status: "Present" },
            { date: "2024-11-26", status: "Absent" },
            { date: "2024-11-27", status: "Present" },
            { date: "2024-11-28", status: "Present" },
            { date: "2024-11-29", status: "Present" },
          ],
          leaveRequests: [
            {
              date: "2024-12-02",
              reason: "Medical Appointment",
              status: "Approved",
            },
          ],
          showForm: false,
        },
        {
          employeeId: 9,
          name: "Karabo Dlamini",
          attendance: [
            { date: "2024-11-25", status: "Present" },
            { date: "2024-11-26", status: "Present" },
            { date: "2024-11-27", status: "Present" },
            { date: "2024-11-28", status: "Absent" },
            { date: "2024-11-29", status: "Present" },
          ],
          leaveRequests: [
            { date: "2024-11-19", reason: "Childcare", status: "Denied" },
          ],
          showForm: false,
        },
        {
          employeeId: 10,
          name: "Fatima Patel",
          attendance: [
            { date: "2024-11-25", status: "Present" },
            { date: "2024-11-26", status: "Present" },
            { date: "2024-11-27", status: "Absent" },
            { date: "2024-11-28", status: "Present" },
            { date: "2024-11-29", status: "Present" },
          ],
          leaveRequests: [
            { date: "2024-12-03", reason: "Vacation", status: "Pending" },
          ],
          showForm: false,
        },
      ],
      leaveForm: {
        date: "",
        reason: "",
      },
      showConfirmation: false,
      selectedEmployee: null,
    };
  },
  computed: {
    filteredEmployees() {
      if (!this.searchQuery) {
        return this.employees; // Corrected reference from `this.employee` to `this.employees`
      }
      const query = this.searchQuery.toLowerCase();
      return this.employees.filter(
        (employee) => employee.name.toLowerCase().includes(query) // Filter by employee name only
      );
    },
  },
  methods: {
    toggleForm(employeeId) {
      this.employees.forEach((employees) => {
        if (employees.employeeId === employeeId) {
          employees.showForm = !employees.showForm;
        } else {
          employees.showForm = false;
        }
      });
    },
    statusClass(employee) {
      const lastAttendance =
        employee.attendance[employee.attendance.length - 1];
      if (lastAttendance.status === "Absent") {
        return "status-absent";
      } else if (lastAttendance.status === "Present") {
        return "status-present";
      }
      return ""; // Default class if no specific status applies
    },

    showConfirmationModal(employeeId) {
      const employee = this.employees.find(
        (emp) => emp.employeeId === employeeId
      );
      if (employee) {
        this.selectedEmployee = employee;
        this.showConfirmation = true;
      }
    },
    submitLeaveRequest(employeeId) {
      const employee = this.employees.find(
        (emp) => emp.employeeId === employeeId
      );
      if (employee) {
        // Add the leave request to the employee's leaveRequests array
        employee.leaveRequests.push({
          date: this.leaveForm.date,
          reason: this.leaveForm.reason,
          status: "Pending",
        });
        // Reset the form
        this.leaveForm.date = "";
        this.leaveForm.reason = "";
        // Close the form
        employee.showForm = false;
        // Close the confirmation modal
        this.showConfirmation = false;
      }
    },
    closeConfirmation() {
      this.showConfirmation = false;
      this.selectedEmployee = null;
    },
  },
};
</script>
<!-- Styling -->
<style scoped>
#app {
  font-family: Arial, sans-serif;
  padding: 20px;
  text-align: center;
}
.employee-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
.employee-card {
  border: 1px solid #ddd;
  padding: 8px;
  margin-bottom: 15px;
  border-radius: 8px;
  background-color: #f9f9f9;
  width: 370px;
  box-sizing: border-box;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.employee-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
.poes {
  color: white;
  font-size: 36px;
}
form {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}
label {
  margin-top: 10px;
  font-weight: bold;
}
input {
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
button {
  padding: 6px 12px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 10px;
}
button:hover {
  background-color: #218838;
}
button[type="submit"] {
  background-color: #007bff;
}
button[type="submit"]:hover {
  background-color: #0056b3;
}
button[type="button"] {
  padding: 6px 12px;
  border-radius: 20px;
}
table {
  width: 100%;
  margin-top: 10px;
  border-collapse: collapse;
}
table th,
table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}
table th {
  background-color: #f1f1f1;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}
.modal-content {
  background-color: #fff;
  padding: 20px 40px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  width: 300px;
  max-width: 80%;
}
.modal-content p {
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: bold;
  color: #000;
}
.modal-content button {
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
}
.modal-content button:hover {
  background-color: #218838;
}
.modal-content button[type="button"] {
  background-color: #ff4e4e;
}
.modal-content button[type="button"]:hover {
  background-color: #e43f3f;
}
/* Color Coordination for Leave Request Statuses */
.approved {
  color: #28a745; /* Green */
}
.pending {
  color: #ffca28; /* Yellow */
}
.denied {
  color: #ff4e4e; /* Red */
}
.custom-navbar {
  background-color: hsla(133, 88%, 56%, 0.2);
  border-radius: 8px;
  height: 100px;
}
.status-absent {
  border-color: #ff4e4e; /* Red border */
  background-color: #ffeeee; /* Light red background */
}
.status-present {
  border-color: #28a745; /* Green border */
  background-color: #e8f5e9; /* Light green background */
}
.approved {
  color: #28a745; /* Green text for Approved */
  font-weight: bold;
}
.pending {
  color: #ffca28; /* Yellow text for Pending */
  font-weight: bold;
}
.denied {
  color: #ff4e4e; /* Red text for Denied */
  font-weight: bold;
}
</style>
