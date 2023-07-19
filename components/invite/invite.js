import React, { useEffect } from 'react'
import Image from 'next/image'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { useState } from 'react'

export default function Invite({ name, img }) {
  const [invites, setInvites] = useState()
  console.log('1:' + invites)

  const handleClick = () => {
    setInvites(name)
  }

  return (
    <>
      <div className="my-4">
        <div className="d-flex ">
          <Image src={img} className={`rounded-start`} width={50} height={50} />
          <p className='mx-5'>{name}</p>

          <button
            onClick={() => {
              handleClick()
            }}
          >
            <AiOutlinePlusCircle />
          </button>
        </div>
      </div>
    </>
  )
}
