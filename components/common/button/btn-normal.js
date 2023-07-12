import React from 'react'

export default function BtnNormal({
  type = 'button',
  value = 'button',
  btnText = '按鈕',
  addIMGLeft = '',
  addIMGRight = '',
  addClassforButton = '',
  disabled = false,
}) {
  return (
    <button
      type={type}
      value={value}
      className={`btn ${addClassforButton}`}
      disabled={disabled}
    >
      {addIMGLeft}
      <span>{btnText}</span>
      {addIMGRight}
    </button>
  )
}
