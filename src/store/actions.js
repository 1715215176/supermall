import { ADD_COUNTER, ADD_TO_CART } from './mutation-type'
export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      // find方法返回第一个符合条件的对象
      let product = context.state.cartList.find(item => item.iid === payload.iid)
      if (product) {
        // 若果商品存在就在商品item中的count属性加一
        context.commit(ADD_COUNTER, product)
        resolve('商品数量加一')
      } else {
        // 如果商品不存在就添加商品 并且 添加该count属性
        payload.count = 1
        context.commit(ADD_TO_CART, payload)
        reject('添加商品成功')
      }
    })
  }
}
