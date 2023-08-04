import { createContext, useEffect, useState,useContext } from 'react'
import AuthContext from '@/context/AuthContext'

// 建立空的 Context 物件 AuthContext 用於共享的函式
const CartContext = createContext({})
export default CartContext

export const noProductState = {
  cart_id: 0,
  cart_check: 1,
  member_id:0,
  product_id:0,
  product_num: 0,
  cart_total: 0,
  cart_created: "",
  product_name:"",
  product_price: 0,
  product_brief: "",
  product_category:"",
  product_rate: 0,
  product_launch: "",
  product_discon: "",
  product_main_img:"",
  product_description:"",
  product_post:"",
  product_update:"",
  product_upload:"",
}

export const CartContextProvider = function ({ children }) {
  const {auth, setAuth } = useContext(AuthContext)
  const [cart, setCart] = useState({ ...noProductState })

  useEffect(() => {
    const str = localStorage.getItem('cartProducts')
    if (str) {
      try {
        const obj = JSON.parse(str)
        setCart(obj)
      } catch (ex) {}
    }},[])

    useEffect(() => {
      if(auth.member_id !=0){
        console.log("先來")
      fetch(`${process.env.API_SERVER}/product/cart`, {
        method: 'POST',
        body: JSON.stringify({auth}),
        headers: {
          'Content-Type': 'application/json',
        },
      }
      )
        .then((r) => r.json())
        .then((data) => {
          if(data){
            console.log("有拉")
            setCart(data.all)
            localStorage.setItem('cartProducts', JSON.stringify(data.all))
          }
        })
        .catch((error) => {console.error("Error:", error)})}
    }, [auth])

 

 

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  )
}
