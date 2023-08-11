import React, { useState, useEffect, useCallback } from 'react'
import InputCheckbox from './input-checkbox'

export default function InputCheckboxGroup({
  name = '',
  label = '',
  idGroup = [],
  valueGroup = [],
  labelGroup = [],
  checkedValue = [],
  getValue=()=>{},
  getName=()=>{},
  addClassforDiv = '',
  addClassforTitleLabel = '',
  addClassforEachLabel = '',
  addClassforInput = '',
  errorText="\u00A0"
}) {
  const [errorMessage, setErrorMessage] = useState(errorText) // 錯誤訊息用 // \u00A0 為會佔空間的空白，如果設空字串排版會爛掉
  
  if (idGroup.length != valueGroup.length) {
    console.error('設定 InputCheckbox 時 idGroup 或是 valueGroup 錯誤')
  }

  useEffect(() => {
    getValue(checkedValue)
    getName(name)
  }, [])
  useEffect(() => {
    setErrorMessage(errorText)
  }, [errorText])
  const [inputValue1, setInputValue1] = useState(checkedValue)

  useEffect(() => {
    if (inputValue1.length > 0) {
      getValue(inputValue1)
    } else if (inputValue1.length == 0) {
      getValue([false])
    }
  }, [inputValue1])

  return (
    <div className={`${addClassforDiv} input-checkbox-section`}>
      <label className={`${addClassforTitleLabel} section-label`}>
        {label}
      </label>
      <div className="d-flex">
        {idGroup.map((element, index) => {
          return (
            <InputCheckbox
              key={index}
              name={name}
              id={element}
              value={valueGroup[index]}
              label={labelGroup[index]}
              getEachValue={setInputValue1}
              getName={getName}
              checkedValue={inputValue1}
              addClassforEachLabel={addClassforEachLabel}
              addClassforInput={addClassforInput}
            ></InputCheckbox>
          )
        })}
      </div>
      <div className="input-error">{errorMessage}</div>
    </div>
  )
}
