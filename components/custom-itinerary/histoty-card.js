import { useState ,useEffect} from 'react'
import { FiMoreHorizontal } from 'react-icons/fi'
import styles from './history.module.css'
import Image from 'next/image'
import Jiufen from '@/assets/fake-data/fake-jiufen.png'
import person from '@/assets/fake-data/fake-persona.png'



export default function HistotyCard(props) {

  // 格式化日期
   const formatDateString = (dateString) => {
    const date = new Date(dateString)
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0') //padStart->日期維持2位數 ex.05
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}年${month}月${day}日`
  }
  const formattedCreateAt = formatDateString(props.create_at) // 格式化后的創建日期

  //刪除
  function handleDelete () {
    console.log('Delete clicked')
  }

  return (
    <>
      <div className="container">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <Image
                src={Jiufen}
                className="img-fluid rounded-start"
                alt="..."
                style={{ width: 540 }}
              ></Image>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <div className="d-flex justify-content-between ">
                  <div className="d-flex ">
                    <h5 className={styles.text}>{props.name}</h5>
                    <span className="badge rounded-pill bg-primary">
                      {props.public}
                    </span>
                  </div>
                  <div>
                  {/* 刪除 */}
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary "
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <FiMoreHorizontal />
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                        <button
                            className="dropdown-item"
                            onClick={handleDelete}
                          >
                            刪除
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <p className="card-text text-truncate">{props.description}</p>
                <div className="d-flex">
                  好友：
                  <Image
                    src={person}
                    className="rounded-circle"
                    alt="..."
                    style={{ width: '5%', height: 'auto' }}
                  />
                  <Image
                    src={person}
                    className="rounded-circle"
                    alt="..."
                    style={{ width: '5%', height: 'auto' }}
                  />
                </div>
                <div className={styles.cardText}>
                  <small>{formattedCreateAt}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
