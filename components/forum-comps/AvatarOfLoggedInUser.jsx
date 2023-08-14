import React, { useContext } from 'react'
import Image from 'next/image'
import AuthContext from '@/context/AuthContext'

function AvatarOfLoggedInUser() {
  const { auth } = useContext(AuthContext)
  const avatarOfLoggedInUser = `http://localhost:3002/face/${auth.images}`
  // console.log('LoggedUser: ', avatarOfLoggedInUser)
  return (
    <div className="d-flex align-items-center">
      <div
        style={{
          // width: '50px',
          // height: '50px',
          overflow: 'hidden',
          position: 'relative',
          borderRadius: '50%',
        }}
      >
        <img
          // className="rounded-circle m-1 img-fluid"
          alt="Author_of_the_post"
          src={avatarOfLoggedInUser}
          width={50}
          height={50}
          // fill
          // objectFit="cover"
        />
      </div>
    </div>
  )
}

export default AvatarOfLoggedInUser
