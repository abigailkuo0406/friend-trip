import React, { useState, useEffect } from 'react'
import MyOption from './option'

export default function SelectOption({
  id,
  name = '',
  selectedDefault,
  valueGroup = [],
  optionGroup = [],
  label = '',
  getValue, //取得的 value
  getName,
  width,
  addClassforLabel,
  addClassforSelect,
  addClassforOption,
}) {
  const [errorMessage, setErrorMessage] = useState('\u00A0') // 錯誤訊息用 // \u00A0 為會佔空間的空白，如果設空字串排版會爛掉

  useEffect(() => {
    getValue(selectedDefault)
    getName(name)
  }, []) // 在第一次渲染時，如有預設 value 將 value 和 name 先傳回去，避免預設值會讀不到
  const handleChange = (event) => {
    console.log('選取了：', event.target.value)
    getValue(event.target.value)
    getName(event.target.name)
  }
  useEffect(() => {
    getValue(selectedDefault)
    getName(name)
    
  }, [selectedDefault]) 
  

  return (
    <div className="select-section">
      <label htmlFor={id} className={`${addClassforLabel} section-label`}>
        {label}
      </label>
      <div className={`${width} custom-select`}>
        <select
          id={id}
          name={name}
          aria-label="Default select example"
          onChange={handleChange}
          className={`${addClassforSelect} w-100 input-text input-select`}
        >
          {valueGroup.map((element, index) => (
            <MyOption
              selectedDefault={selectedDefault}
              key={index}
              value={element}
              option={optionGroup[index]}
              addClassforOption={addClassforOption}
            ></MyOption>
          ))}
        </select>
      </div>
      <div className="input-error">{errorMessage}</div>
    </div>
  )
}
