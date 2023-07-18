import styles from './public-init.module.css'

export default function SortBoard() {
  return (
    <>
     <div>
    <div className={`d-flex justify-content-end ${styles.Input}`}>
      <div className="input-group" style={{ width: 280 }}>
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
          <option value="2">熱門推薦</option>
        </select>
      </div>
      </div>
      </div>
    </>
  )
}
