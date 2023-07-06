import styles from './create-task.module.css'

export default function CreateTask() {
  return (
    <>
      <div className={styles.container}>
        <div className="container">
          <div className="d-flex flex-column mb-3">
            <label className={styles.label}>
              旅程封面圖片
            </label>
            <img
              src={`http://localhost:3000/yauogfnozeddzzg.jpg`}
              className={styles.label}
              alt="..."
              style={{ width: 450 }}
            ></img>
          </div>
          {/* 表格 */}
          <div className={styles.formbody}>
            <div className="container ">
              <div className="mb-3">
                <label >行程名稱</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="請輸入"
                ></input>
              </div>
              <div className="mb-3">
                <label > 出發日期</label>
                <input
                  type="date"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="請輸入"
                ></input>
              </div>
              <div className="mb-3">
                <label >說明</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="請輸入"
                ></textarea>
              </div>
              <div className="mb-3">
                <label  className="form-label ">
                  是否需要公開
                </label>
                <input
                  type="radio"
                  className="form-check-input "
                  name="public"
                  id="public"
                  value="公開"
                ></input>
                <label className="form-check-label" >
                  公開
                </label>
                <input
                  className="form-check-input"
                  type="radio"
                  name="public"
                  id="public"
                  value="不公開"
                ></input>
                <label className="form-check-label" >
                  不公開
                </label>
              </div>
              <div className="mb-3">
                <label className="form-label">
                  人數
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                ></input>
              </div>
              <div className="mb-3">
                <label className="form-label">
                  備註
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="請輸入"
                ></textarea>
              </div>

              <div className="d-flex justify-content-center  ">
                <button type="submit" className="btn btn-light mx-4">
                  取消
                </button>
                <button type="submit" className="btn btn-primary">
                  建立
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
