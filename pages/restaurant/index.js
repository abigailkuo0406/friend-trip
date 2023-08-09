import React from 'react'
import AdminLayout from '@/components/layout/admin-layout'
import { useEffect, useState, useContext } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import SelectOption from '@/components/common/input/select-option'
import Btn from '@/components/common/button/btn-normal'
import RestIntro from '@/components/restaurant/restaurant-intro'
import AuthContext from '@/context/AuthContext'
import IndexSty from './restaurant.module.css'
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md'
import Swal from 'sweetalert2'


// 引入元件
import RestaurantList from '@/components/restaurant/restaurant-item'
import { icon } from '@fortawesome/fontawesome-svg-core'

export default function Rest() {
  const router = useRouter()
  const { auth } = useContext(AuthContext)

  // 設定Modal開關
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [restaurants, setRestaurants] = useState({
    redirect: '',
    totalRows: 0,
    perPage: 4,
    totalPages: 0,
    page: 1,
    rows: [],
  })

  const [area, setArea] = useState({
    totalRows: 0,
    rows: [],
  })

  const [meal, setMeal] = useState({
    totalRows: 0,
    rows: [],
  })

  const [searchCity, setSearchCity] = useState('')
  const [searchMeal, setSearchMeal] = useState('')

  // 依據querystring(?page=取得對應頁面與資料
  useEffect(() => {
    setSearchCity(router.query.city)
    setSearchMeal(router.query.meal)

    const usp = new URLSearchParams(router.query)

    // API串接
    fetch(`http://localhost:3002/restaurant?${usp.toString()}`, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + auth.token,
      },
    })
      .then((r) => r.json())
      .then((restaurantsData) => {
        setRestaurants(restaurantsData)
      })
  }, [router.query])

  useEffect(() => {
    //取得地區資料

    fetch(`http://localhost:3002/area`, {
      method: 'GET',
    })
      .then((a) => a.json())
      .then((areaData) => {
        setArea(areaData)
      })

    //取得料理類型資料
    fetch(`http://localhost:3002/restmeal`, {
      method: 'GET',
    })
      .then((a) => a.json())
      .then((mealData) => {
        setMeal(mealData)
      })
  }, [])

  //設定地區options
  let areaGroup = ['請選擇地區']
  if (area.totalRows > 0) {
    for (let i = 0; i < area.rows.length; i++) {
      const areaItem = area.rows[i].area_name
      areaGroup.push(areaItem)
    }
  }

  //設定料理類型options
  let mealGroup = ['請選擇料理']
  if (meal.totalRows > 0) {
    for (let i = 0; i < meal.rows.length; i++) {
      const mealItem = meal.rows[i].rest_meal
      mealGroup.push(mealItem)
    }
  }

  // select-option
  const [inputValueArea, setInputValueArea] = useState('')
  const [inputNameArea, setInputNameArea] = useState('')

  const [inputValueMeal, setInputValueMeal] = useState('')
  const [inputNameMeal, setInputNameMeal] = useState('')

  // 搜尋功能

  const searchRestaurant = (e) => {
    e.preventDefault()

    if (inputValueArea == undefined && inputValueMeal == undefined) {
      // alert('請選擇搜尋條件')
      Swal.fire({
        width: 400,
        text: '請選擇搜尋條件',
        icon: 'warning',
        iconColor: '#FABCBF',
        color: '#674C87',
        confirmButtonColor: '#674C87',
        showConfirmButton: true,
        // timer: 1500,
      })
      // console.log('aa')
    } else if (
      inputValueArea != '請選擇地區' &&
      inputValueArea != undefined &&
      inputValueMeal == '請選擇料理'
    ) {
      router.push(`?city=${inputValueArea}`)
      // console.log('bb')
    } else if (inputValueArea != '請選擇地區' && inputValueMeal == undefined) {
      router.push(`?city=${inputValueArea}`)
      // console.log('cc')
    } else if (
      inputValueArea == '請選擇地區' &&
      inputValueMeal != '請選擇料理' &&
      inputValueMeal != undefined
    ) {
      router.push(`?meal=${inputValueMeal}`)
      // console.log('dd')
    } else if (inputValueArea == undefined && inputValueMeal != '請選擇料理') {
      router.push(`?meal=${inputValueMeal}`)
      // console.log('ee')
    } else if (
      inputValueArea != '請選擇地區' &&
      inputValueMeal != '請選擇料理' &&
      inputValueArea != undefined &&
      inputValueMeal != undefined
    ) {
      router.push(`?city=${inputValueArea}&&meal=${inputValueMeal}`)
      console.log('ff')
    } else {
      router.push(``)
      // console.log('zz')
    }
  }

  const [rid, setRid] = useState(0)
  const [rName, setRName] = useState()
  const [rAddress, setRAdress] = useState()
  const [rPhone, setRPhone] = useState()
  const [rTime, setRTime] = useState()
  const [rMeal, setRMeal] = useState()
  const [rClass, setRClass] = useState()
  const [rIntro, setRIntro] = useState()
  const [rImg, setRImg] = useState()

  const showModal = (
    modalState,
    rid,
    rName,
    rAddress,
    rPhone,
    rTime,
    rMeal,
    rClass,
    rIntro,
    rImg
  ) => {
    setRid(rid)
    setRName(rName)
    setRAdress(rAddress)
    setRPhone(rPhone)
    setRTime(rTime)
    setRMeal(rMeal)
    setRClass(rClass)
    setRIntro(rIntro)
    setRImg(rImg)
  }

  return (
    <>
      <div className="container">
        <h1 className={IndexSty.title}>精選餐廳</h1>

        <form className="row d-flex" onSubmit={searchRestaurant}>
          <div className="col-5 d-flex align-items-center justify-content-between">
            <SelectOption
              id="area"
              label="地區"
              name="area"
              // selectedDefault='請選擇地區' //預設選項，可不填，填寫 value
              valueGroup={areaGroup}
              optionGroup={areaGroup}
              getValue={setInputValueArea}
              getName={setInputNameArea}
              width="input-width-10rem" // 調整 <input> 寬度，到 style.sass 挑選適合的 input-width 前綴 class 或自行新增
              addClassforLabel="try1" // 如果要在 label 添加 class
              addClassforSelect="try2" // 如果要在 Select 添加 class
              addClassforOption="try3" // 如果要在 Option 添加 class
            ></SelectOption>

            <SelectOption
              id="restaurantMeal"
              label="料理類型"
              name="restaurantMeal"
              // selectedDefault="請選擇料理類型" //預設選項，可不填，填寫 value
              valueGroup={mealGroup}
              optionGroup={mealGroup}
              getValue={setInputValueMeal}
              getName={setInputNameMeal}
              width="input-width-10rem" // 調整 <input> 寬度，到 style.sass 挑選適合的 input-width 前綴 class 或自行新增
              addClassforLabel="try1" // 如果要在 label 添加 class
              addClassforSelect="try2" // 如果要在 Select 添加 class
              addClassforOption="try3" // 如果要在 Option 添加 class
            ></SelectOption>
          </div>
          <div className="col-7 d-flex align-items-center justify-content-start">
            <Btn
              type="submit"
              btnText="搜尋"
              addClassforButton={`btn-dark ms-4`}
            ></Btn>
          </div>
        </form>
        {restaurants.totalRows > 0 ? (
          restaurants.rows.map((v, i) => {
            return (
              <div key={v.RestID}>
                <RestaurantList
                  restImg={v.RestImg}
                  restName={v.RestName}
                  restIntro={v.RestIntro}
                  restRid={v.RestID}
                  restAddress={v.RestAdress}
                  restPhone={v.RestPhone}
                  restTime={v.RestTime}
                  restMeal={v.RestMeal}
                  restClass={v.RestClass}
                  restArea={v.RestArea}
                  modalChange={showModal}
                />
              </div>
            )
          })
        ) : (
          <p>無符合條件之餐廳</p>
        )}

          <RestIntro
            restId={rid}
            restName={rName}
            restAddress={rAddress}
            restPhone={rPhone}
            restTime={rTime}
            restMeal={rMeal}
            restClass={rClass}
            restIntro={rIntro}
            restImg={rImg}
          />

        <div className="itin-card-pagination">
          <nav aria-label="Page navigation">
            <ul class="pagination">
              <li class={`page-item`}>
                <Link
                  className={`page-link ${IndexSty.restItem}`}
                  href={'?' + new URLSearchParams('page=1').toString()}
                  aria-label="Previous"
                >
                  <span aria-hidden="true">&laquo;</span>
                </Link>
              </li>
              <li class="page-item">
                <Link
                  className={`page-link ${IndexSty.restItem}`}
                  href={
                    '?' +
                    new URLSearchParams(
                      parseInt(restaurants.page) > 1
                        ? `page=${parseInt(restaurants.page) - 1}`
                        : 'page=1'
                    ).toString()
                  }
                  aria-label="Previous"
                >
                  <span aria-hidden="true">
                    <MdNavigateBefore />
                  </span>
                </Link>
              </li>

              {Array(5)
                .fill(1)
                .map((v, i) => {
                  const p = restaurants.page - 2 + i
                  const query = { ...router.query }
                  if (p < 1 || p > restaurants.totalPages) return
                  query.page = p
                  return (
                    <li
                      className={
                        `page-item ${IndexSty.restItem} ` +
                        (p === restaurants.page ? 'active' : '')
                      }
                      key={p}
                    >
                      <Link
                        className={`page-link ${IndexSty.restItem}`}
                        href={'?' + new URLSearchParams(query).toString()}
                      >
                        {p}
                      </Link>
                    </li>
                  )
                })}
              <li class="page-item">
                <Link
                  className={`page-link ${IndexSty.restItem}`}
                  href={
                    '?' +
                    new URLSearchParams(
                      parseInt(restaurants.page) < restaurants.totalPages
                        ? `page=${parseInt(restaurants.page) + 1}`
                        : `page=${restaurants.totalPages}`
                    ).toString()
                  }
                  aria-label="Previous"
                >
                  <span aria-hidden="true">
                    <MdNavigateNext />
                  </span>
                </Link>
              </li>
              <li class="page-item">
                <Link
                  className={`page-link ${IndexSty.restItem}`}
                  href={
                    '?' +
                    new URLSearchParams(
                      `page=${restaurants.totalPages}`
                    ).toString()
                  }
                  aria-label="Next"
                >
                  <span aria-hidden="true">&raquo;</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}
Rest.getLayout = function (page) {
  return <AdminLayout>{page}</AdminLayout>
}
