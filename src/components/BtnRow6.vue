<template>
  <div>
    <calculator-btn :btnLabel="'±'" @click-symbol="handleClick"/>
    <calculator-btn :btnLabel="'0'" @click-symbol="handleClick"/>
    <calculator-btn :btnLabel="'.'" @click-symbol="handleClick" isTextLower/>
    <calculator-btn :btnLabel="'='" @click-symbol="handleClick" isTextLower/>
  </div>
</template>
<script>
import CalculatorBtn from "./CalculatorBtn";

export default {
  name: "BtnRow6",
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
