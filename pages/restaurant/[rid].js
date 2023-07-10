import React from 'react'
import Image from 'next/image'

import A from '@/assets/rest-img/rest-img-1-a.jpg'

export default function RestItem() {
  return (
    <>
      {/* <div class="modal-dialog modal-fullscreen-sm-down"> */}
      <div
        class="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabindex="-1"
      >
        <div class="modal-dialog modal-dialog-centered modal-fullscreen">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalToggleLabel">
                Modal 1
              </h1>
              {/* 關閉按鈕 */}
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            {/* modal body */}
            <div className="d-flex">
              <div class="modal-body">
                {/*左方標題列 */}
                <div>
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

                <form>
                  <label>訂位日期</label>
                  <input type="date" />
                  <label>訂位時間</label>
                  <input type="time" />
                  <label>訂位人數</label>
                  <input type="number" />
                  <label>邀請好友</label>
                  <img />
                  <img />
                </form>
              </div>
              {/* 照片區 */}
              <div>
                <div id="carouselExampleIndicators" class="carousel slide">
                  <div class="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="0"
                      class="active"
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
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <Image src={A} class="d-block w-100" alt="..." width={200} height={200} />
                    </div>
                    <div class="carousel-item">
                      <img src="..." class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                      <img src="..." class="d-block w-100" alt="..." />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
            {/* 評論 */}
            <div>
              <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="..." class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src="..." class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src="..." class="d-block w-100" alt="..." />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            {/* footer */}
            <div class="modal-footer">
              <button
                class="btn btn-primary"
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
        class="modal fade"
        id="exampleModalToggle2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabindex="-1"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">
                Modal 2
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              Hide this modal and show the first with the button below.
            </div>
            <div class="modal-footer">
              <button
                class="btn btn-primary"
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
        class="btn btn-primary"
        data-bs-target="#exampleModalToggle"
        data-bs-toggle="modal"
      >
        Open first modal
      </button>
    </>
  )
}
