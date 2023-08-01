import { useState, useEffect, useRef } from 'react'
import {
  GoogleMap,
  useLoadScript,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from '@react-google-maps/api'
import Head from 'next/head'
import NoSidebarLayout from '@/components/layout/nosidebar-layout'
import Map from '@/components/custom-itinerary/arrange-schedule/map'
import ScheduleSide from '@/components/custom-itinerary/arrange-schedule/arrange-schedule'
import SearchView from '@/components/custom-itinerary/arrange-schedule/search-view'
import Script from 'next/script'

export default function ArrangeSchedule() {
  const [showSchedule, setShowSchedule] = useState(true)
  const [inputValue, setInputValue] = useState('')
  const autocompleteRef = useRef(null)
  const [searchLngLat, setSearchLngLat] = useState(null) //查詢地點marker
  const [directions, setDirections] = useState(null)

  // 存儲選擇的景點資訊
  const [selectedView, setSelectedView] = useState(null)

  //定義存取多個景點陣列狀態
  const [addInitLocal, setAddInitLocal] = useState([])

  //定義照片的狀態
  const [photoUrl, setPhotoUrl] = useState('')

  // 新增行程按鈕切換
  const handleAddScenery = () => {
    setShowSchedule(false)
  }

  const handleAddToSchedule = () => {
    setShowSchedule(true)
    setSelectedView(selectedView)
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  //初始地圖位置
  const [center, setCenter] = useState({
    lat: 0,
    lng: 0,
  })

  //搜尋欄取得地點資訊
  const handlePlaceChanged = () => {
    setDirections()
    const place = autocompleteRef.current.getPlace()
    const viewPosition = {
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    }
    setSearchLngLat(viewPosition)
    setCenter(viewPosition)

    //景點詳細資料
    const selectedView = {
      place_id: place.place_id,
      name: place.name,
      formatted_address: place.formatted_address,
      weekday_text:
        place.current_opening_hours && place.current_opening_hours.weekday_text,
      phone_number:
        place.formatted_phone_number && place.formatted_phone_number,
      rating: place.rating && place.rating,
      lng: (
        (place.geometry.viewport.Ha.lo + place.geometry.viewport.Ha.hi) /
        2
      ).toFixed(4),
      lat: (
        (place.geometry.viewport.Va.lo + place.geometry.viewport.Va.hi) /
        2
      ).toFixed(4),
    }

    //place details 取得照片
    const PlacesService = new google.maps.places.PlacesService(map1)

    PlacesService.getDetails(
      {
        placeId: selectedView.place_id,
      },
      (place, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          // console.log('Object.keys=====>' + Object.keys(place.photos))
          // console.log('obj.key()>>:' + Object.keys(place.photos[0]))
          //取得照片網址=>Object.keys(place.photos[0])
          showPlacePhotos(place)
        } else {
          console.error('錯誤的狀態')
        }
      }
    )

    function showPlacePhotos(place) {
      if (place.photos && place.photos.length > 0) {
        const photoUrl = place.photos[0].getUrl()
        const placePhotosDiv = document.getElementById('placeDetails')
        const imageElement = document.createElement(`img`)
        console.log('photoUrl==>', photoUrl)
        imageElement.src = photoUrl
        imageElement.alt = 'Photo 1'
        imageElement.style.width = '300px'
        imageElement.style.height = '200px'
        placePhotosDiv.innerHTML = '' // 清空先前的内容
        placePhotosDiv.appendChild(imageElement)
      }
    }

    // 將選擇的景點資訊存儲在狀態中
    setSelectedView(selectedView)

    //將加入行程的景點存為新的陣列
    setAddInitLocal((prevAddInitResults) => [
      ...prevAddInitResults,
      selectedView,
    ])
  }

  // 當 addInitLocal 陣列改變時，將其存儲到 localStorage 中
  useEffect(() => {
    localStorage.setItem('addInitLocal', JSON.stringify(addInitLocal))
    console.log('addInitLocal======', addInitLocal)
  }, [addInitLocal])

  //設定要存取到後端的狀態
  const [dataFromLocalStorage, setDataFromLocalStorage] = useState([])
  // const[itinId,setItinId]=useState('')

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('addInitLocal'))
    setDataFromLocalStorage(data || [])
    // console.log('Data from localStorage:', addInitLocal)
  }, [addInitLocal])

 
  //編輯api
  useEffect(() => {
    // console.log('Get schedule')
    const storedData = localStorage.getItem('schedule_info')
    const parsedData = JSON.parse(storedData)
    const itinId =parsedData? parsedData.itin_member:''
    // 設定預設值為空字串
    // API串接
    fetch(`http://localhost:3002/save-view/edit?itin_member=${itinId}`)
      .then((r) => r.json())
      .then((data) => {
        console.log(data)
        localStorage.setItem('addInitLocal', JSON.stringify(data))
        const parse_data = data
        console.log('[]:', parse_data)
        setAddInitLocal(parse_data)
        console.log('test addInitLocal==>',addInitLocal)
      })
  }, [])





  //行程儲存到後端 saveData=>onClick
  const saveData = () => {
    const storedData = localStorage.getItem('schedule_info')
    const parsedData = JSON.parse(storedData)
    const itinId = parsedData.itin_member
    //景點行程順序
    const dataWithOrder = dataFromLocalStorage.map((item, index) => ({
      ...item,
      itin_order: index,
      itin_id: itinId,
    }))
    console.log('dataFromLocalStorage123:', JSON.stringify(dataWithOrder))

    // console.log('storedData123',storedData)
    // console.log('parsedData123',parsedData)
    // console.log('itinId123',itinId)

    // 景點行程API串接(行程寫進db)
    fetch('http://localhost:3002/save-view', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataWithOrder),
    })
      .then((r) => r.json())
      .then((data) => {
        console.log('資料已成功送到資料庫:', data)
      })
      .catch((error) => {
        console.log('發生錯誤，行程未送成功到資料庫', error)
      })
  }

  //  刪除景點
  const handleDeleteView = (index) => {
    const updatedViews = [...addInitLocal]
    updatedViews.splice(index, 1)
    setAddInitLocal(updatedViews)
  }

  return (
    <>
      <Head>
        <Script src="https://maps.googleapis.com/maps/api/js?key=process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=places" />
      </Head>
      {showSchedule ? (
        <ScheduleSide
          changeToSearch={handleAddScenery}
          selectedView={addInitLocal}
          onDeleteView={handleDeleteView}
          onSaveClick={saveData}
        />
      ) : (
        <Autocomplete
          onLoad={(autocomplete) => {
            autocompleteRef.current = autocomplete
          }}
          onPlaceChanged={handlePlaceChanged}
          //景點資訊要的欄位
          options={{
            fields: [
              'name',
              'current_opening_hours',
              'formatted_address',
              'geometry',
              'formatted_phone_number',
              'place_id',
              'rating',
            ],
          }}
        >
          <SearchView
            changeToAddSchedule={handleAddToSchedule}
            inputValue={inputValue}
            onInputChange={handleInputChange}
            searchLngLat={searchLngLat}
            setSearchLngLat={setSearchLngLat}
            autocompleteRef={autocompleteRef}
            selectedView={selectedView}
            photoUrl={photoUrl}
          />
        </Autocomplete>
      )}

      <Map searchLngLat={searchLngLat} />
    </>
  )
}

// 這裡代表要套用AdminLayout，取代原本的DefaultLayout
// 要寫在元件的函式之外
ArrangeSchedule.getLayout = function (page) {
  return <NoSidebarLayout>{page}</NoSidebarLayout>
}
