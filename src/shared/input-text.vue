<template>
  <div class="form-group">
    <label class="d-block" for="">{{ label }}</label>
    <input
      ref="inputText"
      :type="type"
      :value="value"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="updateValue($event.target.value)"
    />
    <!-- inside input {{ emailId }} -->
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: String
    },
    label: {
      type: String
    },
    placeholder: {
      type: String
    },
    type: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    updateValue(value) {
      this.$emit("input", value);
    },
    removeSapace(value) {
      value = value.replace(/\s\s+/g, " ");
      return value;
    }
  }
};
</script>
