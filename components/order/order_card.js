import React, { useState, useEffect, Fragment } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import OrderCardProduct from '@/components/order/order_card_product'
import BtnNormal from '@/components/common/button/btn-normal'
import fakeIimg1 from '@/public/img/fake-data/fake-img-1.jpg'
import Swal from 'sweetalert2'
import { FaAngleDown } from "react-icons/fa6";
import { IoClipboardOutline, IoCheckmarkSharp, IoChatboxEllipsesOutline } from "react-icons/io5";
import { BiMessageDetail, BiMessageCheck } from "react-icons/bi";
import ModalProductComment from '@/components/common/modal/modal_product_comment'

export default function OrderCard({
    memberName='',
    orderDetail={}, // 存有該筆訂單所有資料
    productDetail=[], // 存有該筆訂單所有商品資料的 Array
    setOrderChange=()=>{},
}) {
  const [checkAlready, setCheckAlready] = useState(false)
  const [getComment, setGetComment] = useState([])
  const router = useRouter()
  const [swalStatus, setSwalStatus] = useState('notYet')
  const [productDetailComponent, setProductDetailComponent] = useState(<p>沒有資料</p>)
  const [hasComment, setHasComment] = useState(false)
  const [mystatus, setMyStatus] = useState(false)
  const [savedComment, setSavedComment] = useState(false)
  const [banCommentID, setBanCommentID] = useState('')
  const [show, setShow] = useState(false);

  useEffect(()=>{
      fetch(`${process.env.API_SERVER}/order/checkComment`,{
        method: 'POST',
        body: JSON.stringify({orderID: orderDetail.order_id}),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((r) => r.json())
        .then((data) => {
          if(data.all.length > 0){
            setMyStatus(router.query.status)
            setBanCommentID(data.all[0].order_id)
            setGetComment(data.all)
          }
          setCheckAlready(true)
        })
  }, [hasComment,savedComment, router.query.status])
  useEffect(()=>{setOrderChange(orderDetail.order_id)},[banCommentID])

 
  const orderComplete = ()=>{
    Swal.fire({
      width: 400,
      html: `<h4>敬愛的會員${memberName}您好，</h4>
      <h4>請確認訂單編號 "${orderDetail.order_id}" 已經收到</h4>`,
      icon: 'info',
      iconColor: '#FABCBF',
      color: '#674C87',
      confirmButtonColor: '#D0A5CA',
      denyButtonColor:'#674C87',
      showConfirmButton: true,
      showDenyButton: true,
      confirmButtonText: '還未收到',
      denyButtonText: '已成功收貨',
    }).then((result) => {
      if (result.isDenied) {
        setSwalStatus('goComplete')
      } else if (result.isConfirmed || result.dismiss) {
        setSwalStatus('notYet')
      }
    })
  }


  useEffect(()=>{
    if(orderDetail.order_id && swalStatus=='goComplete'){
      fetch(`${process.env.API_SERVER}/order/orderComplete`,{
        method: 'POST',
        body: JSON.stringify({orderID: orderDetail.order_id}),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((r) => r.json())
        .then((data) => {
          if(data.all.affectedRows != 0){
            setOrderChange(orderDetail.order_id+orderDetail.member_id)
          }
        })
    }
  }, [swalStatus])


  const handleShow = () => setShow(true);

  let btnComponent;
  if (orderDetail.order_status === '訂單成立') {
    btnComponent = <BtnNormal
    type="button"
    value="button"
    btnText="已收到商品"
    addIMGLeft={<IoCheckmarkSharp></IoCheckmarkSharp>}
    addClassforButton="btn-dark" //.btn-dark：深色按鈕 .btn-light：淺色按鈕 .btn-white：白色按鈕
    disabled={false} // fase：可點，true：不可點
    onClick={orderComplete}
  ></BtnNormal>
  } else if (orderDetail.order_status === '訂單完成' && banCommentID != orderDetail.order_id) {
    btnComponent = <BtnNormal
    type="button"
    value="button"
    btnText="評價商品"
    addIMGLeft={<BiMessageDetail></BiMessageDetail>}
    addClassforButton="btn-dark" //.btn-dark：深色按鈕 .btn-light：淺色按鈕 .btn-white：白色按鈕
    disabled={false} // fase：可點，true：不可點
    onClick={handleShow}
  ></BtnNormal> 
  } else if (orderDetail.order_status === '訂單完成' && banCommentID == orderDetail.order_id) {
    btnComponent = <BtnNormal
    type="button"
    value="button"
    btnText="已評價過"
    addIMGLeft={<BiMessageCheck></BiMessageCheck>}
    addClassforButton="btn-ban" //.btn-dark：深色按鈕 .btn-light：淺色按鈕 .btn-white：白色按鈕
    disabled={true} // fase：可點，true：不可點
    onClick={handleShow}
  ></BtnNormal>}

  // 將後端傳來的時間格式轉成台灣的時間格式
  function formatDate(dateString) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const formattedDate = new Date(dateString).toLocaleString('zh-TW', options);
    return formattedDate;
  }


  useEffect(() => {
  // 訂單詳情展開樣式，避免展開過程中內容的 css 沒帶到透過 BS 方法監聽下拉收合事件
  // addEventListener 為非 React 語法只能用 useState
  if(orderDetail.order_id != undefined){
  const myCollapsible = document.getElementById(`collapseDetail${orderDetail.order_id}`)
  if(myCollapsible!=undefined){  
  myCollapsible.addEventListener('show.bs.collapse', () => {
      setProductDetailComponent(<Fragment>
        <div className="text-center">
          <div className="spinner-grow" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </Fragment>)
    })
    myCollapsible.addEventListener('shown.bs.collapse', () => {
      setProductDetailComponent(<Fragment>
        <div className="order-info-each">
          <p>下訂時間：</p><p>{formatDate(orderDetail.order_time)}</p>
        </div>
        {(orderDetail.order_status === '訂單完成' ? <div className="order-info-each">
          <p>完成時間：</p><p>{formatDate(orderDetail.complete_time)}</p>
        </div> :
        "")}
        <div className="order-info-each">
          <p>收件姓名：</p><p>{orderDetail.receiver_name} {orderDetail.receiver_gender == 'male' ? "先生" : "小姐"}</p>
        </div>
        <div className="order-info-each">
          <p>收件電話：</p><p>{orderDetail.receiver_tel}</p>
        </div>
        <div className="order-info-each">
          <p>收件地址：</p><p>{orderDetail.receiver_address}</p>
        </div>
        <div className="order-info-each">
          <p>電子信箱：</p><p>{orderDetail.receiver_email}</p>
        </div>
        <div className="order-info-each">
          <p>訂單備註：</p><p>{orderDetail && orderDetail.order_note && orderDetail.order_note.length > 0 ? orderDetail.order_note : "無備註"}</p>
        </div>
        <div className="order-info-each">
          <p>付款方式：</p><p>{orderDetail.payment_method}</p>
        </div>
      </Fragment>)
    })
    myCollapsible.addEventListener('hide.bs.collapse', () => {
      setProductDetailComponent(<Fragment>
        <div className="text-center">
          <div className="spinner-grow" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </Fragment>)
    })
  }}
}, [orderDetail.order_id]);

  return (
   <Fragment>
        <div className="order-card">
        <div className="order-card-header">
        <div className="order-card-header-id">
            <IoClipboardOutline></IoClipboardOutline><h4>訂單編號：</h4><h4>{orderDetail.order_id}</h4>
        </div>
        <div className="order-card-header-status">
            <h6>{orderDetail.order_status}</h6>
        </div>
            
        </div>
        <div className="order-card-body">
        {productDetail.length > 0 ? (
            productDetail.map((e,i) => (
                <Fragment key={i}>
                   <OrderCardProduct
                   productDetail={productDetail[i]}
                   getComment={getComment}
                   banCommentID={banCommentID}
                   >
                   </OrderCardProduct>
                </Fragment>
                ))
        ) : (
            
                <p>您的訂單尚未擁有商品</p>
            
        )}
        </div>
        <div className="order-detial-toggle">
          <button className="order-detial-btn" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseDetail${orderDetail.order_id}`} aria-expanded="false" aria-controls={`collapseDetail${orderDetail.order_id}`}>訂單詳情<FaAngleDown/></button>
        </div>
        <div className="collapse" id={`collapseDetail${orderDetail.order_id}`}>
        {productDetailComponent}
        
          
        </div>
        <div className="order-card-footer">
        <div className="order-card-total-price">
            <h6>{`價格總計：NT$ ${productDetail.length>0 ? productDetail[0].checking_total : 0}`}</h6>
        </div>
        <div className="order-card-btn">
        {btnComponent}
        </div>
        </div>
     </div>
     <ModalProductComment id={`CommentModal${orderDetail.order_id}`} setSavedComment={setSavedComment} show={show} setShow={setShow} productDetail={productDetail} orderID={orderDetail.order_id} setHasComment={setHasComment} setOrderChange={setOrderChange}></ModalProductComment>
     </Fragment>
  

  )
}
