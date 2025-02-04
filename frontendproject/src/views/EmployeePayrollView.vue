
<template>
  <nav>
    <!-- NavBar -->
    <h1 class="poes"> Employee Payroll System </h1>
        <form class="d-flex" role="search">
          <input
        type="text"
        v-model="searchQuery"
        placeholder="Search for employees..."
        class="search-bar"/>
        </form>
      </nav>
      <!-- Card with Button -->
  <div class="grid-item" v-for="employee in filteredEmployees" :key="employee.employeeId">
  <div class="card">
    <div class="card-body">
      <h3 class="card-title"> {{ employee.name }}</h3>
      <p class="card-text">Employee department: {{ employee.department }}</p>
      <button class="btn btn-primary" @click="showPayslip(employee)">Print Payslip</button>
    </div>
  </div>
</div>
    <!-- Modal -->
    <div class="modal" tabindex="-1" v-show="selectedEmployee">
      <div class="modal-dialog">
        <div class="modal-header">
          <h1 class="modal-title"><strong>Payslip: {{ selectedEmployee.name }}</strong></h1>
          <div>
         <p>Date: 20 December 2024</p>
         </div>
        </div>
        <div class="modal-content">
          <div class="card-2" style="width: 24rem;">
  <!-- Card Body with Title on Modal -->
  <div class="card-body">
    <h5 class="card-title">{{ selectedEmployee.name }}</h5>
  </div>
  <!-- List Group for Detailed Information  on Card -->
  <ul class="list-group list-group-flush">
    <li class="list-group-item"><strong>Department:</strong> {{ selectedEmployee.department }}</li>
    <li class="list-group-item"><strong>Position:</strong> {{ selectedEmployee.position }}</li>
    <li class="list-group-item"><strong>Employee ID:</strong> {{ selectedEmployee.employeeId }}</li>
    <li class="list-group-item"><strong>Hours Worked:</strong> {{ selectedEmployee.hoursWorked }}</li>
    <li class="list-group-item"><strong>Leave Deductions:</strong> {{ selectedEmployee.leaveDeductions }}</li>
    <li class="list-group-item"><strong>Employment History:</strong> {{ selectedEmployee.employmentHistory }}</li>
    <li class="list-group-item"><strong>Email:</strong> {{ selectedEmployee.contact }}</li>
    <li class="list-group-item"><strong>Salary:</strong> R {{ selectedEmployee.finalSalary }}</li>
  <li class="list-group-item"><strong>Hourly Rate:</strong>
  R {{ Math.round((selectedEmployee.finalSalary ) /selectedEmployee.hoursWorked)  }}</li>
<li class="list-group-item">
<strong>  Annual Salary:
</strong>  R {{ (selectedEmployee.finalSalary * 12)  }}
</li >
  </ul>
  </div>
  <button type="button" class="btn btn-secondary" @click="selectedEmployee = false">
              Close
            </button>
</div>
        </div>
      </div>
    <!-- Add New Employee Form -->
