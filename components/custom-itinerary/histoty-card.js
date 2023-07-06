import { FiMoreHorizontal } from 'react-icons/fi'
import styles from './history.module.css'

export default function HistotyCard() {
  return (
    <>
    <div className="container">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={`http://localhost:3000/img/yauogfnozeddzzg.jpg`}
                  className="img-fluid rounded-start"
                  alt="..."
                  style={{ width: 540 }}
                ></img>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <div className="d-flex justify-content-between ">
                  <div className='d-flex '>
                    <h5 className={styles.text}>
                      嘉義市舊城區｜跟著IG網美玩一天，老宅旬味旅行
                    </h5>
                    <button type="button" className="btn btn-primary  btn-sm ">
                      公開
                    </button>
                    </div>
                    <FiMoreHorizontal />
                  </div>
                  <p className="card-text">
                    公園火雞肉飯 嘉義製材所園區 花淺蔥 Brunch Osteria
                    臺灣花磚博物館 霜空咖啡....
                  </p>

                  <div className="d-flex">
                    好友：
                    <img
                      src={`http://localhost:3000/img/people01.jpeg`}
                      className="rounded-circle"
                      alt="..."
                      style={{ width: 40 }}
                    />
                    <img
                      src={`http://localhost:3000/img/people02.jpeg`}
                      className="rounded-circle"
                      alt="..."
                      style={{ width: 40 }}
                    />
                  </div>
                
                  <div className={styles.cardText}>
                    <small>
                      May 10, 2023 - May 10, 2023 71 人氣
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    
    
    </>
  )
}
