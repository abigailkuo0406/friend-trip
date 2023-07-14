import { BiSearchAlt } from 'react-icons/bi'

export default function InputSearchBar() {
  return (
    <div id="Search-Bar" className="input-group w-50">
      <form className="d-flex w-100">
        <input
          type="text"
          className="form-control input-text"
          placeholder="探索新發現！"
          aria-label="探索新發現！"
          aria-describedby="button-addon2"
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          <BiSearchAlt />
        </button>
      </form>
    </div>
  )
}
