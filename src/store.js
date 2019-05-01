import Vue from 'vue'
import Vuex from 'vuex'
import { equalsLogic, returnRealNum } from './helpers';



Vue.use(Vuex)

export const NUM_REGEX = /[0-9]/, SIGN_REGEX = /[×÷+-]/;

export default new Vuex.Store({
  state: {
    ops: [],
    value: '0',
    isMathSignClicked: false
  },
  mutations: {
    ADD_OPERATION(state, payload) {
      if (state.isMathSignClicked && NUM_REGEX.test(payload) && !SIGN_REGEX.test(payload)) {
        state.value = payload;
        state.isMathSignClicked = false;
      }
      else if (NUM_REGEX.test(payload) && state.value != '0') {
        state.isMathSignClicked = false;
        state.value += payload;
      } else if (SIGN_REGEX.test(payload) && !state.isMathSignClicked) {
        state.isMathSignClicked = true;
        state.ops.push(state.value, payload);
      }
      else if (state.value == '0') {
        state.value = payload;
      } else if (payload == '√') {
        state.value = Math.sqrt(returnRealNum(state.value)).toString();
        //
      } else if (payload == 'x²') {
        state.value = Math.pow(returnRealNum(state.value), 2).toString();
      }
      else if (payload == '=') {
        state.ops.push(state.value);
        const val = equalsLogic(state.ops, state.value);
        state.value = val;
      }

    }
  },
  actions: {
    addNewOperation(ctx, symbol) {
      ctx.commit('ADD_OPERATION', symbol);
    }
  }
})
