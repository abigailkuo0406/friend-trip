import React, { Component } from 'react'

import { CiBasketball } from 'react-icons/ci'
class Question extends React.Component {
  render() {
    return (
      <h3>
        {' '}
        Lets go for a <CiBasketball />?{' '}
      </h3>
    )
  }
}
export default Question
