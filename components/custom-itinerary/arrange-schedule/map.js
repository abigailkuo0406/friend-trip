import { useState, useEffect } from 'react'
import { GoogleMap, useLoadScript, Marker} from '@react-google-maps/api'


// 在元件外部定義 libraries 陣列作為常數變數
const libraries = ['places']

export default function Map({ searchLngLat }) {
  
  //使用者當前位置
  const [currentPosition, setCurrentPosition] = useState(null)

  //初始地圖位置
  const [center, setCenter] = useState({
    lat: 0,
    lng: 0,
  })

  // 初始載入執行getCurrentPosition
  useEffect(() => {
    //使用瀏覽器定位來取得位置
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const initialPosition = {
          lat: position.coords.latitude, //使用者所在位置的經緯度
          lng: position.coords.longitude,
        }
        console.log('Inital Geolocation:', initialPosition)
        setCenter(initialPosition) //地圖中心點
        setCurrentPosition(initialPosition) //使用者目前位置
      })
    } else {
      alert('瀏覽器不支援地理位置')
    }
  }, [])

  // 更新地圖中心點，當 searchLngLat 變化時
  useEffect(() => {
    if (searchLngLat) {
      setCenter(searchLngLat)
    }
  }, [searchLngLat])

  // 載入google map
  // isLoaded 為 true，代表成功載入API，將isLoaded存進Props 傳到需求google map API 的元件。
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries,
  })
  if (!isLoaded) return <div>Loading....</div>

   // 路徑規劃
  //  const directionsService=new google.maps.DirectionsRenderer()
   
  //  directionsService.route({
  //   origin:new google.maps.LatLng(currentPosition.lat,currentPosition.lng),
    
  //  })


  return (
    <>
      {/* {console.log('searchLngLat(map.js):', searchLngLat)} */}
      <div>
      <div id="map1"></div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          {/* map component  */}
          <GoogleMap
            zoom={16} // 設定縮放級別
            center={center} // 設定地圖中心點
            mapContainerClassName="map"
            mapContainerStyle={{
              width: '100%',
              height: '700px',
              margin: 'auto',
            }}
          >
            {/* 查詢地點marker */}
            {searchLngLat && <Marker position={searchLngLat} />}
          </GoogleMap>
        </div>
      </div>
    </>
  )
}
