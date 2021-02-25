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
<style>
.img-box {
  background-color: gray;
  min-width: 200px;
  width: 200px;
  height: 200px;
  transition: 0.2s;
  overflow: hidden;
  border-radius: 5px;
}
.item-img {
  min-width: 200px;
  width: 200px;
  height: 200px;
  transition: 0.4s;
}
.item-img:hover {
  transform: scale(1.25);
}
ul {
  list-style: square;
}
.card-body {
  background-image: linear-gradient(to bottom right, #d0e5fb, #fff);
}
.card-header {
  background-image: linear-gradient(to bottom left, #d0e5fb, #fff);
}
</style>
