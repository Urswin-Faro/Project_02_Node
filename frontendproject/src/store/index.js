import { createStore } from 'vuex'
/* eslint-disable */
export default createStore({
  state: {
    employees:null,
    attendance: null,
  },
  getters: {
  },
  // commit
  mutations: {
    setEmployees(state,payload){
      state.employees = payload
    },
    setAttendance(state, payload) {
      state.attendance = payload
    }
  },

  // dispatch
  actions: {
    async getEmployees({commit},payload){
      let {employees} = await (await fetch("http://localhost:3030/Employees")).json()
      // let info = await employees.json()

      console.log(employees)
      commit('setEmployees',employees)
    },
    async getAttendance({ commit }) {
      const { attendance } = await (await fetch('http://localhost:3030/attendance')).json()
      commit('setAttendance', attendance)
    },
    async postAttendance({ commit }, attendance) {
      console.log(attendance);
      await fetch('http://localhost:3030/attendance', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          employee_id: attendance.employee_id,
          date: attendance.date,
          status: attendance.status
        })
      })
      await this.dispatch('getAttendance');
    },
    async deleteEmployee({commit},employee_id){
    await fetch("http://localhost:3030/Employees/"+ employee_id,{method:"DELETE"})
    console.log(employee_id);
    },
    
async postEmployee({commit},employee){
  console.log(employee);
  await fetch("http://localhost:3030/Employees/",{
  method:"POST",
  headers:{ 
    "Content-type":"application/json"
  },
  body: JSON.stringify({
    employee_id:employee.employee_id,
    name: employee.name,
    department: employee.department,
    position: employee.position,
    salary: employee.salary,
    employment_history: employee.employment_history,
    email: employee.email
  }),
  })
},
async updateEmployee({commit},employee){
  console.log(employee);
  await fetch("http://localhost:3030/Employees/"+ employee.employee_id,{
  method:"PUT",
  headers:{ 
    "Content-type":"application/json"
  },
  body: JSON.stringify({
    employee_id:employee.employee_id,
    name: employee.name,
    position: employee.position,
    department: employee.department,
    salary: employee.salary,
    employment_history: employee.employment_history,
    email: employee.email
  })
  })
}
},
 modules: {
  },
})
