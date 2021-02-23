<template>
  <div class="container jumbotron">
    <h1 class="text-center">LogIn</h1>
    <div class="container">
      <div class="mx-5 px-5">
        <input-text
          type="email"
          :placeholder="'enter input value'"
          :cssClass="'form-control'"
          :label="'Email address:'"
        ></input-text>
        <input-text
          type="password"
          :placeholder="'enter password'"
          :cssClass="'form-control'"
          :label="'Password:'"
        ></input-text>
        <button class="btn btn-primary px-5" @click="LogIn">LogIn</button>
      </div>
    </div>
  </div>
</template>
<script>
import InputText from "../shared/input-text.vue";
export default {
  data() {
    return {
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
    LogIn() {
      if (true) {
        this.usersData.push({
          username: this.username,
          email: this.email,
          pwd: this.pwd
        });
        console.log(this.usersData);
      }
    }
  },
  components: {
    InputText
  }
};
</script>
