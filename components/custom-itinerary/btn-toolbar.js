import Link from 'next/link'
import styles from './history.module.css'


export default function BtnToolbar(props) {

  return (
    <>
    <nav aria-label="Page navigation example">
    <ul className="pagination">
    <li className="page-item"><Link className="page-link" href={'?page='}>Previous</Link></li>
    <li className="page-item"><a className="page-link" href="#">1</a></li>
    <li className="page-item"><a className="page-link" href="#">2</a></li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item"><a className="page-link" href="#">Next</a></li>
  </ul>
</nav>
    </>
  )
}
