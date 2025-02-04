<template>
  <nav>
    <!-- my nav with a search bar -->
    <h1 class="poes">Employee Information</h1>
    <!-- Search Bar -->
        <form class="d-flex" role="search">
          <input
        type="text"
        v-model="searchQuery"
        placeholder="Search for employees..."
        class="search-bar"
      />
        </form>
      </nav>

  <img src="img1.jpg" alt="" srcset="">
    <div class="employee-cards">
      <h1>Employee Information</h1>
      <!-- Add Employee Button -->
      <button class="btn add-employee-btn" @click="showForm = true">Add Employee</button>
      <!-- Employee List -->
      <div class="cards-container">
        <div
          v-for="employee in filteredEmployees"
          :key="employee.employeeId"
          class="employee-card"
        >
        <!-- Used pevious exercises to help my with calling veriables -->
          <button class="btn-close" @click="deleteEmployee(employee.employeeId)">Delete</button>
          <h2>{{ employee.name }}</h2>
          <p><strong>Position:</strong> {{ employee.position }}</p>
          <p><strong>Department:</strong> {{ employee.department }}</p>
          <p><strong>Salary:</strong> R{{ employee.salary.toLocaleString() }}</p>
          <p><strong>Employment History:</strong> {{ employee.employmentHistory }}</p>
          <p><strong>Email:</strong> <a :href="`mailto:${employee.contact}`">{{ employee.contact }}</a></p>
          <button class="btn edit-employee-btn" @click="editEmployee(employee)">Edit</button>
        </div>
      </div>
      <!-- Used same format as the exercise we did on the task manager -->
      <!-- Add/Edit Employee Form -->
      <div v-if="showForm" class="popup-overlay">
    <div class="popup-form">
      <h1>{{ isEditing ? 'Edit Employee' : 'Add New Employee' }}</h1>
      <form @submit.prevent="submitForm">
        <input type="text" v-model="newEmployee.name" placeholder="Full Name" required />
        <input type="text" v-model="newEmployee.position" placeholder="Position" required />
        <input type="text" v-model="newEmployee.department" placeholder="Department" required />
        <input type="number" v-model="newEmployee.salary" placeholder="Salary" required />
        <input type="text" v-model="newEmployee.employmentHistory" placeholder="Employment History" required />
        <input type="email" v-model="newEmployee.contact" placeholder="Email" required />
        <button class='submit-btn' type="submit">{{ isEditing ? 'Save Changes' : 'Submit' }}</button>
        <button type="button" class="btn-close" @click="showForm = false">Close</button>
      </form>
    </div>
  </div>
    </div>
    <!-- Custom alert popup -->
<div v-if="showAlert" class="custom-alert">
  <div class="alert-message">
    <p>{{ alertMessage }}</p>
  </div>
