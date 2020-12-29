<template>
  <div class="navbar">
    <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
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
</style>