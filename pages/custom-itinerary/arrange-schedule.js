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
import Image from 'next/image'
import Script from 'next/script'

export default function ArrangeSchedule() {
  const [showSchedule, setShowSchedule] = useState(true)
  const [showSearchView, setShowSearchView] = useState(false)
  // const [addToSchedule, setAddToSchedule] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const autocompleteRef = useRef(null)
  const [searchLngLat, setSearchLngLat] = useState(null) //查詢地點marker
  const [directions, setDirections] = useState(null)

  // const [selectedLocations, setSelectedLocations] = useState([])

  // 存儲選擇的景點資訊
  const [selectedView, setSelectedView] = useState(null)

  //定義存取多個景點陣列狀態
  const [addInitLocal, setAddInitLocal] = useState([])

  const [photoUrl, setPhotoUrl] = useState('')

  // const [selectedViews, setSelectedViews] = useState([])

  // 新增行程按鈕切換
  const handleAddScenery = () => {
    setShowSchedule(false)
  }
  //點加入行程btn將畫面切到行程安排畫面
  const handleAddToSchedule = () => {
    setShowSchedule(true)
    console.log('handleAddToSchedule selectedView=>', selectedView)
    setSelectedView(selectedView)
    setPhotoUrl(photoUrl)
    console.log('handleAddToSchedule photoUrl', setPhotoUrl)

    // const setNewLocals = () => {
    //   //塞資料進去
    //   localStorage.setItem('selectedView', JSON.stringify('selectedView'))
    //   localStorage.setItem('font', 'xxxxxx')
    //   console.log('selectedViewlocal=====',selectedView)
    // }
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

    // console.log('地點資訊:', place)

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
    console.log('selectedView父層=====>', selectedView)

    // console.log('place_id=>',selectedView.place_id)
    // const PlacesService =await google.maps.importLibrary('places')
    // const placesService = new window.google.maps.places.PlacesService(Map);

    const PlacesService = new google.maps.places.PlacesService(map1)

    PlacesService.getDetails(
      {
        placeId: selectedView.place_id,
      },
      (place, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          console.log('placed=>', place)
          console.log('Object.keys=====>' + Object.keys(place.photos))
          console.log('obj.key()>>:' + Object.keys(place.photos[0]))
          //取得照片網址=>Object.keys(place.photos[0])

          console.log('place.getUrl[0] :' + place.photos[0].getUrl())
          showPlacePhotos(place)
        } else {
          console.error('錯誤的狀態')
        }
      }
    )

    function showPlacePhotos(place) {
      // const placePhotosDiv = document.getElementById('placeDetails');
      // placePhotosDiv.innerHTML = ''; // 清空先前的內容

      if (place.photos && place.photos.length > 0) {
        const photoUrl = place.photos[0].getUrl()
        const placePhotosDiv = document.getElementById('placeDetails')
        const imageElement = document.createElement(`img`)
        imageElement.src = photoUrl
        imageElement.alt = 'Photo 1'
        imageElement.style.width = '300px'
        imageElement.style.height = '200px'
        placePhotosDiv.innerHTML = '' // 清空先前的内容
        placePhotosDiv.appendChild(imageElement)

        // setSelectedView((prevSelectedView)=>({
        //   ...prevSelectedView,
        //   photoUrl:imageElement.src
        // }))
        // console.log("photoUrl prop in ArrangeSchedule:", placePhotosDiv.appendChild(imageElement))
      }
    }

    // 將選擇的景點資訊存儲在狀態中
    setSelectedView(selectedView)

    //將加入行程的景點存為新的陣列
    setAddInitLocal((prevAddInitResults) => [
      ...prevAddInitResults,
      selectedView,
    ])
    // console.log('setAddInitLocal=====', selectedView)
  }

  //當 addInitLocal 陣列改變時，將其存儲到 localStorage 中
  useEffect(() => {
    localStorage.setItem('addInitLocal', JSON.stringify(addInitLocal))
  }, [addInitLocal])
  console.log('addInitLocal======', addInitLocal)

  // 在組件掛載時，從 localStorage 中檢索 addInitLocal 陣列
  useEffect(() => {
    const storedLocations = JSON.parse(localStorage.getItem('addInitLocal'))
    console.log('storedLocations--------', storedLocations)
    console.log('localStorage.key======', localStorage.key(0))
  }, [])

  //  刪除景點
  const handleDeleteView = (index) => {
    const updatedViews = [...addInitLocal]
    updatedViews.splice(index, 1)
    setAddInitLocal(updatedViews)
  }

  return (
    <>
      {/*  */}
      <Head>
        {/* {console.log('searchLngLat:',searchLngLat)} */}
        <Script src="https://maps.googleapis.com/maps/api/js?key=process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=places" />
      </Head>

      {/* <div id="placeDetails"><img src={photoUrl}></img></div> */}
      <div></div>
      {/* <div><img src={photoUrl} alt="...."></img></div> */}
      {showSchedule ? (
        <ScheduleSide
          changeToSearch={handleAddScenery}
          selectedView={addInitLocal}
          onDeleteView={handleDeleteView}
      
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
      {/* {console.log('Initial showSchedule:', showSchedule)}
      {console.log('Initial ShowSearchView:', showSearchView)} */}

      <Map searchLngLat={searchLngLat} />
    </>
  )
}

// 這裡代表要套用AdminLayout，取代原本的DefaultLayout
// 要寫在元件的函式之外
ArrangeSchedule.getLayout = function (page) {
  return <NoSidebarLayout>{page}</NoSidebarLayout>
}
