<template>
  <div>
    <calculator-btn :btnLabel="'CE'" @click-symbol="handleClick"/>
    <calculator-btn :btnLabel="'C'" @click-symbol="handleClick"/>
    <calculator-btn :btnLabel="'ERASE'" @click-symbol="handleClick" hasIcon>
      <v-icon>arrow_back</v-icon>
    </calculator-btn>
    <calculator-btn :btnLabel="'÷'" @click-symbol="handleClick"/>

    <!-- <calculator-btn :btnLabel="'7'" :handleClick="handleClick"/>
    <calculator-btn :btnLabel="'8'" :handleClick="handleClick"/>
    <calculator-btn :btnLabel="'9'" :handleClick="handleClick"/>
    <calculator-btn :btnLabel="'×'" :handleClick="handleClick"/>
    <calculator-btn :btnLabel="'/'" :handleClick="handleClick"/>-->
  </div>
</template>
<script>
import CalculatorBtn from "./CalculatorBtn";

export default {
  name: "BtnRow2",
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


