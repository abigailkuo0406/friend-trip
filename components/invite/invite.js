import React, { useContext, useEffect } from 'react'
import Image from 'next/image'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { useState } from 'react'
import { InviteContext } from '@/pages/restaurant/[rid]'

export default function Invite({ name, img,testfunc}) {
  // const { invites, setInvites } = useContext(InviteContext)
  const handleClick = () => {
    // setInvites(name)
  }
  return (
    <>
      <div className="my-4">
        <div className="d-flex ">
          <Image src={img} className={`rounded-start`} width={50} height={50} />
          <p className="mx-5">{name}</p>

          <button
            onClick={
              // handleClick()
              testfunc
            }
          >
            <AiOutlinePlusCircle />
          </button>
        </div>
      </div>
    </>
  )
}
