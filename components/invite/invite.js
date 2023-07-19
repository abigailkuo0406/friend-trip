import React, { useEffect } from 'react'
import Image from 'next/image'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { useState } from 'react'

export default function Invite({ name }) {
  const [invites, setInvites] = useState()
  console.log('1:' + invites)

  const handleClick = () => {
    setInvites(name)
  }

  return (
    <>
      <li>
        <Image
          src={`http://localhost:3002/restImg/${restImg}`}
          className={`rounded-start ${styles.img1}`}
          width={200}
          height={200}
        />
        <p>{name}</p>

        <button
          onClick={() => {
            handleClick()
          }}
        >
          <AiOutlinePlusCircle />
        </button>
      </li>
    </>
  )
}
