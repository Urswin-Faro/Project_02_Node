<template>
  <nav>
    <!-- <img :src="logo" alt="logo"> -->
    <router-link to="/information">Employee Info</router-link> |
    <router-link to="/about">Employee Payroll</router-link>|
    <router-link to="/attendances">Attendance</router-link>|
    <router-link to="/home">Performance Review</router-link> |

    <button class="btn-logout"><a href="http://127.0.0.1:5500/public/login/index.html">Logout</a></button>
  </nav>
  <router-view/>
</template>

<script>

</script>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


nav {
  padding: 10px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
}
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #F4F4F4;
    color: #333;
  }
  header {
    background-color: #333;
    color: #fff;
    padding: 20px 0;
    text-align: center;
  }
  header h1 {
    margin: 0;
    font-size: 36px;
  }
  nav {
    background-color: #444;
    overflow: hidden;
    width: 100%;
  }
  nav a {
    color: white;
    padding: 14px 20px;
    text-decoration: none;
    display: inline-block;
  }
  nav a:hover {
    background-color: red;
    color: black;
  }
  section {
    padding: 40px;
    text-align: center;
  }
  .services {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  .service {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    flex: 1;
    max-width: 300px;
  }
  .contact {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  .contact-info {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    flex: 1;
    max-width: 300px;
  }
  footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 10px;
    position: absolute;
    width: 100%;
    bottom: 0;
  }
  .btn-logout{
    background-color: darkred;
    border-radius: 8px;
    
  }
  .btn-logout:hover{
    cursor: pointer;
    background-color: red;
  }
  
  </style>
  

