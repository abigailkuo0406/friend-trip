import React, { Fragment } from 'react'

export default function MyOption({
  value,
  option,
  selectedDefault,
  addClassforOption,
}) {
  const handleChange = (event) => {
    
  }
  return (
    <Fragment>
      <option
        className={`${addClassforOption}`}
        value={value}
        selected={selectedDefault == value}
        onChange={handleChange}

      >
        {option}
      </option>
    </Fragment>
  )
}
