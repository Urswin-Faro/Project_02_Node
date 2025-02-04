<template>

    <div class="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 class="text-2xl font-bold mb-6 text-center text-gray-800">Add New Employee</h2>
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label for="firstName">First Name</label>
            <input
              v-model="formData.firstName"
              type="text"
              id="firstName"
              name="firstName"
              placeholder="John"
              required
              class="mt-1"
            />
          </div>
          <div>
            <label for="lastName">Last Name</label>
            <input
              v-model="formData.lastName"
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Doe"
              required
              class="mt-1"
            />
          </div>
        </div>
  
        <div>
          <label for="email">Email</label>
          <input
            v-model="formData.email"
            type="email"
            id="email"
            name="email"
            placeholder="john.doe@company.com"
            required
            class="mt-1"
          />
        </div>
  
        <div>
          <label for="phone">Phone Number</label>
          <input
            v-model="formData.phone"
            type="tel"
            id="phone"
            name="phone"
            placeholder="(123) 456-7890"
            class="mt-1"
          />
        </div>
  
        <div>
          <label for="department">Department</label>
          <select v-model="formData.department" class="mt-1">
            <option value="" disabled>Select Department</option>
            <option v-for="dept in departments" :key="dept" :value="dept">
              {{ dept }}
            </option>
          </select>
        </div>
  
        <div>
          <label for="position">Position</label>
          <input
            v-model="formData.position"
            type="text"
            id="position"
            name="position"
            placeholder="Software Engineer"
            class="mt-1"
          />
        </div>
  
        <div>
          <label for="hireDate">Hire Date</label>
          <input
            v-model="formData.hireDate"
            type="date"
            id="hireDate"
            name="hireDate"
            class="mt-1"
          />
        </div>
  
        <div class="flex justify-center">
          <button type="submit" class="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white">
            Add Employee
          </button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import { reactive } from "vue";
  
  export default {
    name: "EmployeeForm",
    setup() {
      const formData = reactive({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        department: "",
        position: "",
        hireDate: "",
      });
  
      const departments = [
        "Development",
        "HR",
        "Quality Assurance",
        "Sales",
        "Finance",
        "Customer Support",
      ];
  
      const handleSubmit = () => {
        console.log("Employee Data Submitted:", formData);
        // Reset the form after submission
        Object.keys(formData).forEach((key) => {
          formData[key] = "";
        });
      };
  
      return {
        formData,
        departments,
        handleSubmit,
      };
    },
  };
  </script>
  
  
  <style scoped>
  /* General Styling */
  body {
    font-family: 'Arial', sans-serif;
    background-color: #f9fafb; /* Light gray background */
    margin: 0;
    padding: 0;
  }
  
  /* Card Container */
  .max-w-md {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow */
    background-color: white; /* White card */
    border-radius: 12px; /* Rounded corners */
    overflow: hidden;
  }
  
  /* Form Styling */
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  /* Label Styling */
  label {
    font-size: 0.9rem;
    font-weight: 500;
    color: #4a4a4a;
    display: block;
  }
  
  /* Input Fields */
  input, select {
    width: 100%;
    padding: 0.75rem;
    font-size: 1rem;
    border: 1px solid #d1d5db; /* Neutral border color */
    border-radius: 8px;
    background-color: #f9fafb;
    transition: border-color 0.3s;
  }
  
  input:focus, select:focus {
    outline: none;
    border-color: #3b82f6; /* Blue highlight */
    background-color: white;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2); /* Glow effect */
  }
  
  /* Placeholder Styling */
  input::placeholder {
    color: #9ca3af;
    font-style: italic;
  }
  
  /* Button Styling */
  button {
    background-color: #2563eb; /* Blue background */
    color: white;
    padding: 0.75rem;
    font-size: 1rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
  }
  
  button:hover {
    background-color: #1d4ed8; /* Darker blue */
    transform: translateY(-2px); /* Slight hover lift */
  }
  
  button:active {
    background-color: #1e40af; /* Even darker blue */
    transform: translateY(0); /* Reset hover lift */
  }
  
  /* Flexbox for Grid */
  .grid {
    display: grid;
    gap: 1rem;
  }
  
  .grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  
  /* Responsive Styling */
  @media (max-width: 768px) {
    .grid-cols-2 {
      grid-template-columns: 1fr; /* Stack inputs on small screens */
    }
  }
  
  @media (max-width: 1024px) {
    .max-w-md {
      padding: 1rem; /* Reduce padding on medium screens */
    }
  
    .grid-cols-2 {
      grid-template-columns: 1fr; /* Stack inputs vertically */
    }
  
    h2 {
      font-size: 1.5rem; /* Adjust heading size */
    }
  }
  
  @media (max-width: 768px) {
    .max-w-md {
      margin: 1rem; /* Adjust margin for small screens */
      padding: 1rem; /* Compact padding */
    }
  
    h2 {
      font-size: 1.25rem; /* Further adjust heading size */
    }
  }
  
  @media (max-width: 480px) {
    .max-w-md {
      margin: 0.5rem; /* Tighter margin for extra-small screens */
      padding: 0.75rem;
    }
  
    h2 {
      font-size: 1rem; /* Smallest heading size */
      text-align: center;
    }
  
    button {
      font-size: 0.9rem; /* Adjust button size */
      padding: 0.5rem; /* Compact button */
    }
  
    label {
      font-size: 0.85rem; /* Smaller labels */
    }
  
    input, select {
      padding: 0.5rem; /* Compact input fields */
      font-size: 0.9rem; /* Smaller text size */
    }
  }
  
  </style>
  