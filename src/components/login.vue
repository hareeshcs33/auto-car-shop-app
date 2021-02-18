<template>
  <div>
    <h1 class="text-center">Login</h1>
    <div class="container">
      <div class="mx-5 px-5">
        <input-text
          type="email"
          label="Email"
          placeholder="abc@xyz.com"
          v-model="emailId"
          :disabled="false"
        ></input-text>
        <!-- outside input {{ emailId }} -->
        <input-text
          type="password"
          label="Password"
          placeholder="123456"
          v-model="password"
          :disabled="false"
        ></input-text>
        <date-picker v-model="date"></date-picker>
        outside date: {{ date.day }}/{{ date.month }}/{{ date.year }}
        <button class="btn btn-primary px-5 d-block" @click="login">
          Login
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import InputText from "../shared/input-text.vue";
import DatePicker from "../shared/date-picker.vue";

export default {
  data() {
    return {
      emailId: "",
      password: "",
      date: {
        day: null,
        month: null,
        year: null
      }
    };
  },
  methods: {
    login() {
      console.log(
        "email and password: ",
        this.emailId,
        this.password,
        this.date
      );
    }
  },
  components: {
    InputText,
    DatePicker
  }
};
</script>
