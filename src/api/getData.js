
import fetch from '../config/fetch'

//获取用户信息
export const getAdminInfo = ()=>fetch('/admin/info')

//登录
export const login = (data)=>fetch('/admin/login', data, 'POST')

//登出
export const signout = () =>fetch('/admin/signout')

//用户注册量
export const userCount = date => fetch('/statis/user/' + date + '/count')

//某一天订单量
export const orderCount = date=>fetch('/statis/order/' + date + '/count')

//某一天管理员的注册量
export const adminDayCount = date => fetch('/statis/admin/' + date + '/count')

//获取用户数量
export const getUserCount = data => fetch('/bos/users/count', data)

//获取订单数量
export const getOrderCount = data => fetch('/bos/orders/count', data)

//获取管理员数量
export const adminCount = () => fetch('/admin/count')
