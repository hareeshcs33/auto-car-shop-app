<template>
  <div>
    <h1 class="text-center">SignUp</h1>
    <div class="container">
      <div class="mx-5 px-5">
        <div class="form-group">
          <label for="username">UserName</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter username"
            id="username"
            v-model="username"
          />
          <span v-if="this.username == ''">{{ this.errMessage[0] }}</span>
        </div>
        <div class="form-group">
          <label for="email">Email address:</label>
          <input
            type="email"
            class="form-control"
            placeholder="Enter email"
            id="email"
            v-model="email"
          />
          <span v-if="this.email == ''">{{ this.errMessage[1] }}</span>
        </div>
        <div class="form-group">
          <label for="pwd">Password:</label>
          <input
            type="password"
            class="form-control"
            placeholder="Enter password"
            id="pwd"
            v-model="pwd"
          />
          <span v-if="this.pwd == ''">{{ this.errMessage[2] }}</span>
        </div>
        <button class="btn btn-primary px-5" @click="signUp">SignUp</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      email: "",
      pwd: "",
      usersData: [],
      errMessage: [
        "username Empty",
        "email field Empty",
        "password field Empty"
      ]
    };
  },
  methods: {
    signUp() {
      console.log(this.validateErrors);
      if (this.validateErrors) {
        this.usersData.push({
          username: this.username,
          email: this.email,
          pwd: this.pwd
        });
        console.log(this.usersData);
      }
    }
  },
  computed: {
    validateErrors() {
      if (this.username == "" || this.email == "" || this.pwd == "") {
        return this.errMessage;
      } else {
        this.errMessage = "";
      }
    }
  }
};
</script>
