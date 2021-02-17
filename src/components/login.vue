<template>
  <div>
    <h1 class="text-center">Login</h1>
    <div class="container">
      <div class="mx-5 px-5">
        <input-text
          type="email"
          :placeholder="'enter input value'"
          :cssClass="'form-control'"
          :labelName="'Email address:'"
          :maxlength="50"
        ></input-text>
        <input-text
          type="password"
          :placeholder="'enter password'"
          :cssClass="'form-control'"
          :labelName="'Password:'"
        ></input-text>
        <button class="btn btn-primary px-5" @click="login">Login</button>
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
      pwd: ""
    };
  },
  methods: {
    login() {
      console.log(this.email, this.pwd);
    }
  },
  components: {
    InputText
  }
};
</script>
