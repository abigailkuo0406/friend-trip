export default function SidebarNavigation() {
  return (
    <>
      <div className="card">
        <div className="card-body nav-body">
          <nav class="navbar">
            <div class="container-fluid">
              <div class="" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      聊天室
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      行程
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      訂位
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      文章
                    </a>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      購物
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">
                          購物車
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          我的優惠券
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          歷史訂單
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link" href="#">
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
