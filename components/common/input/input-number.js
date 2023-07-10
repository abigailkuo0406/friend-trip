import React, { useState, useEffect } from 'react'
import { BsCaretUpFill, BsCaretDownFill } from 'react-icons/bs'

export default function InputNumber({
  id,
  name = '',
  max = 1,
  min = 1000,
  value,
  placeholder,
  label = '',
  valueDefault,
  getValue,
  getName,
  addClassforLabel,
  addClassforInput,
}) {
  const [errorMessage, setErrorMessage] = useState('\u00A0') // 錯誤訊息用 // \u00A0 為會佔空間的空白，如果設空字串排版會爛掉
  const [addClassforInputState, setAddClassforInputState] =
    useState(addClassforInput)
  useEffect(() => {
    getValue(value)
    getName(name)
  }, []) // 在第一次渲染時，如有預設 value 將 value 和 name 先傳回去，避免預設值會讀不到
  const [inputValue, setInputValue] = useState(value)
  const handleChange = (event) => {
    setAddClassforInputState(addClassforInput)
    setErrorMessage('\u00A0')
    setInputValue(event.target.value)
    getValue(event.target.value)
    getName(event.target.name)
  }
  const handleBlur = (event) => {
    if (event.target.value > max) {
      setAddClassforInputState((addClassforInput += ' input-error-border'))
      setErrorMessage(`可選的最大數為：${max}`)
      setInputValue(max)
    } else if (event.target.value < min) {
      setAddClassforInputState((addClassforInput += ' input-error-border'))
      setErrorMessage(`可選的最小數為：${min}`)
      setInputValue(min)
    }
  }
  if (valueDefault > max) {
    valueDefault = max
  } else if (valueDefault < min) {
    valueDefault = min
  }

  return (
    <div className="select-section">
      <label className={`${addClassforLabel} section-label`}>{label}</label>
      <div className="custom-number">
        <input
          id={id}
          name={name}
          max={max}
          min={min}
          placeholder={placeholder}
          className={`${addClassforInputState} input-text input-select input-number`}
          value={inputValue}
          type="number"
          onBlur={handleBlur}
          onChange={handleChange}
        ></input>
      </div>
      <div className="input-error">{errorMessage}</div>
    </div>
  )
}
