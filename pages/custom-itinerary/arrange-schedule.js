import { useState, useEffect, useRef } from 'react'
import {GoogleMap,useLoadScript,Marker,Autocomplete,DirectionsRenderer,
} from '@react-google-maps/api'
import AdminLayout from '@/components/layout/admin-layout'
import Map from '@/components/custom-itinerary/arrange-schedule/map'
import ScheduleSide from '@/components/custom-itinerary/arrange-schedule/arrange-schedule'
import SearchView from '@/components/custom-itinerary/arrange-schedule/search-view'



export default function ArrangeSchedule() {

  const [showSchedule, setShowSchedule] = useState(true) 
  const [showSearchView, setShowSearchView] = useState(false)
  const [addToSchedule,setAddToSchedule]=useState(false)
  const [inputValue, setInputValue] = useState('')

  const autocompleteRef = useRef(null)
  const [searchLngLat, setSearchLngLat] = useState(null) //查詢地點marker
  const [directions, setDirections] = useState(null)

  // 存儲選擇的景點資訊
  const [selectedView, setSelectedView] = useState(null)

  const[selectedLocations,setSelectedLocations]=useState([])


  const handleAddScenery = () => {
    setShowSchedule(false)
    // setShowSearchView(true)
    // console.log('handleAddScenery showSchedule:',showSchedule)
    // console.log('InhandleAddScenery ShowSearchView:',showSearchView)
  }

  const handleAddToSchedule = () => {
    // console.log('handleGoBack go go go ')
    // console.log('before change AddToSchedule',addToSchedule)
    // console.log('before change ShowSearchView',showSearchView)
    // setShowSearchView(false)
    // setAddToSchedule(true)
    setShowSchedule(true)
    console.log('handleAddToSchedule selectedView=>',selectedView)
    setSelectedView(selectedView)

  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  // const handleAddSceneryClick = () => {
  //   setShowSchedule(false)
  //   setShowSearchView(true)
  //   setSelectedView(null)
  // };


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

    const selectedView={
      place_id:place.place_id,
      name:place.name,
      formatted_address:place.formatted_address, 
      weekday_text: (place.current_opening_hours && place.current_opening_hours.weekday_text),
      phone_number: place.formatted_phone_number && place.formatted_phone_number,
      rating:place.rating && place.rating,
      lng: ((place.geometry.viewport.Ha.lo+place.geometry.viewport.Ha.hi)/2).toFixed(4),
      lat: ((place.geometry.viewport.Va.lo+place.geometry.viewport.Va.hi)/2).toFixed(4),
  
    }
    console.log('selectedView=>',selectedView)


     // 將選擇的景點資訊存儲在狀態中
      setSelectedView(selectedView)
  }

 

  return (

    <>
      {/* {console.log('searchLngLat:',searchLngLat)} */}

      {showSchedule ? (
        <ScheduleSide changeToSearch={handleAddScenery}  selectedView={selectedView}/>
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
          selectedView={selectedView}/>
          
        </Autocomplete>
      )}
      {console.log('Initial showSchedule:',showSchedule)}
      {console.log('Initial ShowSearchView:',showSearchView)}

      <Map searchLngLat={searchLngLat}/>
    </>
  )
}

// 這裡代表要套用AdminLayout，取代原本的DefaultLayout
// 要寫在元件的函式之外
ArrangeSchedule.getLayout = function (page) {
  return <AdminLayout>{page}</AdminLayout>
}
