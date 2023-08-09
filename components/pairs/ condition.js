import React, { useEffect, useState, useContext } from 'react'
import styles from './condition.module.css'
import BtnNormal from '@/components/common/button/btn-normal.js'
import Slider from '@mui/material/Slider'
import AuthContext from '@/context/AuthContext' // 會員
import { createTheme } from '@mui/material'
const theme = createTheme({
  palette: {
    primary: {
      main: '#674C87',
    },
  },
})

import { ThemeProvider } from '@mui/material'

export default function Condition() {
  const [value, setValue] = React.useState([0, 10])
  const [gender, setGender] = useState('')

  const { auth, setAuth } = useContext(AuthContext)
  const condition = (e) => {
    e.preventDefault()
    console.log('啟動篩選')
    fetch(process.env.API_SERVER + '/condition', {
      method: 'POST',
      body: JSON.stringify({
        memberID: auth.member_id,
        gender: gender,
        age_min: value[0],
        age_max: value[0],
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data)
        alert('更改成功')
      })
  }
  useEffect(() => {
    console.log(gender)
  }, [gender])
  useEffect(() => {
    console.log(value)
  }, [value])
  return (
    <>
      <div className={styles.container}>
        <div className={styles.main}>
          <div>
            <button className={styles.arrow} onClick={condition}>
              <i class="fa-solid fa-arrow-left"></i>
            </button>
          </div>
          <div className="mt-3">
            <h4 className={styles.font}>對象</h4>
            <div className={styles.btns}>
              <BtnNormal
                onClick={() => {
                  setGender('女')
                }}
                className="btn"
                btnText="生理女性"
                addClassforButton="btn-light"
              />
              <BtnNormal
                btnText="生理男性"
                addClassforButton="btn-light ms-3"
                onClick={() => {
                  setGender('男')
                }}
              />
              <BtnNormal btnText="都可以" addClassforButton="btn-light ms-3" />
            </div>
          </div>
          <div className="mt-5">
            <label htmlFor="customRange2" class="form-label mt-3">
              <h4>年齡</h4>
            </label>
            <ThemeProvider theme={theme}>
              <Slider
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue)
                }}
                valueLabelDisplay="auto"
                // getAriaValueText={valuetext}
              />
            </ThemeProvider>
          </div>
        </div>
      </div>
    </>
  )
}
