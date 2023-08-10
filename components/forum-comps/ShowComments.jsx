import React from 'react'
import Image from 'next/image'

function ShowComments({ comments, post_id }) {
  return (
    <ul>
      {comments
        .filter((i) => i.post_id == post_id)
        .map((item, i) => {
          const pathOfAvatarOfCommenter =
            'http://localhost:3002/face/' + item.images
          return (
            <li key={i} className="d-flex align-items-center mb-3">
              <Image
                className="rounded-circle me-3"
                alt="Avatar of the commenter"
                src={pathOfAvatarOfCommenter}
                width={50}
                height={50}
              />
              <span className="me-3">{item.member_name + ' : '}</span>
              {item.content}
            </li>
          )
        })}
    </ul>
  )
}

export default ShowComments
