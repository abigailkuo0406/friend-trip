import React, { useState, useEffect, Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/assets/logo/FriendTrip-Logo.png'
import InputSearchBar from '@/components/common/input/input-search-bar'
import BtnLogout from '@/components/common/button/btn-logout'
import AuthContext from '@/context/AuthContext'
import { useContext } from 'react'
import { useRouter } from 'next/router'
import { VscBellDot, VscBell } from 'react-icons/vsc'
import UnacceptFriend from '@/components/friend/friend-notify'
import Btn from '@/components/common/button/btn-normal'



export default function Navbar() {
  const { auth, setAuth, logout } = useContext(AuthContext)
  const router = useRouter()
  const [searchBarComponent, setSearchBarComponent] = useState(<Fragment></Fragment>)
  const [getProductSearch, setGetProductSearch] = useState("")
  const [getRandom, setGetRandom] = useState(0)
  useEffect(() => {
    console.log("XXX", router.basePath)
  }, [router])
  useEffect(() => {
    setSearchBarComponent(<Fragment></Fragment>)
    switch (router.pathname) {
      case "/product":
        setSearchBarComponent(<Fragment><InputSearchBar localstorage="searchProduct" setGetSearch={setGetProductSearch} setGetRandom={setGetRandom} placeholder="搜尋商品"></InputSearchBar></Fragment>)
        break;
      case "/restaurant":
        setSearchBarComponent(<Fragment><InputSearchBar localstorage="searchProduct" setGetSearch={setGetProductSearch} setGetRandom={setGetRandom} placeholder="搜尋餐廳"></InputSearchBar></Fragment>)
        break;
    }
  }, [router.asPath])
  useEffect(() => {
    console.log("abc123")
    if (getProductSearch != "" && router.pathname == '/product' && router.query.page == undefined) {
      console.log("aaaaaaaaaaaaaaaaaa")
      router.push({
        query: {
          ...router.query,
          "keyword": `${getProductSearch}`,
        },
      })
    }
    else if (getProductSearch != "" && router.pathname == '/product' && router.query.page != undefined) {
      console.log("bbbbbbbbbbbbbbbbbbb：", getProductSearch)
      router.push({
        query: {
          "keyword": `${getProductSearch}`,
          "page": "1",
        },
      })
    }

  }, [getProductSearch, getRandom, router.pathname])

  // 顯示待確認邀請的好友數
  const [unaccepts, setUnAccepts] = useState({
    totalUnaccepts: 0,
    rows2: []
  })

  // 控制重新fetch
  const [item, setItem] = useState(true)
  // console.log('navbar層的itemState', item)
  useEffect(() => {
    if (unaccepts.totalUnaccepts <= 0) return
    !item && setItem(true)
  }, [item])

  useEffect(() => {
    if (!auth) return
    fetch(`http://localhost:3002/friends`, {
      method: 'POST',
      body: JSON.stringify({
        memberID: auth.member_id,
        acceptState: 0
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }
    )
      .then((r) => r.json())
      .then((data) => {
        setUnAccepts(data)
      })
      .catch((error) => console.error("Error:", error))

  }, [auth, item])

  // 控制鈴鐺點擊通知視窗開啟或關閉
  const [notifyModal, setNotifyModal] = useState(false)
  const openNotify = () => {
    !notifyModal && setNotifyModal(true)
    notifyModal && setNotifyModal(false)

  }

  return (
    <>
      <header className="position-sticky top-0 p-3">
        <div className="container position-relative d-flex align-items-center justify-content-between">
          <a
            id="Logo"
            className="logo text-center radius20px"
            href="/"
            title="FriendTrip"
          >
            <Image src={logo} alt="FriendTrip Logo"></Image>
          </a>

          {searchBarComponent}
          {notifyModal &&
            <div className='position-absolute top-100 end-0'>
              <UnacceptFriend
                unaccepts={unaccepts.rows2}
                items={setItem}
              />
            </div>
          }

          <div className='d-flex align-items-center justify-content-between'>


            {unaccepts.totalUnaccepts > 0 ?

              <button type="button" class="position-relative btndefault me-3" onClick={openNotify}>
                <VscBell className='fs-4 bell' />
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bellHint">{unaccepts.totalUnaccepts}<span class="visually-hidden">unread messages</span></span>
              </button>
              :
              <button type="button" class="position-relative btndefault me-3" onClick={openNotify}>
                <VscBell className='fs-4 bell' />

              </button>

            }
            {auth.member_id ? (
              <BtnLogout
                onclick={() => {
                  logout()
                }}
                text="登出"
              ></BtnLogout>
            ) : (
              <Link href="../login">
                <BtnLogout text="登入"></BtnLogout>
              </Link>
            )}

          </div>

        </div>
      </header>
    </>
  )
}
