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
        outside input {{ emailId }}
        <input-text
          type="password"
          label="Password"
          placeholder="123456"
          v-model="password"
          :disabled="false"
        ></input-text>
        <div>
          <drop-down
            label="dropdown"
            v-model="selectOption"
            :options="options"
            @input="getValue"
          ></drop-down>
          outside selected value: {{ selectOption }}
        </div>
        <div>
          <date-picker v-model="date"></date-picker>
          outside date: {{ date.day }}/{{ date.month }}/{{ date.year }}
        </div>
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
import DropDown from "../shared/drop-down.vue";

export default {
  data() {
    return {
      emailId: "",
      password: "",
      date: {
        day: null,
        month: null,
        year: null
      },
      options: [
        { text: "aaa", value: "aaa" },
        { text: "bbb", value: "bbb" },
        { text: "ccc", value: "ccc" }
      ],
      selectOption: ""
    };
  },
  methods: {
    getValue(val) {
      console.log("getValue", val);
    },
    login() {
      console.log(
        "email and password: ",
        this.emailId,
        this.password,
        this.selectOption,
        this.date
      );
    }
  },
  components: {
    InputText,
    DatePicker,
    DropDown
  }
};
</script>
