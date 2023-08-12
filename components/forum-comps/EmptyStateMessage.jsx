import React from 'react'
import noPost from '@/public/img/forum-img/noPostAdd.jpg'
import Image from 'next/image'
import styles from './emptyMsg.module.css'

function EmptyStateMessage() {
  return (
    <div className={styles.container}>
      <h1>您尚未發表，請新增文章</h1>
    </div>
  )
}

export default EmptyStateMessage
