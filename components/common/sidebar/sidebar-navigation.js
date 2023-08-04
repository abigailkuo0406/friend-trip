import Link from "next/link"
export default function SidebarNavigation() {
  return (
    <>
      <div className="card">
        <div className="card-body nav-body">
          <nav className="navbar">
            <div className="container-fluid">
              <div className="" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" href='/'>
                      聊天室
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" href='/member/itinerary'>
                      行程
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" href='/member/reserve'>
                      訂位
                    </Link>

                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" href='/member/post'>
                      文章
                    </Link>
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
                    <Link className="nav-link active" aria-current="page" href='/member'>
                      帳戶
                    </Link>

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
