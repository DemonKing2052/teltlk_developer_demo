import instance from './index.js'; 

//生成订单
export function createOrder(amount,currency_id,title) {
  return instance('/create/order',"POST",{amount,currency_id,title});
}
