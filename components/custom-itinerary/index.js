import styles from './history.module.css'

export default function History() {
  return (
    <>
      <div className={styles.container}>
        <div className="container d-flex justify-content-between">
          <div
            className="btn-group "
            role="group"
            aria-label="Basic outlined example"
          >
            <button type="button" className="btn btn-outline-primary ">
              所有行程
            </button>
            <button type="button" className="btn btn-outline-primary">
              公開行程
            </button>
            <button type="button" className="btn btn-outline-primary">
              私人行程
            </button>
            <button type="button" className="btn btn-outline-primary">
              官方行程
            </button>
          </div>
          <div className="input-group" style={{ width: '250px' }}>
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
