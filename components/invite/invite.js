import React from 'react'
import Image from 'next/image'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { useState } from 'react'

export default function Invite(props) {
  const [invites, setInvites] = useState({
    Name: '',
  })
  console.log(invites)
  return (
    <>
      <li>
        {/* <Image
                        src={}
                    /> */}
        <p>{props.name}</p>

        <button
          onClick={() => {
            setInvites({ Name: props.name })
          }}
        >
          <AiOutlinePlusCircle />
        </button>
      </li>
    </>
  )
}
