import React, { useState, useEffect } from 'react'
import InputRadio from './input-radio'

export default function InputRadioGroup({
  name = '',
  label = '',
  idGroup = [],
  valueGroup = [],
  labelGroup = [],
  getValue,
  getName,
  getLabel,
  checked,
  addClassforTitleLabel,
  addClassforEachLabel,
  addClassforInput,
}) {
  const [errorMessage, setErrorMessage] = useState('\u00A0') // 錯誤訊息用 // \u00A0 為會佔空間的空白，如果設空字串排版會爛掉

  if (idGroup.length != valueGroup.length) {
    console.error('設定 InputRadio 時 idGroup 或是 valueGroup 錯誤')
  }
  // 抓取預設 checked 的 label
  var defaultLabel = ''
  if (checked && labelGroup.length > 0) {
    valueGroup.forEach((e, i) => {
      if (e == checked) {
        defaultLabel = labelGroup[i]
      }
    })
  }
  // 在第一次渲染時，如有預設 value 將 value 和 name 和 label 先傳回去，避免預設值會讀不到
  useEffect(() => {
    getValue(checked)
    getName(name)
    getLabel(defaultLabel)
  }, [])

  const [inputValue1, setInputValue1] = useState(checked)

  return (
    <div className="input-radio-section d-flex">
      <label className={`${addClassforTitleLabel} section-label`}>
        {label}
      </label>
      <div className="d-flex">
        {idGroup.map((element, index) => {
          return (
            <InputRadio
              key={index}
              name={name}
              id={element}
              value={valueGroup[index]}
              label={labelGroup[index]}
              getValue={getValue}
              getName={getName}
              getLabel={getLabel}
              checked={inputValue1}
              killchecked={setInputValue1}
              addClassforEachLabel={addClassforEachLabel}
              addClassforInput={addClassforInput}
            ></InputRadio>
          )
        })}
      </div>
      <div className="input-error">{errorMessage}</div>
    </div>
  )
}
