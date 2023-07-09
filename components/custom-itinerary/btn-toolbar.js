import styles from './history.module.css'

export default function BtnToolbar() {
  return (
    <>
      <div className="container">
        <div className="btn-group " role="group">
          <button type="button" class="btn btn-primary">
            1
          </button>
          <button type="button" class="btn btn-primary">
            2
          </button>
          <button type="button" class="btn btn-primary">
            3
          </button>
          <button type="button" class="btn btn-primary">
            4
          </button>
        </div>
      </div>
    </>
  )
}
