import React from 'react'
import Image from 'next/image'

function AvatarAndNameOfCommentCreator({ avatarOfCommentCreator, authorOfTheComment }) {
  const avatarPicPath='http://localhost:3002/face/'+avatarOfCommentCreator
  return (
    <div className="d-flex align-items-center">
      <div
        style={{
          width: '50px',
          height: '50px',
          overflow: 'hidden',
          position: 'relative',
          borderRadius: '50%',
        }}
      >
        <Image
          // className="rounded-circle m-1 img-fluid"
          alt="Author_of_the_comment"
          src={avatarPicPath}
          // width={50}
          // height={50}
          fill
          objectFit="cover"
        />

      </div>
      <p className="m-1">{authorOfTheComment}</p>
    </div>
  )
}

export default AvatarAndNameOfCommentCreator
