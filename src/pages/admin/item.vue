<template>
  <div class="d-flex mb-5">
    <div>
      <img class="item-img" :src="'/static/img/' + item.src" />
    </div>
    <div>
      <ul>
        <li>Product: {{ item.product }}</li>
        <li>Qty: {{ item.qty }}</li>
        <li>Actual price: {{ item.price }}</li>
        <li>discount: {{ item.discount }}</li>
        <li>coupon: {{ item.coupon }}</li>
        <li>Total Amount: {{ item.totalAmount }}</li>
      </ul>
      <div class="cta-wrapper px-4">
        <button class="btn btn-info btn-sm px-3" @click="editItem(item)">
          Edit
        </button>
        <button class="btn btn-danger btn-sm px-3" @click="deleteItem(index)">
          Delete
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object
    },
    index: {
      type: Number,
      required: true
    },
    getUrls: {
      type: null
    }
  },
  data() {
    return {
      itemObj: {}
    };
  },
  methods: {
    editItem(item) {
      console.log("edit item", item);
      localStorage.setItem("vfl-edit", JSON.stringify(item));
      this.$router.push("admin/" + item.id);
      // this.$emit("editItem", this.item);
      console.log(this.item);
    },
    deleteItem(index) {
      console.log("delete item", index);
      this.$emit("deleteItem", index);
    }
  },
  computed: {
    imgSrc() {
      return this.item.src;
    }
  }
};
</script>
<style scoped>
.item-img {
  background-color: gray;
  width: 200px;
  height: 200px;
}
.aura1 {
  background-image: url("../../assets/hyundai-aura-15203.jpg");
}
.aura2 {
  background-image: url("../../assets/hyundai-creta-15490.jpg");
}
.aura3 {
  background-image: url("../../assets/hyundai-elantra-15111.jpg");
}
.aura4 {
  background-image: url("../../assets/hyundai-grand-i10-nios-14990.jpg");
}
.aura5 {
  background-image: url("../../assets/hyundai-i20-16085.jpg");
}
.aura6 {
  background-image: url("../../assets/hyundai-kona-electric-14934.jpg");
}
.aura7 {
  background-image: url("../../assets/hyundai-santro-14509.jpg");
}
.aura8 {
  background-image: url("../../assets/hyundai-venue-14865.jpg");
}
.aura9 {
  background-image: url("../../assets/hyundai-tucson-15706.jpg");
}
.aura10 {
  background-image: url("../../assets/hyundai-verna-15541.jpg");
}
</style>
