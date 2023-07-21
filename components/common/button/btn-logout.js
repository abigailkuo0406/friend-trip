import React from 'react'

export default function BtnLogout({ onclick = () => {}, text = '' }) {
  //
  return (
    <button
      id="Log-Out-Btn"
      type="button"
      className="btn btn-light"
      onClick={onclick}
    >
      {text}
    </button>
  )
}