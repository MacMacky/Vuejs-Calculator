<template>
  <v-container>
    <v-layout text-xs-center wrap justify-center>
      <v-flex mb-4 xs3 md6 lg5 xl3>
        <v-card class="py-2 px-0" color="grey lighten-3">
          <v-img :src="require('../assets/logo.png')" class="my-3" contain height="200"></v-img>
          <v-text-field solo class="px-3" v-model="value"/>
          <row1 :handleClick="handleClick"/>
          <row2 :handleClick="handleClick"/>
          <row3 :handleClick="handleClick"/>
          <row4 :handleClick="handleClick"/>
          <row5 :handleClick="handleClick"/>
          <row6 :handleClick="handleClick"/>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import CalculatorBtn from "./CalculatorBtn";
import Row1 from "./BtnRow1";
import Row2 from "./BtnRow2";
import Row3 from "./BtnRow3";
import Row4 from "./BtnRow4";
import Row5 from "./BtnRow5";
import Row6 from "./BtnRow6";

export default {
  data() {
    return {
      value: "",
      ops: []
    };
  },
  methods: {
    handleClick(symbol) {
      console.log(symbol);
    }
  },
  components: {
    Row1,
    Row2,
    Row3,
    Row4,
    Row5,
    Row6,
    CalculatorBtn
  }
};
</script>

<style>
input {
  text-align: right;
}
</style>
