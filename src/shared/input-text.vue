<template>
  <div class="form-group">
    <label for="">{{ labelName }}</label>
    <input
      ref="input_text"
      :type="type"
      :placeholder="placeholder"
      :class="cssClass"
      :maxlength="maxlength"
      @change="updateValue($event.target.value)"
      @blur="setValue($event.target.value)"
      @keyup.enter="updateValue($event.target.value)"
    />
  </div>
</template>
<script>
export default {
  props: {
    labelName: {
      type: String,
      required: true,
      default: ""
    },
    placeholder: {
      type: String,
      required: true,
      default: ""
    },
    type: {
      type: String,
      required: true,
      default: ""
    },
    maxlength: {
      type: Number
    },
    cssClass: {
      type: String,
      required: true,
      default: ""
    }
  },
  methods: {
    updateValue(value) {
      this.$emit("updateInput", this.removeSapace(value));
    },
    setValue(value) {
      this.$refs.input_text.value = this.removeSapace(value);
    },
    removeSapace(value) {
      value = value.replace(/\s\s+/g, " ");
      return value;
    }
  }
};
</script>
