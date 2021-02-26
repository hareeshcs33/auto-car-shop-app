<template>
  <div class="container jumbotron">
    <h1 class="text-center">signUp</h1>
    <div class="container">
      <div class="mx-5 px-5">
        <input-text
          type="text"
          :placeholder="'enter username'"
          :cssClass="'form-control'"
          :label="'UserName'"
        ></input-text>
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
        <div>
          <drop-down
            label="Main Skill"
            v-model="mainSkill"
            :options="skills"
            @input="getValue"
          ></drop-down>
          <!-- outside selected value: {{ mainSkill }} -->
        </div>
        <div>
          <date-picker v-model="date" label="Date"></date-picker>
          <!-- outside date: {{ date.day }}/{{ date.month }}/{{ date.year }} -->
        </div>
        <div class="row">
          <div class="col-12 font-weight-bold">Gender:</div>
          <radio
            v-for="(option, index) in genderOptions"
            class="col-3"
            name="radio_option_group"
            :label="option.text"
            :value="selectedGender"
            :index="index"
            :key="index"
            @change="changeValue"
          ></radio>
        </div>
        <!-- <div>outside radio value: {{ selectedGender }}</div> -->
        <div class="row">
          <div class="col-12 font-weight-bold">Skills:</div>
          <checkbox
            v-for="(option, index) in skills"
            class="col-3"
            :label="option.text"
            :value="option.value"
            :index="index"
            :key="index"
            @input="updateValue"
            v-model="SelectedSkills"
          ></checkbox>
        </div>
        <button class="btn btn-primary px-5 d-block" @click="signUp">
          signUp
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import InputText from "../shared/input-text.vue";
import DatePicker from "../shared/date-picker.vue";
import DropDown from "../shared/drop-down.vue";
import ActionLink from "../shared/action-link.vue";
import Radio from "../shared/radio.vue";
import Checkbox from "../shared/checkbox.vue";

export default {
  data() {
    return {
      username: "",
      emailId: "",
      password: "",
      date: {
        day: null,
        month: null,
        year: null
      },
      mainSkill: null,
      SelectedSkills: null,
      skills: [
        { text: "HTML", value: "HTML" },
        { text: "CSS", value: "CSS" },
        { text: "Javascript", value: "Javascript" },
        { text: "Vuejs", value: "Vuejs" },
        { text: "React", value: "React" },
        { text: "Angular", value: "Angular" },
        { text: "Nodejs", value: "Nodejs" }
      ],
      genderOptions: [
        { text: "Male", value: "Male" },
        { text: "Female", value: "Female" },
        { text: "Other", value: "Other" }
      ],
      mainSkill: null,
      selectedGender: null
    };
  },
  methods: {
    getValue(val) {
      console.log("getValue", val);
      this.mainSkill = val;
    },
    changeValue(val) {
      console.log("changeValue", val);
      this.selectedGender = val;
    },
    updateValue(val) {
      console.log("outside ", val);
    },
    signUp() {
      console.log(
        "emailId ",
        this.emailId,
        "password: ",
        this.password,
        "mainSkill: ",
        this.mainSkill,
        "selectedGender: ",
        this.selectedGender,
        "date: ",
        this.date,
        "SelectedSkills ",
        this.SelectedSkills
      );
    }
  },
  components: {
    InputText,
    DatePicker,
    DropDown,
    ActionLink,
    Radio,
    Checkbox
  }
};
</script>
