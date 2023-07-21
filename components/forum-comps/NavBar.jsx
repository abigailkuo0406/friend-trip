import Link from 'next/link'
import styles from '@/components/forum-comps/NavBar.module.css'
export default function NavBar() {
  return (
    <nav className={`d-flex flex-row justify-content-between ${styles.link}`}>
      <div>
        <Link href="/forum" className={styles.navlink}>
          <h1 className={`fs-4 ${styles.navlink}`}>所有文章</h1>
        </Link>
      </div>
      <div>
        <Link href="/forum/add-post" className={styles.navlink2}>
          <h1 className={`fs-4 ${styles.navlink}`}>新增文章</h1>
        </Link>
      </div>
      <div>
        <Link href="/forum/my-posts" className={styles.navlink3}>
          <h1 className={`fs-4 ${styles.navlink}`}>我發的文</h1>
        </Link>
      </div>
    </nav>
  )
}

// note: If Bootstract + css
// first: import styles from '@/components/forum-comps/NavBar.module.css'
// second: <div className={`d-flex flex-row... ${styles.link}`}
