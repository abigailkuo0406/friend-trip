import React, { useState, useEffect, Fragment } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import fakeIimg1 from '@/public/img/fake-data/fake-img-1.jpg'
import ModalProductCommentEach from '@/components/common/modal/modal_product_comment_each'
import BtnNormal from '@/components/common/button/btn-normal'
import Swal from 'sweetalert2'
import Modal from 'react-bootstrap/Modal'
export default function ModalProductComment({
  id='',
  orderID='',
  show=false,
  setShow=()=>{},
  productDetail=[], // 所有商品列表
  setHasComment=()=>{},
  setOrderChange=()=>{},
  setSavedComment=()=>{},
}) {
  const [comment, setComment] = useState([]);
  const [sendComment, setSendComment] = useState([]);
  const [swalStatus, setSwalStatus] = useState('notYet')
  const handleClose = () => {
    setOrderChange(orderID)
    setShow(false)
    setComment([])
  };
  

  const commentComplete = ()=>{
    Swal.fire({
      width: 400,
      html: `<h4>是否完成對此商品的評論</h4>`,
      icon: 'question',
      iconColor: '#FABCBF',
      color: '#674C87',
      confirmButtonColor: '#D0A5CA',
      denyButtonColor:'#674C87',
      showConfirmButton: true,
      showDenyButton: true,
      confirmButtonText: '取消',
      denyButtonText: '提交',
    }).then((result) => {
      if (result.isDenied) {
        Swal.fire({
          width: 400,
          html: `<h4>已成功提交</h4>`,
          icon: 'success',
          iconColor: '#FABCBF',
          color: '#674C87',
          confirmButtonColor: '#674C87',
          showConfirmButton: false,
          timer: 3000
         
        }).finally(() => {
        setSwalStatus('goComplete')
        setSendComment(comment)
        })
      } else if (result.isConfirmed || result.dismiss) {
        setSwalStatus('notYet')
        setSendComment([])
        setHasComment(false)
      }
    })
    .finally(() => {
      setComment([])
      setShow(false)
    })
  }

  useEffect(()=>{
    if(orderID && swalStatus=='goComplete' && sendComment!= []){
      console.log("要存進去的商品評論: ", comment)
    fetch(`${process.env.API_SERVER}/order/writeComment`, {
      method: 'POST',
      body: JSON.stringify({memberID: productDetail[0].member_id, orderID: orderID, comment: sendComment}),
      headers: {
        'Content-Type': 'application/json',
      },
    }
    )
      .then((r) => r.json())
      .then((data) => {
        console.log("這筆訂單的產品有1：",data.rows1)
        console.log("這筆訂單的產品有2：",data.rows2)
        setHasComment(true)
        setSavedComment([orderID, data.rows1])
      })}
  }, [sendComment])

  const submitComment = (e)=>{
    e.preventDefault()
    commentComplete()
  }

  return(
    <Modal show={show} onHide={handleClose} dialogClassName="modal-dialog-centered modal-dialog-scrollable  modal-lg" className="modalCartAdd modal fade ModalProductComment" id={id} tabindex="-1" aria-labelledby={`${id}Label`} aria-hidden="true">
      <Modal.Header closeButton>
        <p className="modal-title fs-5" id={`${id}Label`}>購買商品評論</p>
      </Modal.Header>
      <div className="modal-body">
      <form className="product_comment_form" id={`Form-${orderID}`} onSubmit={submitComment}>
      {productDetail.length > 0 ? (
        productDetail.map((e,i) => (
      <Fragment key={e.product_id + "forComment"}>
        <ModalProductCommentEach
          productID={e.product_id}
          productName={e.product_name}
          setComment={setComment}
          comment={comment}
        ></ModalProductCommentEach>
      </Fragment>
    ))
  ) : (
        <p>此訂單無商品可以評價</p>
  )}
  <Modal.Footer>
    <BtnNormal
            type="submit"
            value="submit"
            btnText="送出評論"
            addClassforButton="btn-dark" //.btn-dark：深色按鈕 .btn-light：淺色按鈕 .btn-white：白色按鈕
          ></BtnNormal>
    </Modal.Footer>
          
        </form>
      </div>
</Modal>
  )
}
