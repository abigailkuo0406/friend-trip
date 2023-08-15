import React, { useState, useEffect, Fragment, useContext } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'
import ProductPidPageLayout from '@/components/layout/product-pid-page-layout'
import InputNumber from '@/components/common/input/input-number'
import BtnNormal from '@/components/common/button/btn-normal'
import ModalCartAdd from '@/components/common/modal/modal_cart_add'
import AuthContext from '@/context/AuthContext'
import fakeIimg1 from '@/public/img/fake-data/fake-img-1.jpg'
import Swal from 'sweetalert2'
import {
  BsCart,
  BsCartPlus,
  BsHeartFill,
  BsHeart,
  BsChevronLeft,
} from 'react-icons/bs'
import { AiFillStar, AiOutlineStar, AiOutlineLeft } from 'react-icons/ai'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { TiArrowLeft } from 'react-icons/ti'

export default function ProductItem({}) {
  const { auth, setAuth } = useContext(AuthContext)

  const router = useRouter()
  const [row, setRow] = useState({
    product_id: 0,
    product_name: '',
    product_price: '',
    product_brief: '',
    product_category: '',
    product_rate: '',
    product_launch: '',
    product_discon: '',
    product_main_img: '',
    product_description: '',
    product_post: '',
    product_update: '',
    product_upload: '',
  })
  const {
    product_id,
    product_name,
    product_price,
    product_brief,
    product_category,
    product_rate,
    product_launch,
    product_discon,
    product_main_img,
    product_description,
    product_post,
    product_update,
    product_upload,
  } = row
  const [favorit, setFavorit] = useState(false)
  const [buyValue, setBuyValue] = useState('')
  const [BuyName, setBuyName] = useState('')
  const [collectionID, setCollectionID] = useState([]) // 判斷是否有收藏
  const [likeClick, setLikeClick] = useState(false)
  const [allContent, setAllContent] = useState([])
  const changeFavorit = (event) => {
    setFavorit(!favorit)
    setLikeClick(true)
  }
  const productBuyFormSubmit = (event) => {
    event.preventDefault()
  }
  const [cartNumber, setCartNumber] = useState(0)
  useEffect(() => {
    fetch(`${process.env.API_SERVER}/product/cart/read`, {
      method: 'POST',
      body: JSON.stringify({ auth }),
      // auth 為單純的 object 記錄所有會員資料，{auth} 為 key 為 auth 對應值為所有會員資料
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((r) => r.json())
      .then((data) => {
        setCartNumber(data.all.length)
      })
  }, [auth])

  useEffect(() => {
    fetch(process.env.API_SERVER + '/product/' + router.query.pid)
      .then((r) => r.json())
      .then((result) => {
        if (result.success) {
          setRow(result.row)
        } else {
          // alert(router.query.pid)
        }
      })
  }, [router.query])

  useEffect(() => {
    fetch(`${process.env.API_SERVER}/collection/findCollection`, {
      method: 'POST',
      body: JSON.stringify({ memberID: auth.member_id, productID: product_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((r) => r.json())
      .then((data) => {
        setCollectionID(data.all)
      })

    fetch(`${process.env.API_SERVER}/order/getComment`, {
      method: 'POST',
      body: JSON.stringify({ productID: row.product_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((r) => r.json())
      .then((data) => {
        setAllContent(data.all)
      })
  }, [row])

  const cateArray = product_category.split(' ')

  const handleBuy = () => {
    fetch(`${process.env.API_SERVER}/product/cart/add`, {
      method: 'POST',
      body: JSON.stringify({
        member: auth.member_id,
        productID: product_id,
        productNum: buyValue,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((r) => r.json())
      .then((data) => {
        setCartNumber(data.all.length)
      })

    Swal.fire({
      width: 400,
      html: `<h4>已將${product_name}</h4><h4>${buyValue}個加入購物車！</h4>`,
      icon: 'success',
      iconColor: '#FABCBF',
      color: '#674C87',
      confirmButtonColor: '#674C87',
      showConfirmButton: false,
      timer: 3000,
    })

    // router.push('/custom-itinerary/arrange-schedule')
  }

  useEffect(() => {
    if (collectionID.length > 0) {
      setFavorit(true)
    }
  }, [collectionID])

  useEffect(() => {
    if (auth.member_id != 0 && likeClick == true) {
      if (favorit == true) {
        fetch(`${process.env.API_SERVER}/collection/addCollection`, {
          method: 'POST',
          body: JSON.stringify({
            memberID: auth.member_id,
            productID: product_id,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((r) => r.json())
          .then((data) => {})
      } else if (favorit == false) {
        fetch(`${process.env.API_SERVER}/collection/deleteCollection`, {
          method: 'POST',
          body: JSON.stringify({
            memberID: auth.member_id,
            productID: product_id,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((r) => r.json())
          .then((data) => {})
      }
    }
  }, [favorit, likeClick])

  // 將後端傳來的時間格式轉成台灣的時間格式
  function formatDate(dateString) {
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }
    const formattedDate = new Date(dateString).toLocaleString('zh-TW', options)
    return formattedDate
  }

  const goBack = () => {
    router.back()
  }
  return (
    <>
      <div className="PidPageHeader">
        <div className="PageBack" onClick={goBack}>
          {/* <Link href={`/product${goBackQuery}`}> */}
          <TiArrowLeft></TiArrowLeft>
          {/* </Link> */}
        </div>

        <div className="PageCart col-4">
          <div>
            <Link href="./cart">
              <BsCart></BsCart>
              <span className="cartNumber">{cartNumber}</span>
            </Link>
          </div>
        </div>
      </div>
      <section className="productPageMain">
        <div className="productPageMainIMG">
          <Image
            src={`/yun/product-img/pi-${product_id}.png`}
            className="card-img-top productCardImg"
            alt={`${product_id}'s product img`}
            width={400}
            height={400}
            onError={(e) => {
              e.target.srcset = '/yun/product-img/no-img.png'
            }}
          ></Image>
        </div>
        <div className="productPageMainINFO">
          <div className="productCategory">
            {cateArray.map((e, i) => (
              <Fragment key={i}>
                <p>{e}</p>
              </Fragment>
            ))}
          </div>
          <div className="productNameFavorit">
            <h2 className="productName">{product_name}</h2>
            <div
              className="productFavorit"
              onClick={() => {
                changeFavorit()
              }}
            >
              {favorit ? <BsHeartFill></BsHeartFill> : <BsHeart></BsHeart>}
            </div>
          </div>
          <div className="productDescription">{product_description}</div>
          <h4 className="productPrice">{`NT$ ${product_price}`}</h4>
          <div className="productRateIconNum">
            <div className="productRateIcon">
              {Array.from({ length: product_rate }, (e, i) => (
                <AiFillStar key={i} />
              ))}
              {Array.from({ length: 5 - product_rate }, (e, i) => (
                <AiOutlineStar key={i} />
              ))}
            </div>
            <a className="productRateNum">{product_rate}</a>
          </div>
          <div>
            <form className="productBuyForm" onSubmit={productBuyFormSubmit}>
              <InputNumber
                id="BuyProductNum"
                label=""
                name="BuyProductNum"
                placeholder=""
                value={1} // 預設數字
                max={99} // 最大可選數字
                min={1} // 最小可選數字
                step={1} // 右邊箭頭按一次的數字區間
                hideArrows={false} // true：隱藏右側上下箭頭按鈕，false：顯示
                getValue={setBuyValue}
                getName={setBuyName}
                width="input-width-5rem" // 調整 <input> 寬度，到 style.sass 挑選適合的 input-width 前綴 class 或自行新增
                addClassforLabel="" // 如果要在 label 添加 class
                addClassforInput="" // 如果要在 input 添加 class
              ></InputNumber>
              <BtnNormal
                type="submit"
                value="submit"
                btnText="加入購物車"
                addIMGLeft="" // 增加左側圖示 // 使用 react-icon，記得要 import 進入
                addIMGRight="" // 增加右側圖示 // 使用 react-icon，記得要 import 進入
                addClassforButton="btn-dark" //.btn-dark：深色按鈕 .btn-light：淺色按鈕 .btn-white：白色按鈕
                disabled={false} // fase：可點，true：不可點
                target=""
                // bsModle1="#buyModal"
                // bsModle2="modal"
                onClick={handleBuy}
              ></BtnNormal>
            </form>
          </div>
        </div>
      </section>
      <div className="productPageComment">
        {allContent.length > 0 ? (
          allContent.map((e, i) => (
            <Fragment>
              <div className="productPageComment-each">
                <div className="comment-member-img">
                  {/* <Image
                            src={`/face/${e.images}`}
                            className="commentImg"
                            alt={`${e.images}'s persona`}
                            width={100}
                            height={100}
                            onError={(e) => {
                              e.target.srcset = '/yun/product-img/no-img.png';
                            }}
                        ></Image> */}
                  <Image
                    src={
                      auth.images
                        ? `http://localhost:3002/face/${e.images}`
                        : persona
                    }
                    // src={persona}
                    width={80}
                    height={80}
                    className="commentImg"
                    alt={`${e.images}'s persona`}
                  ></Image>
                </div>
                <div className="comment-member-content">
                  <div className="comment-member-header">
                    <p className="comment-member-name">{e.member_name}</p>
                    <div className="comment-comment-rating">
                      {Array.from({ length: e.comment_rating }, (e, i) => (
                        <AiFillStar key={i} />
                      ))}
                      {Array.from({ length: 5 - e.comment_rating }, (e, i) => (
                        <AiOutlineStar key={i} />
                      ))}
                    </div>
                  </div>
                  <p className="comment-comment-content">{e.comment_content}</p>
                  <p className="comment-comment-time small-font">
                    {formatDate(e.comment_time)}
                  </p>
                </div>
              </div>
            </Fragment>
          ))
        ) : (
          <p>目前無評論！</p>
        )}
      </div>
    </>
  )
}

ProductItem.getLayout = function (page) {
  return <ProductPidPageLayout>{page}</ProductPidPageLayout>
}
