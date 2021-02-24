<template>
  <div class="container">
    <item
      v-for="(item, index) in getItems"
      :item="item"
      :index="index"
      :key="item.id"
      :getUrls="getUrls"
      @deleteItem="deleteItem"
    ></item>
  </div>
</template>
<script>
import axios from "axios";
import Item from "./item.vue";

export default {
  data() {
    return {
      urls: null
    };
  },
  components: {
    Item
  },
  computed: {
    getItems() {
      return this.$store.state.items;
    }
  },
  methods: {
    deleteItem(item) {
      console.log("delete item parent", item);
      this.items.splice(item, 1);
      console.log(this.items);
    },
    async getUrls() {
      return await axios
        .get("https://jsonplaceholder.typicode.com/photos")
        .then(function(response) {
          const obj = response.data;
          const arr = [];
          obj.map(item => {
            arr.push(item.url);
          });
          const urls = arr.splice(0, 10);
          return urls;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  created() {
    console.log(this.getUrls());
  }
};
</script>
