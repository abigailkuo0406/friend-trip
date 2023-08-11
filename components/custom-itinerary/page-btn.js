import Link from 'next/link'
import styles from './history.module.css'

export default function PageBtn({ totalPages, currentPage ,onUpdateCurrentPage}) {
  // const pageNumbers = Array.from(
  //   { length: totalPages },
  //   (_, index) => index + 1
  // )
  // console.log('pageNumbers====', pageNumbers)

// const visiblePageNumbers=pageNumbers.slice(0,4)
const handleNextPage=(pageNumber)=>{
  onUpdateCurrentPage(pageNumber)
}
console.log('handleNextPage',handleNextPage)
  return (
    <>
      <div>
        <ul className={`pagination ${styles.pageBtn}`}>
          <li className="page-item">
            <Link
              className={`page-link ${styles.pageLink}`}
              href={`?page=${currentPage - 1}`}
              aria-label="Previous"
            >
              <span aria-hidden="true">&laquo;</span>
            </Link>
          </li>
          {Array.from({length:totalPages},(_,index)=> index+1).map((pageNumber)=>(
            <li className="page-item" key={pageNumber}>
              <Link
                className={`page-link ${styles.pageLink}`}
                href={`?page=${pageNumber}`}
              >
                {pageNumber}
              </Link>
            </li>
       ))}
          <li className="page-item">
            <Link
              className={`page-link ${styles.pageLink}`}
              onClick={handleNextPage}
              href={`?page=${currentPage + 1}`}
              aria-label="Next"
            >
              <span aria-hidden="true">&raquo;</span>
            </Link>
          </li>

        </ul>
      </div>
    </>
  )
}
