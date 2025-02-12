import { createStore } from 'vuex'
/* eslint-disable */
export default createStore({
  state: {
    employees: null,
    attendance: null,
    payroll: null,
  },
  getters: {
  },
  // commit
  mutations: {
    setEmployees(state, payload) {
      state.employees = payload
    },
    setAttendance(state, payload) {
      state.attendance = payload
    },
    setPayroll(state, payload) {
      state.payroll = payload;
    },
    setLeaveRequest(state, payload) {
      state.leaveRequests = payload;
    },
    setreview(state, payload) {
      state.review = payload
    }
  },

  // dispatch
  actions: {
    async postReview({ commit }, review) {
      console.log(review);
      
      await fetch('http://localhost:3030/review/review', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          employee_id: review.employee_id,
          work_quality: review.work_quality,
          attendance: review.attendance,
          comment: review.comment
        })
      })
      location.reload()
    },
    async getEmployees({ commit }, payload) {
      let { employees } = await (await fetch("http://localhost:3030/Employees")).json()
      console.log(employees)
      commit('setEmployees', employees)
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
      location.reload()
    },
    async deleteEmployee({ commit }, employee_id) {
      await fetch("http://localhost:3030/Employees/" + employee_id, { method: "DELETE" })
      console.log(employee_id);
    },
    async postEmployee({ commit }, employee) {
      console.log(employee);
      await fetch("http://localhost:3030/Employees/", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          employee_id: employee.employee_id,
          name: employee.name,
          department: employee.department,
          position: employee.position,
          salary: employee.salary,
          employment_history: employee.employment_history,
          email: employee.contact
        }),
      })
      location.reload()
    },
    async updateEmployee({ commit }, employee) {
      console.log(employee);
      await fetch("http://localhost:3030/Employees/" + employee.employee_id, {
        method: "PUT",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          employee_id: employee.employee_id,
          name: employee.name,
          position: employee.position,
          department: employee.department,
          salary: employee.salary,
          employment_history: employee.employment_history,
          email: employee.email
        }),
      })
      location.reload()
    },

    // payroll
    async getPayroll({ commit }, payload) {
      let { payroll } = await (await fetch('http://localhost:3030/payroll/payroll')).json()
      commit('setPayroll', payroll)
    },
    async deletePayroll({ commit }, payroll_id) {
      await fetch('http://localhost:3030/payroll/' + payroll_id, { method: "DELETE" })
      console.log(payroll_id)
      location.reload()
    },
    async postPayroll({ commit }, { newPayroll }) {
      console.log(newPayroll);
      await fetch('http://localhost:3030/payroll/', {
        method: "POST",
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify({
          payroll_id: newPayroll.payroll_id,
          employee_id: newPayroll.employee_id,
          hours_worked: newPayroll.hours_worked,
          leave_deductions: newPayroll.leave_deductions,
          final_salary: newPayroll.final_salary,
        })
      })
      location.reload()
    },

    // leaveRequest
    async getLeaveRequest({ commit }, payload) {
      let { leaveRequests } = await (await fetch("http://localhost:3030/leaveRequest")).json()
      commit('setLeaveRequest', leaveRequests)
    },
    async  postLeaveRequest({ commit }, leaveRequest ) {
      console.log(leaveRequest);
      await fetch('http://localhost:3030/leaveRequest/leaveRequest/', {
        method: "POST",
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify({
          employee_id: leaveRequest.employee_id,
          date: leaveRequest.date,
          reason: leaveRequest.reason,
          status: leaveRequest.status,
        })
      })
      location.reload()
    },
      async updateLeaveRequest({ commit }, leaveRequest) {
        console.log(leaveRequest);
        await fetch('http://localhost:3030/leaveRequest/leaveRequest/' + leaveRequest.leave_id, {
          method: "PUT",
          headers: { 'Content-Type': "application/json" },
          body: JSON.stringify({
           
            status: leaveRequest.status,
          })
        })
        location.reload()
      }
    },
  })
