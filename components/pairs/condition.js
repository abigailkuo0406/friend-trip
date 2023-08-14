import React, { useEffect, useState, useContext } from 'react'
import { useRouter } from 'next/router'
import styles from './condition.module.css'
import BtnNormal from '@/components/common/button/btn-normal.js'
import Slider from '@mui/material/Slider'
import AuthContext from '@/context/AuthContext' // 會員
import Swal from 'sweetalert2'
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
  const [value, setValue] = React.useState([0, 100])
  const [gender, setGender] = useState('')
  const [height, setHeight] = React.useState([100, 200])
  const [weight, setWeight] = React.useState([0, 100])
  const { auth, setAuth } = useContext(AuthContext)
  const router = useRouter()
  const condition = (e) => {
    e.preventDefault()
    console.log('啟動篩選')
    fetch(process.env.API_SERVER + '/condition', {
      method: 'POST',
      body: JSON.stringify({
        memberID: auth.member_id,
        i_gender: gender,
        i_age_min: value[0],
        i_age_max: value[1],
        i_height_low: height[0],
        i_height_high: height[1],
        i_weight_low: weight[0],
        i_weight_high: weight[1],
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data)
        Swal.fire({
          width: 400,
          title: '配對條件更改成功',
          text: '感謝您的使用祝福您使用愉快',
          icon: 'success',
          iconColor: '#FABCBF',
          color: '#674C87',
          confirmButtonColor: '#674C87',
          showConfirmButton: false,
        })
      })
      .then(() => router.push('/pair'))
  }
  const back = () => {
    router.push('/pair')
  }
  const first = (e) => {
    e.preventDefault()
    console.log('啟動篩選')
    console.log('2222222', auth)
    fetch(process.env.API_SERVER + '/first', {
      method: 'POST',
      body: JSON.stringify({
        memberID: auth.member_id,
        i_gender: gender,
        i_age_min: value[0],
        i_age_max: value[1],
        i_height_low: height[0],
        i_height_high: height[1],
        i_weight_low: weight[0],
        i_weight_high: weight[1],
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data)
        Swal.fire({
          width: 400,
          title: '設定成功',
          text: '感謝您的使用祝福您使用愉快',
          icon: 'success',
          iconColor: '#FABCBF',
          color: '#674C87',
          confirmButtonColor: '#674C87',
          showConfirmButton: false,
        })
      })
      .then(() => router.push('/pair/condition'))
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
          <div className="d-flex justify-content-between">
            <button className={`${styles.arrow}`} onClick={condition}>
              <i class="fa-solid fa-arrow-left"></i>
            </button>
            <BtnNormal
              onClick={first}
              className="btn"
              btnText="初次設定"
              addClassforButton="btn-light"
            />
            <button className={styles.arrow} onClick={back}>
              <i class="fa-solid fa-xmark"></i>
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
              {/* <BtnNormal btnText="都可以" addClassforButton="btn-light ms-3" /> */}
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
          <div className="mt-5">
            <label htmlFor="customRange3" class="form-label mt-3">
              <h4>身高</h4>
            </label>
            <ThemeProvider theme={theme}>
              <Slider
                max={200}
                min={110}
                getAriaLabel={() => 'Temperature range'}
                value={height}
                onChange={(event, newValue) => {
                  setHeight(newValue)
                  console.log('height', height)
                }}
                valueLabelDisplay="auto"
                // getAriaValueText={valuetext}
              />
            </ThemeProvider>
          </div>
          <div className="mt-5">
            <label htmlFor="customRange3" class="form-label mt-3">
              <h4>體重</h4>
            </label>
            <ThemeProvider theme={theme}>
              <Slider
                max={100}
                min={10}
                getAriaLabel={() => 'Temperature range'}
                value={weight}
                onChange={(event, newValue) => {
                  setWeight(newValue)
                  console.log('weight', weight)
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
