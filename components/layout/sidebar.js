import Image from 'next/image'
import persona from '@/assets/fake-data/fake-persona.png'
import { BsPeople } from 'react-icons/bs'
import { BsChatText } from 'react-icons/bs'
import { BsCalendarCheck } from 'react-icons/bs'
export default function Sidebar() {
  return (
    <>
      <div className="card">
        <div className="card-body d-flex">
          <div id="User-Img" className="d-flex align-items-center pe-3">
            <Image
              src={persona}
              alt="Picture of the persona"
              style={{
              width: `100%`,
              height: `auto`,
              }}
              
            ></Image>
          </div>
          <div id="User-Info">
            <div id="User-Name">
              <h3>Amber</h3>
            </div>
            <div id="User-Account" className="small-font">
              <p>＠bigboss7788</p>
            </div>
            <div id="User-Status">
              <p id="User-Friends-Status">
                <BsPeople />
                <a>31</a>
              </p>
              <p id="User-Message-Status">
                <BsChatText />
                <a>5</a>
              </p>
              <p id="User-Trip-Status">
                <BsCalendarCheck />
                <a>10</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-body nav-body">
          <nav className="navbar">
            <div className="container-fluid">
              <div className="" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      聊天室
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/member/itinerary">
                      行程
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      訂位
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      文章
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      購物
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          購物車
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          我的優惠券
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          歷史訂單
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      帳戶
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}
