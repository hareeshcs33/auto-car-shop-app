<template>
  <div class="form-group">
    <input
      type="text"
      placeholder="Day"
      ref="day"
      :value="value.day"
      @input="updateDate()"
      maxlength="2"
    />
    <input
      type="text"
      placeholder="Month"
      ref="month"
      :value="value.month"
      @input="updateDate()"
      maxlength="2"
    />
    <input
      type="text"
      placeholder="year"
      ref="year"
      :value="value.year"
      @input="updateDate()"
      maxlength="4"
    />
    inside date: {{ value.day }}/{{ value.month }}/{{ value.year }}
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: Object
    }
  },
  methods: {
    updateDate() {
      this.$emit("input", {
        day: this.$refs.day.value,
        month: this.$refs.month.value,
        year: this.$refs.year.value
      });
    }
  }
};
</script>
