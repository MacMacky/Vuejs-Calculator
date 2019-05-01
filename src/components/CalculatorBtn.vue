<template>
  <v-btn
    color="green lighten-1 white--text pt-30 pb-30"
    :class="isTextLower ? 'text-lower' : ''"
    @click="clickSymbol(btnLabel)"
  >
    <slot></slot>
    {{hasIcon ? '' : btnLabel}}
  </v-btn>
</template>
<script>
export default {
  name: "CalculatorBtn",
  methods: {
    clickSymbol(symbol) {
      this.$emit("click-symbol", symbol);
    }
  },
  props: {
    btnLabel: {
      type: String,
      required: false
    },
    isTextLower: {
      type: Boolean
    },
    hasIcon: {
      type: Boolean
    }
  }
};
</script>

<style>
.v-btn__content {
  height: 0 !important;
  font-size: 17px;
}

.text-lower {
  text-transform: lowercase;
}
.pt-30 {
  padding-top: 30px;
}
.pb-30 {
  padding-bottom: 30px;
}
</style>


