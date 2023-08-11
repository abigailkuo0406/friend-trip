import React from 'react'
import noPost from '@/public/img/forum-img/noPostAdd.jpg'
import Image from 'next/image'

function EmptyStateMessage() {
  return (
    <>
      <Image className='img-fluid' src={noPost} alt="No-Post-Empty" />
    </>
  )
}

export default EmptyStateMessage