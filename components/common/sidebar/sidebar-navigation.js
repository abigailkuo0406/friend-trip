export default function SidebarNavigation() {
  return (
    <>
      <div className="card">
        <div className="card-body nav-body">
          <nav className="navbar">
            <div className="container-fluid">
              <div className="" id="navbarNav">
                <ul className="navbar-nav">
                  {/* <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href='/'>
                      聊天室
                    </a>
                  </li> */}
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href='/member/itinerary'>
                      行程
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href='/member/reserve'>
                      訂位
                    </a>

                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href='/member/post'>
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
                        <a className="dropdown-item" href='/product/cart'>
                          購物車
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href='/product/collection'>
                          我的收藏
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href='/product/order'>
                          歷史訂單
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href='/member'>
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
