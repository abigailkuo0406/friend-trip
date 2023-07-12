import React, { Fragment } from 'react'

export default function MyOption({
  value,
  option,
  selectedDefault,
  addClassforOption,
}) {
  return (
    <Fragment>
      <option
        className={`${addClassforOption}`}
        value={value}
        selected={selectedDefault == value}
      >
        {option}
      </option>
    </Fragment>
  )
}
