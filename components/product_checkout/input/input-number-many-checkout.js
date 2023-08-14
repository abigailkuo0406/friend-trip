import React, { useState, useEffect, useRef } from 'react'

export default function InputNumberMany({
  id,
  name = '',
  value = [],
  inputNumber = 1,
  maxLength = 1,
  label = '',
  getValue,
  getName,
  widthDiv,
  widthInput="",
  middleText = '-',
  addClassforLabel,
  addClassforInput,
  submitted,
  clickSubmitted,
  required = false,
  setError,
  setErrorTracker,
  getValueError=()=>{},
  inputError='',
}) {
  const [errorMessage, setErrorMessage] = useState('\u00A0') // 錯誤訊息用 // \u00A0 為會佔空間的空白，如果設空字串排版會爛掉
  const [addClassforInputState, setAddClassforInputState] = useState(addClassforInput)
  useEffect(() => {
    getValue(value)
    getName(name)
  }, []) // 在第一次渲染時，如有預設 value 將 value 和 name 先傳回去，避免預設值會讀不到

  const [typing, setTyping] = useState(value)
  useEffect(() => {
    
  }, [value])


  useEffect(() => {
    const newInputs = [...inputs] // 將存有所有值的 Array 做參考，避免直接修改原本的 Array
    const done = newInputs.every((ele, val) => {
      return ele.length == maxLength
    })
    if (done) {
      var doneText = newInputs.join('')
      setAddClassforInputState(addClassforInput)
      setErrorMessage('\u00A0')
      setError(false)
      setErrorTracker('')
      getValue(doneText)
      getName(name)
    } else if (done == false && submitted == false) {
      setAddClassforInputState(addClassforInput)
      setErrorMessage('\u00A0')
      setErrorTracker(id)
      setError(true)
    } else if (done == false && submitted == true) {
      // 判斷第一個不符合條件的 input 來 focus
      var firstError = newInputs.findIndex((v, i) => {
        return newInputs[i].length < maxLength
      })
      inputRefs.current[firstError].focus()
      setAddClassforInputState((addClassforInput += ' input-error-border'))
      setErrorMessage('請填寫完整的數字')
      setErrorTracker(id)
      setError(true)
    }
  }, [clickSubmitted]) // 每提交一次表單渲染一次
  const inputRefs = useRef([]) // 存取可變的值
  // 處理每個輸入變更的函數，會帶入當下輸入的 key 的 index 和所輸入的值
  const handleInputChange = (i, v) => {
    const newInputs = [...inputs] // 將存有所有值的 Array 做參考，避免直接修改原本的 Array
    newInputs[i] = v // 將當下輸入的 element(number) 存入 Array 當下的 index 內
    var nextFocus = -1
    if (v.length === maxLength && i < inputs.length - 1) {
      // 抓取比輸入中的 index 還後面的 index，並且小於數目
      nextFocus = newInputs.findIndex((ele, index) => {
        return index > i && ele.length < maxLength
      })
      // 如果輸入時找
      if (nextFocus > -1) {
        inputRefs.current[nextFocus].focus() // 當長度達到預設長度，以及，在倒數第二格時，換下一個 index 時，focus
      }
    } else if (v.length === maxLength && i == inputs.length - 1) {
      nextFocus = newInputs.slice(0, i).findIndex((ele, index) => {
        return ele.length < maxLength
      })
      // 如果輸入時找
      if (nextFocus > -1) {
        inputRefs.current[nextFocus].focus() // 當長度達到預設長度，以及，在倒數第二格時，換下一個 index 時，focus
      }
    } else if (v.length > maxLength) {
      // 當長度超過預設長度時，將數字轉為 Array 刪除多餘的，再轉回字串
      v = v.split('')
      v.splice(maxLength)
      v = v.join('')
      newInputs[i] = v
    }

    // 判斷是否填滿了
    const done = newInputs.every((ele, val) => {
      return ele.length == maxLength
    })

    const outputArray = [];
    newInputs.forEach(item => {
      const characters = item.split('');
      outputArray.push(...characters.map(Number));
    });
    

    setInputs(newInputs)
    getValueError(outputArray)
    if (done) {
      var doneText = newInputs.join('')
      setAddClassforInputState(addClassforInput)
      setErrorMessage('\u00A0')
      setError(false)
      setErrorTracker('')
      getValue(doneText)
      getName(name)
    } else if (done == false && submitted == false) {
      setAddClassforInputState(addClassforInput)
      setErrorMessage('\u00A0')
      setErrorTracker(id)
      setError(true)
    } else if (done == false && submitted == true) {
      setAddClassforInputState((addClassforInput += ' input-error-border'))
      setErrorMessage('請填寫完整的數字')
      setErrorTracker(id)
      setError(true)
    }
  }

  const [inputValue, setInputValue] = useState(value)
  const blankArray = []
  for (let i = 0; i < inputNumber; i++) {
    if(value.length == inputNumber*maxLength){
    blankArray.push(value.match(/(.{4})/g)[i])
    } else (
      blankArray.push('')
    )
  }
  const [inputs, setInputs] = useState(blankArray)

  useEffect(()=>{
    if (inputError != '') {
      setAddClassforInputState((addClassforInput += ' input-error-border'))
      setErrorMessage(inputError)
    } else {
      setAddClassforInputState(addClassforInput)
      setErrorMessage('\u00A0') // \u00A0 為會佔空間的空白，如果設空字串排版會爛掉
    }
  },[inputError])

  

  return (
    <div className="select-section">
      <label className={`${addClassforLabel} section-label`}>{label}</label>
      <div className={`${widthDiv} input-many`}>
        {inputs.map((element, index) => (
          <React.Fragment key={index}>
            <input
              minLength={5}
              key={index}
              id={index == 0 ? `${id}` : `${id}${index}`}
              name={name}
              value={inputs[index]}
              className={`${widthInput} ${addClassforInputState} hide-arrows input-text input-select input-number ${addClassforInputState}`}
              // value={inputValue}
              type="number"
              onChange={(e) => handleInputChange(index, e.target.value)}
              ref={(el) => (inputRefs.current[index] = el)}
              required={required}
            ></input>
            {index !== inputs.length - 1 && (
              <a className="middleText">{middleText}</a>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="input-error">{errorMessage}</div>
    </div>
  )
}
