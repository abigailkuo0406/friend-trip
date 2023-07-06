
export default function SortBoard() {
  return (
    <>
    <div className="container "> 
     <div className="input-group" style={{ width: '250px' }}>
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              排序方式
            </label>
            <select
              className="form-select"
              id="inputGroupSelect01"
              defaultValue="1"
            >
              <option>--------</option>
              <option value="1">最新日期</option>
              <option value="2">熱門推薦</option>
            </select>
           </div> 
  
    </div>  
    </>
  )
}
