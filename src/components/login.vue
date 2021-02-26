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
          v-model="email"
        ></input-text>
        <input-text
          type="password"
          :placeholder="'enter password'"
          :cssClass="'form-control'"
          :label="'Password:'"
          v-model="pwd"
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
      if (this.validatedData()) {
        this.usersData.push({
          email: this.email,
          pwd: this.pwd
        });
        this.$store.state.userLogin = true;
        this.$router.push("/home");
      }
    },
    validatedData() {
      if (this.email !== "" && this.pwd !== "") {
        return true;
      }
      return false;
    }
  },
  components: {
    InputText
  }
};
</script>
