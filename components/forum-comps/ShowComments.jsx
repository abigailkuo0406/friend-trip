import React from 'react'
import Image from 'next/image'

function ShowComments({ comments, post_id }) {
  return (
    <ul>
      {comments
        .filter((i) => i.post_id == post_id)
        .map((item) => {
          const pathOfAvatarOfCommenter =
            'http://localhost:3002/face/' + item.images
          return (
            <li className="d-flex">
              <Image className='rounded-circle'
                alt="Avatar of the commenter"
                src={pathOfAvatarOfCommenter} width={50} height={50}
              />
              {item.member_name + ' : '}
              {item.content}
            </li>
          )
        })}
    </ul>
  )
}

export default ShowComments
