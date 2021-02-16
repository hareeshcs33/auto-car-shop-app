<template>
  <div>
    <h1 class="text-center">Login</h1>
    <div class="container">
      <div class="mx-5 px-5">
        <div class="form-group">
          <label for="email">Email address:</label>
          <input
            type="email"
            class="form-control"
            placeholder="Enter email"
            id="email"
          />
        </div>
        <div class="form-group">
          <label for="pwd">Password:</label>
          <input
            type="password"
            class="form-control"
            placeholder="Enter password"
            id="pwd"
          />
        </div>
        <button class="btn btn-primary px-5" @click="login">Login</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    login() {
      console.log("login");
    }
  }
};
</script>
