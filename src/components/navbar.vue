<template>
  <div class="navbar">
    <ul class="nav">
      <router-link to="/home" tag="li" active-class="active"
        ><a>Home</a></router-link
      >
      <router-link to="/" tag="li" active-class="active" exact
        ><a>Login</a></router-link
      >
      <router-link to="/signUp" tag="li" active-class="active"
        ><a>SignUp</a></router-link
      >
      <li><router-link to="">UserName</router-link></li>
      <router-link to="/admin" tag="li" active-class="active"
        ><a>Admin</a></router-link
      >
    </ul>
  </div>
</template>
<style scoped>
.navbar {
  margin: 10px 0;
}
.navbar ul {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  list-style: none;
  border-bottom: 1px solid #a3a3a3;
  width: 100%;
  margin: 0;
  padding: 0;
}
.navbar ul li a {
  color: #454545;
  font-size: 16px;
  text-decoration: none;
  display: inline-block;
  padding: 8px 12px;
}
.navbar ul li.active a {
  color: blue;
  font-weight: bold;
}
</style>
