import {ADD_COUNTER,ADD_TO_CART} from './mutation-type'
export default {
   // 目的就是修改state中的属性
    // mutation中完成的事尽可能单一
    [ADD_COUNTER](state,payload){
      payload.count += 1
    },
    [ADD_TO_CART](state,payload){
      payload.checked = true
      state.cartList.push(payload)
    }
}
