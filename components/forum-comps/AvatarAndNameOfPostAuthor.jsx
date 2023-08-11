import React from 'react'
import Image from 'next/image'

function AvatarAndNameOfPostAuthor({ avatarOfPostAuthor, authorOfThePost }) {
  const avatarPicPath = 'http://localhost:3002/face/' + avatarOfPostAuthor
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
          alt="Author_of_the_post"
          src={avatarPicPath}
          // width={50}
          // height={50}
          fill
          objectFit="cover"
        />
      </div>
      <p className="m-1">{authorOfThePost}</p>
    </div>
  )
}

export default AvatarAndNameOfPostAuthor
