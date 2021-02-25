<template>
  <div class="container">
    <h3>Cart page</h3>
    <card
      v-for="(item, index) in getCartItems"
      :item="item"
      :key="index"
      :index="index"
    ></card>
  </div>
</template>
<script>
import Card from "./card.vue";
export default {
  components: {
    Card
  },
  computed: {
    getCartItems() {
      return this.$store.getters.getCartItems;
    }
  },
  mounted() {
    console.log(this.getCartCount);
  }
};
</script>
