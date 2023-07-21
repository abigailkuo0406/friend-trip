import React from 'react'
import Image from 'next/image'
import { BiSearchAlt } from 'react-icons/bi'
import logo from '@/assets/logo/FriendTrip-Logo.png'
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

          <div id="Search-Bar" className="input-group w-50">
            <input
              type="text"
              className="form-control input-text"
              placeholder="探索新發現！"
              aria-label="探索新發現！"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              <BiSearchAlt />
            </button>
          </div>
          <BtnLogout></BtnLogout>
        </div>
      </header>
    </>
  )
}
