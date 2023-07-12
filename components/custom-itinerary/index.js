import styles from './history.module.css'
import BtnNormal from '../common/button/btn-normal'

export default function History() {
  return (
    <>
      <div className={styles.container}>
        <div className="container d-flex justify-content-between">
          <div
            className="btn-group"
            role="group"
            aria-label="Basic outlined example"
          >
            <BtnNormal 
            type="button"
            value="submit"
            btnText="所有行程"
            addClassforButton="btn-dark" //.btn-dark：深色按鈕 .btn-light：淺色按鈕 .btn-white：白色按鈕
            disabled={false} // fase：可點，true：不可點
          />
            <BtnNormal 
            type="button"
            value="submit"
            btnText="公開行程"
            addClassforButton="btn-dark" //.btn-dark：深色按鈕 .btn-light：淺色按鈕 .btn-white：白色按鈕
            disabled={false} // fase：可點，true：不可點
          />
            <BtnNormal 
            type="button"
            value="submit"
            btnText="私人行程"
            addClassforButton="btn-dark" //.btn-dark：深色按鈕 .btn-light：淺色按鈕 .btn-white：白色按鈕
            disabled={false} // fase：可點，true：不可點
          />
            <BtnNormal 
            type="button"
            value="submit"
            btnText="官方行程"
            addClassforButton="btn-dark" //.btn-dark：深色按鈕 .btn-light：淺色按鈕 .btn-white：白色按鈕
            disabled={false} // fase：可點，true：不可點
          />
          </div>
          <div className="input-group" style={{ width:280}}>
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              排序方式
            </label>
            <select
              className="form-select"
              id="inputGroupSelect01"
              defaultValue="1"
            >
              <option>--------</option>
              <option value="1">最新日期</option>
            </select>
          </div>
        </div>
      </div>
    </>
  )
}
