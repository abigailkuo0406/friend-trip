import React, { useState } from 'react'
import { useEffect } from 'react'

export default function InputDate({
  id = '',
  name = '',
  value = '',
  minDate = '',
  maxDate = '',
  label = '',
  width,
  getValue,
  getName,
  addClassforInput = '',
  addClassforLabel = '',
  addClassforDiv,
}) {
  // 定義預設日期
  const today = new Date()
  const nowYear = today.getFullYear()
  const nowMonth =
    today.getMonth() + 1 < 10
      ? `0${today.getMonth() + 1}`
      : today.getMonth() + 1
  const nextMonth =
    today.getMonth() + 2 < 10
      ? `0${today.getMonth() + 2}`
      : today.getMonth() + 2
  const nowDate = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate()

  // 定義起始日期為當日
  const nowDay = `${nowYear}-${nowMonth}-${nowDate}`

  // 定義結束日期為一個月後
  const maxDay =
    nextMonth > 12
      ? `${nowYear + 1}-01-${nowDate}`
      : `${nowYear}-${nextMonth}-${nowDate}`

  const [inputValue1, setInputValue1] = useState(value)
  useEffect(() => {
    getValue(value)
    getName(name)
  }, []) // 在第一次渲染時，如有預設 value 將 value 和 name 先傳回去，避免預設值會讀不到

  const handleChange = (e) => {
    setInputValue1(e.target.value)
    getValue(e.target.value)
    getName(e.target.name)
  }
  return (
    <div className={`${addClassforDiv} input-radio-section`}>
      <label htmlFor={id} className={`${addClassforLabel} section-label`}>
        {label}
      </label>
      <input
        type="date"
        name={name}
        id={id}
        value={inputValue1}
        getValue={getValue}
        getName={getName}
        min={minDate ? minDate : nowDay}
        max={maxDate ? maxDate : maxDay}
        className={`${width} input-text`}
        onChange={handleChange}
      />
    </div>
  )
}
