import React, { useState, useEffect } from 'react'
import InputText from '@/components/common/input/input-text'

export default function InputTextDouble({
  id1 = '',
  name1 = '',
  label1,
  width1,
  addClassforLabel1,
  addClassforInput1,
  placeholder1 = '',
  value1,
  getValue1,
  getName1,
  required1 = false,
  id2 = '',
  name2 = '',
  label2,
  width2,
  addClassforLabel2,
  addClassforInput2,
  placeholder2 = '',
  value2,
  getValue2,
  getName2,
  required2 = false,
}) {
  return (
    <div className="input-text-double-section">
      <InputText
        id={id1}
        name={name1}
        label={label1}
        width={width1}
        addClassforLabel={addClassforLabel1}
        addClassforInput={addClassforInput1}
        placeholder={placeholder1}
        value={value1}
        getValue={getValue1}
        getName={getName1}
        required={required1}
      ></InputText>
      <InputText
        id={id2}
        name={name2}
        label={label2}
        width={width2}
        addClassforLabel={addClassforLabel2}
        addClassforInput={addClassforInput2}
        placeholder={placeholder2}
        value={value2}
        getValue={getValue2}
        getName={getName2}
        required={required2}
      ></InputText>
    </div>
  )
}