</div>

  </template>
  <script>
  export default {
    name: 'EmployeeInfo',
    data() {
  return {
    showForm: false,
    isEditing: false,
    editingEmployeeId: null,
    searchQuery: '',
    employeeInformation: [
          {
            employeeId: 1,
            name: "Sibongile Nkosi",
            position: "Software Engineer",
            department: "Development",
            salary: 70000,
            employmentHistory: "Joined in 2015, promoted to Senior in 2018",
            contact: "sibongile.nkosi@moderntech.com"
          },
          {
            employeeId: 2,
            name: "Lungile Moyo",
            position: "HR Manager",
            department: "HR",
            salary: 80000,
            employmentHistory: "Joined in 2013, promoted to Manager in 2017",
            contact: "lungile.moyo@moderntech.com"
          },
          {
            employeeId: 3,
            name: "Thabo Molefe",
            position: "Quality Analyst",
            department: "QA",
            salary: 55000,
            employmentHistory: "Joined in 2018",
            contact: "thabo.molefe@moderntech.com"
          },
          {
            employeeId: 4,
            name: "Keshav Naidoo",
            position: "Sales Representative",
            department: "Sales",
            salary: 60000,
            employmentHistory: "Joined in 2020",
            contact: "keshav.naidoo@moderntech.com"
          },
          {
            employeeId: 5,
            name: "Zanele Khumalo",
            position: "Marketing Specialist",
            department: "Marketing",
            salary: 58000,
            employmentHistory: "Joined in 2019",
            contact: "zanele.khumalo@moderntech.com"
          },
          {
            employeeId: 6,
            name: "Sipho Zulu",
            position: "UI/UX Designer",
            department: "Design",
            salary: 65000,
            employmentHistory: "Joined in 2016",
            contact: "sipho.zulu@moderntech.com"
          },
          {
            employeeId: 7,
            name: "Naledi Moeketsi",
            position: "DevOps Engineer",
            department: "IT",
            salary: 72000,
            employmentHistory: "Joined in 2017",
            contact: "naledi.moeketsi@moderntech.com"
          },
          {
            employeeId: 8,
            name: "Farai Gumbo",
            position: "Content Strategist",
            department: "Marketing",
            salary: 56000,
            employmentHistory: "Joined in 2021",
            contact: "farai.gumbo@moderntech.com"
          },
          {
            employeeId: 9,
            name: "Karabo Dlamini",
            position: "Accountant",
            department: "Finance",
            salary: 62000,
            employmentHistory: "Joined in 2018",
            contact: "karabo.dlamini@moderntech.com"
          },
          {
            employeeId: 10,
            name: "Fatima Patel",
            position: "Customer Support Lead",
            department: "Support",
            salary: 58000,
            employmentHistory: "Joined in 2016",
            contact: "fatima.patel@moderntech.com"
          }
        ],
        newEmployee: {
      name: '',
      position: '',
      department: '',
      salary: null,
      employmentHistory: '',
      contact: '',
    },
    showAlert: false, // New property to show alert
    alertMessage: '', // To store alert message
  };
},
    computed: {
      filteredEmployees() {
        if (!this.searchQuery) {
          return this.employeeInformation;
        }
        const query = this.searchQuery.toLowerCase();
        return this.employeeInformation.filter(employee => {
          return Object.values(employee).some(value =>
            String(value).toLowerCase().includes(query)
          );
        });
      }
    },
    methods: {
      submitForm() {
  if (this.isEditing) {
    // Editing an existing employee
    const index = this.employeeInformation.findIndex(emp => emp.employeeId === this.editingEmployeeId);
    if (index !== -1) {
      this.employeeInformation[index] = { employeeId: this.editingEmployeeId, ...this.newEmployee };
      this.alertMessage = 'Employee information has been updated successfully!';
    }
  } else {
    // Adding a new employee
    const newId = this.employeeInformation.length + 1;
    this.employeeInformation.push({
      employeeId: newId,
      ...this.newEmployee,
    });
    this.alertMessage = 'Employee was added successfully!';
  }

  // Show the alert
  this.showAlert = true;

  // Reset form fields and close the form
  this.resetForm();
  this.showForm = false;

  // Hide the alert after 3 seconds
  setTimeout(() => {
    this.showAlert = false;
  }, 3000);
},
      // Method to reset form fields
      resetForm() {
        this.newEmployee = {
          name: '',
          position: '',
          department: '',
          salary: null,
          employmentHistory: '',
          contact: '',
        };
        this.isEditing = false;
        this.editingEmployeeId = null;
      },
      deleteEmployee(employeeId) {
        this.employeeInformation = this.employeeInformation.filter(emp => emp.employeeId !== employeeId);
      },
      editEmployee(employee) {
        this.newEmployee = { ...employee };
        this.editingEmployeeId = employee.employeeId;
        this.isEditing = true;
        this.showForm = true;
      }
    },
  };
  // start to my styling
  </script>
  <style scoped>
  .employee-cards {
    text-align: center;
  }
  .image {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
  .poes{
    color: white ;
    font-size: 36px;
  }
  /* employee cards styling */
  .employee-cards {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  /* search bar styling */
  .search-bar {
    width: 100%;
    max-width: 100%px;
    padding: 10px;
    font-size: 16px;
  }
  .add-employee-btn {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  /* button styling */
  .edit-employee-btn {
    padding: 10px 20px;
    font-size: 14px;
    background-color: #FFA500;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .edit-employee-btn:hover {
    background-color: #CC8400;
  }
  .popup-overlay {
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
  /* my pop up form */
  .popup-form {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    width: 400px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  button {
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  button:hover {
    background-color: #45A049;
  }
  .btn-close {
    background-color: #E74C3C;
  }
  .employee-cards {
    text-align: center;
  }
  /* image styling */
  .image {
      width: 100%;
      display: block;
      margin-bottom: 20px;
    }
    .employee-cards {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px; /* Spacing between each element */
    }
    .search-bar {
      width: 100%;
      max-width: 100%;
      padding: 10px;
      font-size: 16px;
    }
    .add-employee-btn {
      padding: 10px 20px;
      font-size: 16px;
      background-color: #007BFF;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    .add-employee-btn:hover {
      background-color: #0056B3;
    }
    /* search bar styling */
  .search-bar {
    padding: 10px;
    font-size: 1rem;
    width: 100%;
    max-width: 100%;
    margin-bottom: 0px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
  .employee-card {
    background-color: #F4F4F9;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 300px;
    padding: 20px;
    text-align: left;
    transition: transform 0.2s;
  }
  /* hover styling */
  .employee-card:hover {
    transform: scale(1.05);
  }
  .btn {
    border-radius: 8px;
    border: none;
    color: white;
    padding: 8px 16px;
    font-size: 16px;
    cursor: pointer;
    background-color: #4CAF50;
  }
  .add-employee-btn {
    margin-bottom: 20px;
  }
  .popup-overlay {
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
  .custom-alert {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #e80a0a;
  color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  z-index: 1000;
}

.alert-message {
  text-align: center;
  font-size: 18px;
}

  .popup-form {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    width: 400px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  input {
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  button {
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  button:hover {
    background-color: #BE0000;
  }
  .btn-close {
    background-color: #C95649;
  }
  .submit-btn:hover{
    background-color: #28DB2B;
  }
  .custom-navbar {
    background-color:  hsla(133, 88%, 56%, 0.2);
    border-radius: 8px;
    height: 100px;
  }
  </style>