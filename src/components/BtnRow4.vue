<template>
  <div>
    <calculator-btn :btnLabel="'6'" @click-symbol="handleClick"/>
    <calculator-btn :btnLabel="'5'" @click-symbol="handleClick"/>
    <calculator-btn :btnLabel="'4'" @click-symbol="handleClick"/>
    <calculator-btn :btnLabel="'-'" @click-symbol="handleClick"/>
    <!-- <calculator-btn :btnLabel="'1'" :handleClick="handleClick"/>
    <calculator-btn :btnLabel="'2'" :handleClick="handleClick"/>
    <calculator-btn :btnLabel="'3'" :handleClick="handleClick"/>
    <calculator-btn :btnLabel="'.'" :handleClick="handleClick"/>
    <calculator-btn :btnLabel="'='" :handleClick="handleClick"/>-->
  </div>
</template>
<script>
import CalculatorBtn from "./CalculatorBtn";

export default {
  name: "BtnRow4",
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
