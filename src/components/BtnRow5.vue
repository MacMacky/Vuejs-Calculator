<template>
  <div>
    <calculator-btn :btnLabel="'1'" @click-symbol="handleClick"/>
    <calculator-btn :btnLabel="'2'" @click-symbol="handleClick"/>
    <calculator-btn :btnLabel="'3'" @click-symbol="handleClick"/>
    <calculator-btn :btnLabel="'+'" @click-symbol="handleClick"/>
  </div>
</template>
<script>
import CalculatorBtn from "./CalculatorBtn";

export default {
  name: "BtnRow5",
  components: {
    CalculatorBtn
  },
  props: {
    handleClick: {
      type: Function,
      required: true
    }
  }
};
</script>
