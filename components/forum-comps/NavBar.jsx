import Link from 'next/link'
import styles from '@/components/forum-comps/NavBar.module.css'
import AuthContext from '@/context/AuthContext'
import { useContext } from 'react'
export default function NavBar() {
  const { auth } = useContext(AuthContext)
  // 👇 判斷是否登入，兩個驚歎號作用為強制轉換數字為布林值
  const isLoggedIn = !!auth.member_id
  // ☝️ 判斷是否登入
  return (
    <nav className={`d-flex flex-row justify-content-between`}>
      <div>
        <Link href="/forum" className={styles.navlink}>
          <h3>所有文章</h3>
        </Link>
      </div>
      {isLoggedIn && (
      <div>
          <Link href="/forum/add-new-post" className={styles.navlink}>
          <h3>新增文章</h3>
          </Link>
        </div>
      )}
      {isLoggedIn && (
        <div>
          <Link href="/forum/my-posts" className={styles.navlink}>
            <h3>我發的文</h3>
          </Link>
        </div>
      )}
    </nav>
  )
}

// note: If Bootstract + css
// first: import styles from '@/components/forum-comps/NavBar.module.css'
// second: <div className={`d-flex flex-row... ${styles.link}`}
