export default function Public() {
    return (
      <>
   <div className="card" style={{width:300}}>
    <img src="http://localhost:3001/yauogfnozeddzzg.jpg" className="card-img-top" alt="..."></img>
    <div className="card-body">
    <div className="d-flex mb-4">
                <img
                  src={`http://localhost:3001/people01.jpeg`}
                  className="rounded-circle"
                  alt="..."
                  style={{ width: 60 }}
                ></img>
                <p className="d-flex align-items-center mt-3">Amber</p>
              </div>
      <h5 className="card-title text-truncate">台北人一日散策｜從台北西區的舊時代走入東區新時代的小旅行</h5>   
      <div className="d-flex justify-content-between pt-2 ">
      <div className="pt-2">
      <p className="card-text ">2023年4月5日</p>
      </div>
      <a href="#" className="btn btn-primary ">參加</a>
  
      </div>
    </div>
  </div>
      </>
    )
  }
  