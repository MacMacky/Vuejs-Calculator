<template>
  <div>
    <calculator-btn :btnLabel="'%'" @click-symbol="handleClick"/>
    <calculator-btn :btnLabel="'√'" @click-symbol="handleClick"/>

    <calculator-btn :btnLabel="'x²'" @click-symbol="handleClick" isTextLower/>
    <calculator-btn :btnLabel="'1/x'" @click-symbol="handleClick" isTextLower/>
    <!-- <calculator-btn :btnLabel="''" :handleClick="handleClick">
      <v-icon>arrow_back</v-icon>
    </calculator-btn>
    <calculator-btn :btnLabel="'CE'" :handleClick="handleClick"/>
    <calculator-btn :btnLabel="'C'" :handleClick="handleClick"/>
    <calculator-btn :btnLabel="'√'" :handleClick="handleClick"/>-->
  </div>
</template>
<script>
import CalculatorBtn from "./CalculatorBtn";
export default {
  name: "BtnRow1",
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

