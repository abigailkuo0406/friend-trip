import React from 'react'
import Image from 'next/image'

import A from '@/assets/rest-img/rest-img-1-a.jpg'

export default function RestItem() {
  return (
    <>
      {/* <div classname="modal-dialog modal-fullscreen-sm-down"> */}
      <div
        classname="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabindex="-1"
      >
        <div classname="modal-dialog modal-dialog-centered modal-fullscreen ">
          <div classname="modal-content ">
            <div classname="modal-header">
              <h1 classname="modal-title fs-5" id="exampleModalToggleLabel">
                Modal 1
              </h1>
              {/* 關閉按鈕 */}
              <button
                type="button"
                classname="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            {/* modal body */}
            <div classname="d-flex mx-6" >
              <div classname="modal-body">
                {/*左方標題列 */}
                <div classnameName="d-flex">
                  <h2>餐廳名稱</h2>
                  <div>星星</div>
                </div>
                {/* 左方小資訊列 */}
                <div>
                  <p>地址</p>
                  <p>電話</p>
                </div>

                {/* 左方大資訊區 */}
                <div>
                  <label>營業時間</label>
                  <p>周一至周五</p>
                  <label>料理特色</label>
                  <p>中式料理</p>
                  <label>訂位須知</label>
                  <p>1.用餐時間為90分鐘，從訂位時間起始計算。</p>
                  <p>1.用餐時間為90分鐘，從訂位時間起始計算。</p>
                  <p>1.用餐時間為90分鐘，從訂位時間起始計算。</p>
                </div>

                <form classnamenameName="bg-info">
                  <div>
                    <label>訂位日期</label>
                    <input type="date" />
                  </div>

                  <div>
                    <label>訂位時間</label>
                    <input type="time" />
                  </div>

                  <div>
                    <label>訂位人數</label>
                    <input type="number" />
                  </div>

                  <div>
                    <label>邀請好友</label>
                    <img />
                    <img />
                  </div>
                </form>
              </div>
              {/* 照片區 */}
              <div>
                <div id="carouselExampleIndicators" classname="carousel slide">
                  <div classname="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="0"
                      classname="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                  </div>
                  <div classname="carousel-inner">
                    <div classname="carousel-item active">
                      <Image
                        src={A}
                        classname="d-block w-100 "
                        alt="..."
                        width={200}
                        height={200}
                      />
                    </div>
                    <div classname="carousel-item">
                      <img src="..." classname="d-block w-100" alt="..." />
                    </div>
                    <div classname="carousel-item">
                      <img src="..." classname="d-block w-100" alt="..." />
                    </div>
                  </div>
                  <button
                    classname="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                  >
                    <span
                      classname="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span classname="visually-hidden">Previous</span>
                  </button>
                  <button
                    classname="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                  >
                    <span
                      classname="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span classname="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
            {/* 評論 */}
            <div classnameName='container'>
              <div id="carouselExample" classname="carousel slide">
                <div classname="carousel-inner">
                  <div classname="carousel-item active">
                    <Image
                      src={A}
                      classname="d-block w-100"
                      alt="..."
                      width={200}
                      height={200}
                    />
                  </div>
                  <div classname="carousel-item">
                    <img src="..." classname="d-block w-100" alt="..." />
                  </div>
                  <div classname="carousel-item">
                    <img src="..." classname="d-block w-100" alt="..." />
                  </div>
                </div>
                <button
                  classname="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <span
                    classname="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span classname="visually-hidden">Previous</span>
                </button>
                <button
                  classname="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <span
                    classname="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span classname="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            {/* footer */}
            <div classname="modal-footer">
              <button
                classname="btn btn-primary"
                data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal"
              >
                邀請好友
              </button>
              <button>訂位</button>
            </div>
          </div>
        </div>
      </div>
      <div
        classname="modal fade"
        id="exampleModalToggle2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabindex="-1"
      >
        <div classname="modal-dialog modal-dialog-centered">
          <div classname="modal-content">
            <div classname="modal-header">
              <h1 classname="modal-title fs-5" id="exampleModalToggleLabel2">
                Modal 2
              </h1>
              <button
                type="button"
                classname="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div classname="modal-body">
              Hide this modal and show the first with the button below.
            </div>
            <div classname="modal-footer">
              <button
                classname="btn btn-primary"
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
              >
                Back to first
              </button>
            </div>
          </div>
        </div>
      </div>
      <button
        classname="btn btn-primary"
        data-bs-target="#exampleModalToggle"
        data-bs-toggle="modal"
      >
        Open first modal
      </button>
    </>
  )
}
