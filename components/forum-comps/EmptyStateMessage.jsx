import React from 'react'
import styles from './emptyMsg.module.css'

function EmptyStateMessage() {
  return (
    <div className={styles.container}>
      <h1>您尚未發表，請新增文章</h1>
    </div>
  )
}

export default EmptyStateMessage
