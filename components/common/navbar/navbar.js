import React from 'react'
import Image from 'next/image'
import logo from '@/assets/logo/FriendTrip-Logo.png'
import InputSearchBar from '@/components/common/input/input-search-bar'
import BtnLogout from '@/components/common/button/btn-logout'
import AuthContext from '@/context/AuthContext'
import { useContext } from 'react'

export default function Navbar() {
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

          <InputSearchBar></InputSearchBar>
          {auth.member_id ? (
            <BtnLogout
              onclick={() => {
                logout()
              }}
              text="登出"
            ></BtnLogout>
          ) : (
            <Link href="./login/login-in-web">
              <BtnLogout text="登入"></BtnLogout>
            </Link>
          )}
        </div>
      </header>
    </>
  )
}