<div v-if="showForm" class="popup-overlay">
      <div class="popup-form">
        <h1>New Employee Payroll</h1>
        <form @submit.prevent="submitForm">
          <input type="text" v-model="newEmployee.name" placeholder="Full Name" required />
          <input type="text" v-model="newEmployee.position" placeholder="Position" required />
          <input type="text" v-model="newEmployee.department" placeholder="Department" required />
          <input type="number" v-model="newEmployee.salary" placeholder="Salary" required />
          <input type="text" v-model="newEmployee.employmentHistory" placeholder="Employment History" required />
          <input type="email" v-model="newEmployee.contact" placeholder="Email" required />
          <button type="submit">Submit</button>
          <button type="button" class="btn-close" @click="showForm = false"></button>
        </form>
      </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      searchQuery: '',
      selectedEmployee: false , // Holds the data for the employee whose payslip is shown
      payrollData: [
        {
          employeeId: 1,
          hoursWorked: 160,
          leaveDeductions: 8,
          finalSalary: 69500,
          name: "Sibongile Nkosi",
          position: "Software Engineer",
          department: "Development",
          employmentHistory: "Joined in 2015, promoted to Senior in 2018",
          contact: "sibongile.nkosi@moderntech.com"
        },
        {
          employeeId: 2,
          hoursWorked: 150,
          leaveDeductions: 10,
          finalSalary: 79000,
          name: "Lungile Moyo",
          position: "HR Manager",
          department: "HR",
          salary: 80000,
          employmentHistory: "Joined in 2013, promoted to Manager in 2017",
          contact: "lungile.moyo@moderntech.com"
        },
        {
          employeeId: 3,
          hoursWorked: 170,
          leaveDeductions: 4,
          finalSalary: 54800,
          name: "Thabo Molefe",
          position: "Quality Analyst",
          department: "QA",
          salary: 55000,
          employmentHistory: "Joined in 2018",
          contact: "thabo.molefe@moderntech.com"
        },
        {
          employeeId: 4,
          hoursWorked: 165,
          leaveDeductions: 6,
          finalSalary: 59700,
          name: "Keshav Naidoo",
          position: "Sales Representative",
          department: "Sales",
          salary: 60000,
          employmentHistory: "Joined in 2020",
          contact: "keshav.naidoo@moderntech.com"
    
        },
        {
          employeeId: 5,
          hoursWorked: 158,
          leaveDeductions: 5,
          finalSalary: 57850,
          name: "Zanele Khumalo",
          position: "Marketing Specialist",
          department: "Marketing",
          salary: 58000,
          employmentHistory: "Joined in 2019",
          contact: "zanele.khumalo@moderntech.com"
    
        },
        {
          employeeId: 6,
          hoursWorked: 168,
          leaveDeductions: 2,
          finalSalary: 64800,
          name: "Sipho Zulu",
          position: "UI/UX Designer",
          department: "Design",
          salary: 65000,
          employmentHistory: "Joined in 2016",
          contact: "sipho.zulu@moderntech.com"
  
        },
        {
          employeeId: 7,
          hoursWorked: 175,
          leaveDeductions: 3,
          finalSalary: 71800,
          name: "Naledi Moeketsi",
          position: "DevOps Engineer",
          department: "IT",
          salary: 72000,
          employmentHistory: "Joined in 2017",
          contact: "naledi.moeketsi@moderntech.com"
        },
        {
          employeeId: 8,
          hoursWorked: 160,
          leaveDeductions: 0,
          finalSalary: 56000,
          name: "Farai Gumbo",
          position: "Content Strategist",
          department: "Marketing",
          salary: 56000,
          employmentHistory: "Joined in 2021",
          contact: "farai.gumbo@moderntech.com"
        },
        {
          employeeId: 9,
          hoursWorked: 155,
          leaveDeductions: 5,
          finalSalary: 61500,
          name: "Karabo Dlamini",
          position: "Accountant",
          department: "Finance",
          salary: 62000,
          employmentHistory: "Joined in 2018",
          contact: "karabo.dlamini@moderntech.com"
    },
        
        {
          employeeId: 10,
          hoursWorked: 162,
          leaveDeductions: 4,
          finalSalary: 57750,
          name: "Fatima Patel",
          position: "Customer Support Lead",
          department: "Support",
          salary: 58000,
          employmentHistory: "Joined in 2016",
          contact: "fatima.patel@moderntech.com"
        },
      ],
      newEmployee: {
        name: '',
        position: '',
        department: '',
        salary: null,
        employmentHistory: '',
        contact: '',
      },
    };
  },
  methods: {
    showPayslip(employee) {
      this.selectedEmployee = employee; // Set the selected employee for the modal
      alert('Payslip printing...');
    },
    submitForm() {
      const newId = this.employeeInformation.length + 1;
      this.employeeInformation.push({
        employeeId: newId,
        ...this.newEmployee,
      });
      this.newEmployee = {
        name: '',
        position: '',
        department: '',
        salary: null,
        employmentHistory: '',
        contact: '',
      };
      this.showForm = false;},},
  computed: {
  filteredEmployees() {
    if (!this.searchQuery) {
      return this.payrollData; // Return the full list if no search query
    }
    const query = this.searchQuery.toLowerCase();
    return this.payrollData.filter(employee => {
      // Check if any of the relevant fields match the search query
      return (
        employee.name.toLowerCase().includes(query) ||
        employee.position.toLowerCase().includes(query) ||
        employee.department.toLowerCase().includes(query) ||
        String(employee.employeeId).toLowerCase().includes(query)
      );});}}
};
</script>
<style scoped>
.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}
/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}
.card-title{
  color: black;
}
.card {
  border: 3px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Added shadow for better appearance */
}
.card-body {
  text-align: center;
  padding: 15px; /* Adjust padding for consistent spacing */
}
.poes{
color:white;
font-size: 36px;}
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Responsive columns */
  gap: 15px; /* Spacing between grid items */
  margin: 20px; /* Adds padding around the grid */
}
.grid-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.modal-body .table {
  width: 100%; /* Ensure the table spans the modal width */
  margin: 0; /* Remove default margin */
  border-collapse: collapse; /* Remove extra space between table borders */
  font-size: 1rem; /* Adjust font size for readability */
  text-align: left; /* Align text to the left */
}
.modal-body .table th {
  background-color: #f8f9fa; /* Light gray background for table headers */
  font-weight: bold; /* Make header text bold */
  padding: 10px; /* Add spacing inside header cells */
  text-align: center; /* Center align the header text */
  border: 1px solid #ddd; /* Add borders for header cells */
}
.modal-body .table td {
  padding: 8px 10px; /* Add padding to table data cells */
  border: 1px solid #ddd; /* Add borders for data cells */
  vertical-align: middle; /* Align text vertically in the middle */
}
caption {
    caption-side: top;
    text-align: left;
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
}
.modal-title {  
text-align:left;
}
.grid-container {
    display: grid;
    gap: 16px; /* Space between grid items */
    padding: 16px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Adjusts for responsive layout */
    align-items: start;
}
.grid-item {
    padding: 12px;
}
.card {
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color:#f8f9fa;
    overflow: hidden;
    transition: transform 0.5s ease;
}
.card-body {
    padding: 16px;
    color: gray
}
.card-title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 8px;
}
.card:hover{
  transform: translateY(-20px);
}
.card-text {
    font-size: 14px;
    margin-bottom: 12px;
    color: #000;
}
.btn {
    font-size: 14px;
    padding: 8px 12px;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
.btn:hover {
    background-color: #1f3620;
}
/* Modal Background */
.modal {
  position: fixed; /* Ensures the modal stays in a fixed position relative to the viewport */
  top: 50%; /* Aligns the modal vertically */
  left: 50%; /* Aligns the modal horizontally */
  transform: translate(-50%, -50%); /* Centers the modal */
  z-index: 1050; /* Ensures it appears above other content */
  display: flex; /* Flexbox to center the content */
  align-items: center;
  justify-content: center;
  width: 100%; /* Makes sure modal stays responsive */
  height: 100%; /* Covers the full screen */
  background-color: rgba(0, 0, 0, 0.5); /* Adds a dim background overlay */
}
.modal-dialog {
  max-width: 800px; /* Adjust modal width */
  width: 100%; /* Ensure the dialog scales properly */
  background: white; /* Modal content background */
  border-radius: 8px; /* Rounded corners */
  overflow: hidden; /* Hides overflow for neat appearance */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */
}
.modal-header {
  padding: 15px;
  background-color: black; /* Header background */
  color: white; /* Header text color */
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.modal-content {
  padding: 0px;
  border-radius: 8px;
}
.modal-footer {
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  background-color: #f8f9fa;
}
/* Modal Card Styling */
.card-2 {
  margin-left: 25%;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color:#f8f9fa;
    overflow: hidden;
    transition: transform 0.5s ease;
}
.card-body {
  padding: 20px;
}
.card-title {
  font-size: 1.5rem;
  color: #333;
}
.card-text {
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
}
.list-group-item {
  border: none;
  font-size: 1rem;
  padding: 10px 15px;
  background-color: #f9f9f9;
  border-bottom: 1px solid #ddd;
}
.list-group-item:last-child {
  border-bottom: none;
}
.list-group-item strong {
  color: black;
}
/* Modal Footer */
.modal-footer {
  padding: 10px 20px;
  display: flex;
  justify-content: flex-end;
  background-color: #f8f9fa;
}
.modal-footer .btn-secondary {
  background-color: #4CAF50;
  border-color: #4CAF50;
  color: white;
  padding: 6px 12px;
  font-size: 1rem;
  border-radius: 4px;
}
.me{
  color:black;
}
.employee-cards {
  text-align: center;
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
  width:100%;
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
  background-color: #45A049;
}
.btn-close {
  background-color: #E74C3C;
}
</style>
