import React, { useState, useEffect, Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/assets/logo/FriendTrip-Logo.png'
import InputSearchBar from '@/components/common/input/input-search-bar'
import BtnLogout from '@/components/common/button/btn-logout'
import AuthContext from '@/context/AuthContext'
import { useContext } from 'react'
import { useRouter } from 'next/router'


export default function Navbar() {
  const { auth, setAuth, logout } = useContext(AuthContext)
  const router = useRouter()
  const [searchBarComponent, setSearchBarComponent] = useState(<Fragment></Fragment>)
  const [getProductSearch, setGetProductSearch] = useState("")
  const [getRandom, setGetRandom] = useState(0)
  useEffect(()=>{
    console.log("XXX", router.basePath)
  }, [router])
  useEffect(()=>{
    setSearchBarComponent(<Fragment></Fragment>)
    switch(router.pathname){
      case "/product":
        setSearchBarComponent(<Fragment><InputSearchBar localstorage="searchProduct" setGetSearch={setGetProductSearch} setGetRandom={setGetRandom} placeholder="搜尋商品"></InputSearchBar></Fragment>)
        break;
    }
  },[router.asPath])
  useEffect(()=>{
    if(getProductSearch != "" && router.pathname == '/product'){
    router.push({
            query: {
              ...router.query,
              "keyword": `${getProductSearch}`,
            },
          })}
  },[getProductSearch, getRandom, router.asPath])
  return (
    <>
      <header className="position-sticky top-0 p-3">
        <div className="container d-flex align-items-center justify-content-between">
          <a
            id="Logo"
            className="logo text-center radius20px"
            href="/"
            title="FriendTrip"
          >
            <Image src={logo} alt="FriendTrip Logo"></Image>
          </a>

          {searchBarComponent}
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
      </header>
    </>
  )
}
