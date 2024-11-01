import instance from './index.js'; 

//生成订单
export function createOrder(amount,currency_id,title,is_model) {
  return instance('/create/order',"POST",{amount,currency_id,title,is_model});
}
