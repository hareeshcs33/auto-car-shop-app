<template>
  <div class="container">
    <card
      v-for="(item, index) in getItemLists"
      :item="item"
      :key="index"
      :index="index"
    ></card>
  </div>
</template>

<script>
import Card from "../pages/home-landing/card.vue";
export default {
  name: "home",
  data() {
    return {};
  },
  computed: {
    getItemLists() {
      return this.$store.state.items;
    }
  },
  components: {
    Card
  }
};
</script>
