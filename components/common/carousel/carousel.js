import React from 'react'
import { useEffect, useState } from 'react'

export default function Carousel(props) {
  const [flippedIndex, setFlippedIndex] = useState(null)
  const handleClick = (index) => {
    setFlippedIndex(index === flippedIndex ? null : index)
  }
  const [data, setData] = useState([])
  // const [changeSelectLocalStorage, setChangeSelectLocalStorage] = useState(()=>{})

  useEffect(() => {
    fetch(`http://localhost:3002/public-itinerary/home`)
      .then((r) => r.json())
      .then((data) => {
        setData(data)
        // console.log('data==>',data)
      })
    //取得itin_id
  }, [])

  const changeSelectLocalStorage = (
    itin_id,
    name,
    member_name,
    member_images,
    ppl
  ) => {
    //   console.log('changeSelectLocalStorage==>', itin_id,name,member_name,member_images,ppl)

    localStorage.setItem(
      'select_schedule_info',
      JSON.stringify({
        itin_member: itin_id,
        itin_name: name,
        itin_memberName: member_name,
        itin_image: member_images,
        itin_ppl: ppl,
      })
    )
    //   console.log('change success')
  }

  return (
    <>
      <div className="percarousel">
        <div className="slider">
          <div className="slide-track">
            {data.map((item, index) => (
              <a
                href="http://localhost:3000/public-itinerary/apply-task"
                key={index}
                className="slide-link"
              >
                <div
                  className={`slide ${index === flippedIndex ? 'flipped' : ''}`}
                  onClick={() => handleClick(index)}
                >
                  {index === flippedIndex ? (
                    <div className="back flipped">
                      <span>{item.name}</span>
                    </div>
                  ) : (
                    <img
                      src={`http://localhost:3002/face/${item.images}`}
                      height="80"
                      width="80"
                      alt=""
                      className="mx-3"
                      onClick={() =>
                        changeSelectLocalStorage(
                          item.itin_id,
                          item.name,
                          item.member_name,
                          item.images,
                          item.ppl
                        )
                      }
                    />
                  )}
                </div>
              </a>
            ))}
            {data.map((item, index) => (
              <a
                href="http://localhost:3000/public-itinerary/apply-task"
                key={index}
                className="slide-link"
              >
                <div
                  className={`slide ${index === flippedIndex ? 'flipped' : ''}`}
                  onClick={() => handleClick(index)}
                >
                  {index === flippedIndex ? (
                    <div className="back">
                      <p>{item.name}</p>
                    </div>
                  ) : (
                    <img
                      src={`http://localhost:3002/face/${item.images}`}
                      height="80"
                      width="80"
                      alt=""
                      className="mx-3"
                      onClick={() =>
                        changeSelectLocalStorage(
                          item.itin_id,
                          item.name,
                          item.member_name,
                          item.images,
                          item.ppl
                        )
                      }
                    />
                  )}
                </div>
              </a>
            ))}
            {data.map((item, index) => (
              <a
                href="http://localhost:3000/public-itinerary/apply-task"
                key={index}
                className="slide-link"
              >
                <div
                  className={`slide ${index === flippedIndex ? 'flipped' : ''}`}
                  onClick={() => handleClick(index)}
                >
                  {index === flippedIndex ? (
                    <div className="back">
                      <p>{item.name}</p>
                    </div>
                  ) : (
                    <img
                      src={`http://localhost:3002/face/${item.images}`}
                      height="80"
                      width="80"
                      alt=""
                      className="mx-3"
                      onClick={() =>
                        changeSelectLocalStorage(
                          item.itin_id,
                          item.name,
                          item.member_name,
                          item.images,
                          item.ppl
                        )
                      }
                    />
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
