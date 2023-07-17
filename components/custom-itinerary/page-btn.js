import Link from 'next/link'
import styles from './history.module.css'


export default function PageBtn(props) {

  return (
    <>
    <div>
    <ul className={`pagination ${styles.pageBtn}`}>
    <li className="page-item"><Link class={`page-link ${styles.pageLink}`} href={'?page='} aria-label="Previous">
       <span aria-hidden="true">&laquo;</span>
      </Link></li>
    <li className="page-item"><a className={`page-link ${styles.pageLink}`} href="#">1</a></li>
    <li className="page-item"><a className={`page-link ${styles.pageLink}`} href="#">2</a></li>
    <li className="page-item"><a className={`page-link ${styles.pageLink}`} href="#">3</a></li>
    <li className="page-item"><a class={`page-link ${styles.pageLink}`} href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a></li>
  </ul>
</div>
    </>
  )
}
