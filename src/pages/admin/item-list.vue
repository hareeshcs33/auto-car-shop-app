<template>
  <div class="container">
    <item
      v-for="(item, index) in items"
      :item="item"
      :index="index"
      :key="item.id"
      @deleteItem="deleteItem"
    ></item>
  </div>
</template>
<script>
import Item from "./item.vue";
import { items } from "./items";

export default {
  data() {
    return {
      items
    };
  },
  components: {
    Item
  },
  methods: {
    deleteItem(item) {
      console.log("delete item parent", item);
      this.items.splice(item, 1);
      console.log(this.items);
    }
  }
};
</script>
