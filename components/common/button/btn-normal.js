import React from 'react'
// 要包 link
export default function BtnNormal({
  type = 'button',
  value = 'button',
  btnText = '按鈕',
  addIMGLeft = '',
  addIMGRight = '',
  addClassforButton = 'btn-dark',
  disabled = false,
  onClick,
  href = '',
  target = '',
  bsModle1 = '',
  bsModle2 = '',
  bsModl3 = ''
}) {
  //
  return (
    <a
      href={href ? href : undefined}
      target={`${target}` ? `${target}` : undefined}
    >
      <button
        type={type}
        value={value}
        className={`btn ${addClassforButton}`}
        disabled={disabled}
        onClick={onClick}
        data-bs-target={bsModle1}
        data-bs-toggle={bsModle2}
        data-bs-dismiss={bsModl3}
      >
        {addIMGLeft}
        <span>{btnText}</span>
        {addIMGRight}
      </button>
    </a>
  )
}
