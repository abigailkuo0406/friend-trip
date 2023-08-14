import React, { useState, useEffect, Fragment,useContext, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import logo from '@/public/img/logo/FriendTrip-Logo.png'
import NoSidebarLayout from '@/components/layout/nosidebar-layout'
import TableCart from '@/components/common/table/table-cart'
import InputCheckboxGroup from '@/components/common/input/input-checkbox-group'
import BtnNormal from '@/components/common/button/btn-normal'
import CheckingHeader from '@/components/product_checkout/checking_header'
import AuthContext from '@/context/AuthContext'
// import CartContext from '@/context/CartContext'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

export default function Cart() {
  const {auth, setAuth } = useContext(AuthContext)
  // const {cart, setCart } = useContext(CartContext)
  const router = useRouter()
  const [agree, setAgree]=useState(false)
  const [agreeName, setAgreeName]=useState('')
  const [cartCheckbox,setCartCheckbox]=useState(true)
  const cartCheckRef = useRef(cartCheckbox)
  const[change, setChange] = useState('')
  const[check, getCheck]=useState(true)
  const[inputCheck, setInputCheck]=useState(false)
  const[deleteData, setDeleteData] = useState(0) // 偵測是否有刪商品
  const[changeValue, setChangeValue] = useState(NaN) // 存有改變數字的 number
  const[changeName, setChangeName] = useState(NaN) // 存有改變數字的 name
  const[getTotal, setGetTotal] = useState(0)
  const[total, setTotal] = useState(0)
  const[errorText, setErrorText] = useState("\u00A0")
  const [cartProduct, setcartProduct]=useState([])
  const [cartYesCheck, setCartYesCheck]=useState([])
  const [orderID, setOrderID] = useState('')
  useEffect(() => {
    localStorage.setItem("CartMoneyTotal", JSON.stringify({}))
    localStorage.setItem("CartCheck", JSON.stringify({}))
    localStorage.setItem('cartProducts', JSON.stringify([]))
  }, [])

  useEffect(()=>{
    const CartCheck = JSON.parse(localStorage.getItem("CartCheck"))
    for(let element in CartCheck){
      if(CartCheck[element] == false)
        {
        cartCheckRef.current = false

        }
    }
  },[check])




  useEffect(() => {
    if(auth.member_id !=0){
      console.log("來囉",process.env.API_SERVER)
    fetch(`${process.env.API_SERVER}/product/cart/read`, {
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
          console.log("生成購物車資料：",data.all)
          console.log(`接收到${auth.member_name}的購物車資料囉，購物車內有幾項：${data.all.length}`)
          setcartProduct(data.all)
          if(data.all.length > 0){
          setTotal(data.all[0].cart_total)
          localStorage.setItem('cartProducts', JSON.stringify(data.all))
          setCart(data.all)
        }} else if(!data){
          setcartProduct([])
          setCart([])
        }
      })
      .catch((error) => {console.error("Error:", error)})}
  }, [auth, deleteData, change, router])
 
  useEffect(() => {

    fetch(`${process.env.API_SERVER}/product/cart/change`, {
      method: 'POST',
      body: JSON.stringify({member:auth.member_id, value: changeValue, name:changeName}),
      headers: {
        'Content-Type': 'application/json',
      },
    }
    )
      .then((r) => r.json())
      .then((data) => {
        setChange(data.change)
        setTotal(data.all[0].cart_total)
      })
    // console.log("member：",auth.member_id+"，改變名稱：",changeName+"，數量：",changeValue+"，布林：",check)
  }, [changeValue])

  useEffect(() => {
    if(auth.member_id>0){
  fetch(`${process.env.API_SERVER}/product/cart/change`, {
      method: 'POST',
      body: JSON.stringify({member:auth.member_id, check: check, name:changeName}),
      headers: {
        'Content-Type': 'application/json',
      },
    }
    )
      .then((r) => r.json())
      .then((data) => {
        setTotal(data.all[0].cart_total)
      })
    console.log("member：",auth.member_id+"，改變名稱：",changeName+"，布林：",check)
    }
  }, [check, changeName])

  useEffect(() => {
    fetch(`${process.env.API_SERVER}/product/cart/change`, {
        method: 'POST',
        body: JSON.stringify({member:auth.member_id, allCheck: cartCheckbox}),
        headers: {
          'Content-Type': 'application/json',
        },
      }
      )
        .then((r) => r.json())
        .then((data) => {
         
          setTotal(data.all[0].cart_total)
        })
    }, [cartCheckbox])


  const allproduct = cartProduct
  useEffect(() => {
    if(agree[1] == 'AgreePolicy'){
      setErrorText("\u00A0")
    }
    }, [agree])
  

  const letCheck = () => {

    if(cartProduct.length != 0 && Object.values(JSON.parse(localStorage.getItem('CartCheck'))).some(value => value == true)){
    if(agree[1] == 'AgreePolicy'){
    fetch(`${process.env.API_SERVER}/product/cart/checking`, {
      method: 'POST',
      body: JSON.stringify({member:auth.member_id}),
      headers: {
        'Content-Type': 'application/json',
      },
    }
    )
      .then((r) => r.json())
      .then((data) => {
        console.log("產生訂單編號：",data.Batch)
        localStorage.setItem(`order_id`, data.Batch);
        localStorage.setItem("checkoutInfo", JSON.stringify({}))
        setOrderID(data.Batch)
        
      })
      window.location='./checkout?page=1'
        
      } else {setErrorText("請閱讀並勾選同意本公司相關規定")}}
      else if(cartProduct.length==0){alert("購物車內尚無商品！")}
      else if (Object.values(JSON.parse(localStorage.getItem('CartCheck'))).every(value => value != true)){
        setErrorText("請勾選要結帳的商品")}
      
  }

 
  
 
if(true){
  return (
    <>
    <CheckingHeader page="cart"></CheckingHeader>
      <section className="order_section">
        <div className="order_left">
          <table className="product_table">
            <thead>
              <tr>
                <th className="product_th_check">
                <input
                  type="checkbox"
                  name="cartCheckbox"
                  id="cartCheckbox"
                  checked={cartCheckbox}
                  onChange = {()=>{
                      setCartCheckbox(!cartCheckbox)

                     
                      let temp = JSON.parse(localStorage.getItem("CartCheck"))
                      for(let key in temp){
                        temp[key] = !cartCheckbox
                      }
                      localStorage.setItem("CartCheck", JSON.stringify(temp));
                    }}
                  className='new-check'
                  >
                  </input>
                </th>
                <th className="product_th_name">商品名</th>
                <th className="product_th_price">價格</th>
                <th className="product_th_num">數量</th>
                <th className="product_th_total">小計</th>
                <th className="product_th_btn"></th>
              </tr>
            </thead>
            <tbody>
  {cartProduct.length > 0 ? (
    cartProduct.map((i) => (
      <Fragment key={i.product_id + "forCart"}>
        <TableCart
          cartCheckbox={cartCheckbox} // 決定是否全部有勾選
          getCheck={getCheck}
          memberID={i.member_id}
          productID={i.product_id}
          productIMG={i.product_main_img}
          productName={i.product_name}
          productPrice={i.product_price}
          productNum={i.product_num}
          productBrief={i.product_brief}
          productPost={i.product_post}
          getValue={setChangeValue}
          theValue={changeValue}
          getName={setChangeName}
          theName={changeName}
          setDeleteData={setDeleteData}
          setGetTotal={setGetTotal}
          setTotal={setTotal}
        ></TableCart>
      </Fragment>
    ))
  ) : (
    <tr className="noItemCart">
      <td colSpan="10">
        <p>此購物車尚無商品</p>
      </td>
    </tr>
  )}
</tbody>
          </table>
        </div>
        <div className="order_right">
          <div className="order_rightHead">
          <div className="order_rightHead_logo"><Image src={logo}></Image></div>
            <div className="order_rightHead_title">
              <p>友好商城</p>
            </div></div>
            <div className="order_rightInfo">
              <p className="order_rightInfoTitle">購物車總計</p><h4 className="order_rightInfoTotal">{total}</h4><p className="order_rightInfoSmall small-font">敬愛的顧客，以下價格皆含稅及運費</p>
            </div>
            <div className="order_rightAgree">
           
            <InputCheckboxGroup
            name="AgreePolicy"
            // idGroup、valueGroup、labelGroup 數目要一致，相同 index 互相對應
            idGroup={['AgreePolicy']} // 個別 radio 的 ID
            valueGroup={['AgreePolicy']} // 個別 radio 的 name
            labelGroup={['我已同意友好商城的所有購物政策']} // 個別標籤
            checkedValue={['yes']} // 預設勾選，需填入 value，格式為 Array
            getValue={setAgree}
            getName={setAgreeName}
            addClassforTitleLabel="" // 如果要在標題 label 添加 class
            addClassforEachLabel="agree-policy-text" // 如果要在個別選項 label 添加 class
            addClassforInput="" // 如果要在 input 添加 class
            errorText={errorText}
          ></InputCheckboxGroup>
            </div>
            <div className="order_rightButton">
            <BtnNormal
            type="button"
            value="button"
            btnText="返回商品頁"
            addClassforButton="btn-light order-btn" //.btn-dark：深色按鈕 .btn-light：淺色按鈕 .btn-white：白色按鈕
            disabled={false} // fase：可點，true：不可點
            href="./"
            target=""
            onClick={()=>{}}
          ></BtnNormal>
          <BtnNormal
            type="submit"
            value="submit"
            btnText="結帳"
            addClassforButton="btn-dark order-btn" //.btn-dark：深色按鈕 .btn-light：淺色按鈕 .btn-white：白色按鈕
            disabled={false} // fase：可點，true：不可點
            onClick={letCheck}
          ></BtnNormal>
            </div>
        </div>
      </section>
    </>
  )
}
}
Cart.getLayout = function (page) {
  return <NoSidebarLayout>{page}</NoSidebarLayout>
}
