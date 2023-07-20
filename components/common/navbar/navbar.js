import React from 'react'
import Image from 'next/image'
import logo from '@/assets/logo/FriendTrip-Logo.png'
import InputSearchBar from '@/components/common/input/input-search-bar'
import BtnLogout from '@/components/common/button/btn-logout'

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
          <BtnLogout></BtnLogout>
        </div>
      </header>
    </>
  )
}
