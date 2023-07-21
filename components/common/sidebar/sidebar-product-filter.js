export default function SidebarProductFilter() {
  return (
    <>
      <div className="card">
        <div className="card-body nav-body">
          <nav className="navbar">
            <div className="container-fluid">
              <div className="" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      所有商品
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
                      分類
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          最新商品
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          FriendTrip 周邊
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          旅遊小物
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          優惠票券
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          送禮禮品
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      排序
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          金額由小至大
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          金額由大至小
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          評分最多
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          最多購買
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      收藏商品
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      再買一次
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
