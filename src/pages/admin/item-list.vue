<template>
  <div class="container">
    <ul>
      <!-- <li>{{ getUrls() }}</li> -->
    </ul>
    <item
      v-for="(item, index) in items"
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
import { items } from "./items";

export default {
  data() {
    return {
      items,
      urls: null
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
