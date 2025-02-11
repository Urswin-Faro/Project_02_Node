<template>
  <div class="table-container">
    <!-- Button to show the Add Employee form -->
    <button @click="showForm = !showForm" class="add-employee-btn">
      {{ showForm ? 'Cancel' : 'Add Employee' }}
    </button>
    
    <!-- Form to Add Employee -->
    <div v-if="showForm" class="form-container">
      <form @submit.prevent="addEmployee">

        <label for="employee_id">Employee ID</label>
        <input type="text" v-model="newEmployee.employee_id" required />
        
        <label for="name">Name</label>
        <input type="text" v-model="newEmployee.name" required />
        
        <label for="department">Department</label>
        <input type="text" v-model="newEmployee.department" required />
        
        <label for="position">Position</label>
        <input type="text" v-model="newEmployee.position" required />

        <label for="salary">Salary</label>
        <input type="text" v-model="newEmployee.salary" required />

        <label for="employment_history">Employment History</label>
        <input type="text" v-model="newEmployee.employment_history" required />
        
        <label for="email">Email</label>
        <input type="email" v-model="newEmployee.contact" required />
        
        <button type="submit" @click="postEmployee()" class="submit-btn">Add Employee</button>
      </form>
    </div>
    
    <!-- Employee Table -->
    <table class="employee-table">
      <thead>
        <tr>
          <th>Employee</th>
          <th>Name</th>
          <th>Department</th>
          <th>Position</th>
          <th>Salary</th>
          <th>Employment History</th>
          <th>Email</th>
          <th>Action</th> <!-- Add header for the action column -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="employee in $store.state.employees" :key="employee.employee_id">
          <td>{{ employee.employee_id }}</td>
          <td>{{ employee.name }}</td>
          <td>{{ employee.department }}</td>
          <td>{{ employee.position }}</td>
          <td>{{ employee.salary }}</td>
          <td>{{ employee.employment_history }}</td>
          <td>{{ employee.contact }}</td>
          <td>
            <button @click="openEditForm(employee)" class="update-btn">Edit</button>
            <button @click="confirmDelete(employee.employee_id)" class="delete-btn">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modal for Edit Employee Form -->
    <div v-if="showEditForm" class="modal">
      <div class="modal-content">
        <button @click="closeEditForm" class="close-btn">X</button>
        <h2>Edit Employee</h2>
        <form @submit.prevent="updateEmployee">
          <label for="employee_id">Employee ID</label>
          <input type="text" v-model="editingEmployee.employee_id" required disabled />

          <label for="name">Name</label>
          <input type="text" v-model="editingEmployee.name" required />

          <label for="department">Department</label>
          <input type="text" v-model="editingEmployee.department" required />

          <label for="position">Position </label>
          <input type="text" v-model="editingEmployee.position" required />

          <label for="salary">Salary</label>
          <input type="text" v-model="editingEmployee.salary" required />

          <label for="employment_history">Employment History</label>
          <input type="text" v-model="editingEmployee.employment_history" required />

          <label for="email">Email</label>
          <input type="email" v-model="editingEmployee.contact" required />

          <button type="submit" class="submit-btn">Update Employee</button>
        </form>
      </div>
    </div>

    <!-- Confirmation Alert Modal -->
    <div v-if="showAlert" class="alert-modal">
      <div class="alert-modal-content">
        <p>Are you sure you want to delete this employee?</p>
        <button @click="deleteEmployee(confirmDeleteEmployeeId)" class="alert-confirm-btn">Yes</button>
        <button @click="closeAlert" class="alert-cancel-btn">Cancel</button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      showForm: false, // Tracks the visibility of the form
      newEmployee: {
        employee_id: null,
        name: null,
        department: null,
        position: null,
        salary: null,
        employment_history: null,
        contact: null
      },
      showEditForm: false, // Tracks the visibility of the edit modal
      editingEmployee: { // Employee being edited
        employee_id: null,
        name: null,
        department: null,
        position: null,
        salary: null,
        employment_history: null,
        contact: null
      },
      showAlert: false, // Tracks the visibility of the delete confirmation alert
      confirmDeleteEmployeeId: null, // Holds the employee_id for delete confirmation
    };
  },
  mounted() {
    this.$store.dispatch('getEmployees');
  },
  methods: {
    // Open the Edit form with the selected employee data
    openEditForm(employee) {
      this.editingEmployee = { ...employee };
      this.showEditForm = true;
    },
    // Close the Edit form modal
    closeEditForm() {
      this.showEditForm = false;
    },
    // Confirm Delete
    confirmDelete(employee_id) {
      this.confirmDeleteEmployeeId = employee_id;
      this.showAlert = true;
    },
    // Close the alert modal
    closeAlert() {
      this.showAlert = false;
      this.confirmDeleteEmployeeId = null;
    },
    // Delete the employee
    deleteEmployee(employee_id) {
      this.$store.dispatch('deleteEmployee', employee_id);
      this.closeAlert(); // Close the alert after deletion
    },
    // Add the new employee
    postEmployee() {
      this.$store.dispatch('postEmployee', this.newEmployee);
    },
    // Update the employee data
    updateEmployee() {
      this.$store.dispatch('updateEmployee', this.editingEmployee);
      this.closeEditForm();
    }
  }
};
</script>


<style scoped>
.table-container {
  display: flex;
  justify-content: center;
  padding: 20px;
  flex-direction: column;
  align-items: center;
}

.employee-table {
  width: 100%;
  max-width: 900px;
  border-collapse: collapse;
  background-color: #F4F4F9;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-top: 20px;
}

.employee-table th, .employee-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.employee-table th {
  background-color: #007BFF;
  color: white;
  text-transform: uppercase;
}

.employee-table tr:hover {
  background-color: rgba(0, 123, 255, 0.1);
  transition: background-color 0.3s ease-in-out;
}

.employee-table tr:last-child td {
  border-bottom: none;
}

button {
  color: white;
  border: none;
  padding: 6px 12px;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  opacity: 0.9;
}

/* Specific button styles */
.add-employee-btn {
  background-color: #28a745;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;
}

.add-employee-btn:hover {
  background-color: #218838;
}

/* Button for editing (update) employee - Green */
.update-btn {
  background-color: #28a745;
  color: white;
  padding: 6px 12px;
  cursor: pointer;
  border-radius: 5px;
  margin-right: 10px;
}

.update-btn:hover {
  background-color: #218838;
}

/* Button for deleting employee - Red */
.delete-btn {
  background-color: #ff0000;
  color: white;
  padding: 6px 12px;
  cursor: pointer;
  border-radius: 5px;
}

.delete-btn:hover {
  background-color: #930000;
}

.form-container {
  background-color: #f9f9f9;
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

form button.submit-btn {
  background-color: #007BFF;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
}

form button.submit-btn:hover {
  background-color: #0056b3;
}

/* Modal for Edit Form */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
}

.close-btn {
  background-color: #ff0000;
  color: white;
  border: none;
  padding: 5px;
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
}

.close-btn:hover {
  background-color: #930000;
}
.alert-modal {
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

.alert-modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  text-align: center;
}

.alert-confirm-btn,
.alert-cancel-btn {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;
}

.alert-confirm-btn {
  background-color: #28a745;
  color: white;
}

.alert-confirm-btn:hover {
  background-color: #218838;
}

.alert-cancel-btn {
  background-color: #ff0000;
  color: white;
}

.alert-cancel-btn:hover {
  background-color: #930000;
}
</style>
