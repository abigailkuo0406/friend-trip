import React, { useState, useEffect } from 'react'

export default function InputRadio({
  id = '',
  name = '',
  value = '',
  label = '',
  getValue,
  getName,
  getLabel,
  checked = '',
  killchecked,
  addClassforEachLabel,
  addClassforInput,
}) {
  const [inputValue, setInputValue] = useState(killchecked)

  const handleClick = (event) => {
    setInputValue(undefined)
    killchecked(inputValue)
    // console.log(event.target.value);
    getValue(event.target.value)
    getName(event.target.name)
    getLabel(label)
  }

  // console.log('C: ', checked + ' ，V: ', value)

  // if (checked == value) {
  //   checked = true
  // } else {
  //   checked = false
  // }
  // console.log('Final: ', checked)
  return (
    <div className="d-flex radio-seciton">
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        onClick={handleClick}
        checked={checked == value ? true : undefined} // 只在初始渲染時設置 checked 屬性，後續渲染時移除 checked 屬性
        className={`${addClassforInput}`}
      ></input>
      <label htmlFor={id} className={`${addClassforEachLabel}`}>
        {label}
      </label>
    </div>
  )
}
