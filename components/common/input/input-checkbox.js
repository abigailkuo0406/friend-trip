import React, { useState, useEffect } from 'react'

export default function InputCheckbox({
  id = '',
  name = '',
  value = '',
  label = '',
  getEachValue=()=>{},
  getName=()=>{},
  getLabel=()=>{},
  checkedValue = [],
  addClassforEachLabel='',
  addClassforInput='',
}) {
  const isChecked = checkedValue.includes(value)
  const [inputValue1, setInputValue1] = useState(isChecked)
  const [inputValue2, setInputValue2] = useState()
  const handleClick = (event) => {
    setInputValue1(!inputValue1)
    setInputValue2(event.target.value)
  }
  useEffect(() => {
    // 點選
    if (inputValue1) {
      getEachValue(
        [...checkedValue, inputValue2].filter((e) => e !== undefined)
      )
    }
    // 取消點選
    else if (!inputValue1) {
      getEachValue(
        checkedValue.filter((e) => e != inputValue2 && e != undefined)
      )
    }
  }, [inputValue1])

  return (
    <div className="d-flex radio-seciton">
      <input
        type="checkbox"
        name={name}
        id={id}
        value={value}
        onChange={handleClick}
        checked={isChecked}
        className={`${addClassforInput}`}
      ></input>
      <label htmlFor={id} className={`${addClassforEachLabel}`}>
      {label}
      </label>
    </div>
  )
}
