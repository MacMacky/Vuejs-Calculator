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
      switch (payload) {
        case '=':
          if (state.value != '0') {
            state.ops.push(state.value);
            const val = equalsLogic(state.ops, state.value).toString();
            state.value = val;
            state.ops.length = 0;
          }
          break;
        case '0':
          state.value = parseInt(state.value) === 0 ? '0' : state.value + '0';
          break;
        case '1': case '2': case '3':
        case '4': case '5': case '6':
        case '7': case '8': case '9':
          if (state.isMathSignClicked) {
            state.value = payload;
          } else if (state.value === '0') {
            state.value = payload;
          }
          else {
            state.value += payload;
          }
          state.isMathSignClicked = false;
          break;
        case '+': case '-':
        case '÷': case '×':
          state.isMathSignClicked = true;
          state.ops.push(state.value, payload);
          break;
        case 'CE':
          state.value = '0';
          break;
        case 'C':
          state.ops.length = 0, state.value = '0';
          break;
        case '√':
          state.value = Math.sqrt(returnRealNum(state.value)).toString();
          break;
        case 'x²':
          state.value = Math.pow(returnRealNum(state.value), 2).toString();
          break;
        default:
          break;
      }
    }
  },
  actions: {
    addNewOperation(ctx, symbol) {
      ctx.commit('ADD_OPERATION', symbol);
    }
  }
})
