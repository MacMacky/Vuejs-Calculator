<template>
  <div>
    <calculator-btn :btnLabel="'7'" @click-symbol="handleClick"/>
    <calculator-btn :btnLabel="'8'" @click-symbol="handleClick"/>
    <calculator-btn :btnLabel="'9'" @click-symbol="handleClick"/>
    <calculator-btn :btnLabel="'×'" @click-symbol="handleClick"/>
    <!-- <calculator-btn :btnLabel="'6'" :handleClick="handleClick"/>
    <calculator-btn :btnLabel="'5'" :handleClick="handleClick"/>
    <calculator-btn :btnLabel="'4'" :handleClick="handleClick"/>
    <calculator-btn :btnLabel="'+'" :handleClick="handleClick"/>
    <calculator-btn :btnLabel="'-'" :handleClick="handleClick"/>-->
  </div>
</template>
<script>
import CalculatorBtn from "./CalculatorBtn";

export default {
  name: "BtnRow3",
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
