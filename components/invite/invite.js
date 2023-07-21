import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { InviteContext } from '@/pages/restaurant/[rid]'

export default function Invite({ friendName, img, onValueChange }) {
  // const { invites, setInvites } = useContext(InviteContext)
  const [inviteFriend, setInviteFriend] = useState('')
  const handleClick = (e) => {
    console.log('1111:',e)
    setInviteFriend(friendName)
  }
  useEffect(() => {
    onValueChange(inviteFriend)
  }, [inviteFriend])
  return (
    <>
      <div className="my-4">
        <div className="d-flex ">
          <Image src={img} className={`rounded-start`} width={50} height={50} />
          <p className="mx-5">{friendName}</p>

          <button onClick={handleClick}>
            <AiOutlinePlusCircle />
          </button>
        </div>
      </div>
    </>
  )
}
