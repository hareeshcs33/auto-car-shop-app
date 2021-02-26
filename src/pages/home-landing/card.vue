<template>
  <div class="card mb-4">
    <div class="card-header">
      <h3>{{ item.product }}</h3>
    </div>
    <div class="card-body">
      <div class="d-flex">
        <div class="img-box">
          <img class="item-img" :src="'/static/img/' + item.src" />
        </div>
        <div>
          <ul class="row my-1">
            <li class="col-12 col-sm-6 col-md-4">
              Product: {{ item.product }}
            </li>
            <li class="col-12 col-sm-6 col-md-4">Qty: {{ item.qty }}</li>
            <li class="col-12 col-sm-6 col-md-4">Price: {{ item.price }}</li>
            <li class="col-12 col-sm-6 col-md-4">
              discount: {{ item.discount }}
            </li>
            <li class="col-12 col-sm-6 col-md-4">coupon: {{ item.coupon }}</li>
            <li class="col-12 col-sm-6 col-md-4">
              Total Amount: {{ item.totalAmount }}
            </li>
            <li class="col-12 col-sm-6 col-md-4">color: {{ item.color }}</li>
          </ul>
          <div class="d-flex align-items-center cta-wrapper px-4">
            <div class="d-flex">
              <button
                class="btn btn-info btn-md px-5 mr-2"
                @click="addToCart(item)"
                v-if="!item.cart"
              >
                Add Cart
              </button>
              <button
                class="btn btn-info btn-md px-5 mr-2"
                @click="removeFromCart(item)"
                v-else
              >
                Remove Item From Cart
              </button>
            </div>
            <p class="mb-0">{{ message }}</p>
          </div>
        </div>
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
      type: Number
    }
  },
  data() {
    return {
      message: ""
    };
  },
  methods: {
    addToCart(item) {
      item.cart = true;
      console.log(item);
      this.addRemoveCartText();
      this.$store.commit("addToCart", item.id);
    },
    removeFromCart(item) {
      item.cart = false;
      console.log(item);
      this.addRemoveCartText();
      this.$store.commit("removeFromCart", item.id);
    },
    addRemoveCartText() {
      this.message = this.item.cart
        ? "Added item from cart"
        : "Removed item from cart";
      setTimeout(() => {
        this.message = "";
      }, 3000);
      return this.message;
    }
  }
};
</script>
