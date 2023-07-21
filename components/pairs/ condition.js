import React from 'react'
import styles from './condition.module.css'
import BtnNormal from '@/components/common/button/btn-normal.js'
import Slider from '@mui/material/Slider'

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
  return (
    <>
      <div className={styles.container}>
        <div className={styles.main}>
          <div>
            <i class="fa-solid fa-arrow-left"></i>
          </div>
          <div className="mt-3">
            <h4 className={styles.font}>對象</h4>
            <div className={styles.btns}>
              <BtnNormal
                className="btn"
                btnText="生理女性"
                addClassforButton="btn-light"
              />
              <BtnNormal
                btnText="生理男性"
                addClassforButton="btn-light ms-3"
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
