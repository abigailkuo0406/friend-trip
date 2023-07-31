import styles from './history.module.css'
import BtnNormal from '../common/button/btn-normal'

export default function History({allClick, publicClick,privateClick}) {

// console.log('publicClick',publicClick)
  return (
    <>
      <div className={styles.container}>
        <div className="container d-flex justify-content-between">
          <div
            className="btn-group "
            role="group"
            aria-label="Basic outlined example"
          >
            <div className="mx-2">
              {/* <BtnNormal 
            type="button"
            value="submit"
            btnText="所有行程"
            addClassforButton="btn-dark" //.btn-dark：深色按鈕 .btn-light：淺色按鈕 .btn-white：白色按鈕
            disabled={false} // fase：可點，true：不可點
          /> */}
              <button
                type="button"
                className={`btn ${styles.textcolor}`}
                onClick={allClick}
              >
                所有行程
              </button>
            </div>
            <div className="mx-2">
              <button
                type="button"
                className={`btn ${styles.textcolor}`}
                onClick={() => publicClick()}
              >
                公開行程
              </button>
            </div>
            <div className="mx-2">
              <button type="button" className={`btn ${styles.textcolor}`}
              onClick={()=>privateClick()}>
                私人行程
              </button>
            </div>
            <div className="mx-2">
              <button type="button" className={`btn ${styles.textcolor}`}>
                官方行程
              </button>
            </div>
          </div>
          <div className="input-group mx-2" style={{ width: 280 }}>
            <p
              className={`my-auto me-3 ${styles.textcolor} `}
              htmlFor="inputGroupSelect01"
            >
              排序方式:
            </p>
            <select
              className={`form-select rounded-4 ${styles.textcolor}`}
              id="inputGroupSelect01"
              defaultValue="1"
            >
              <option value="1">最新日期</option>
            </select>
          </div>
        </div>
      </div>
    </>
  )
}
