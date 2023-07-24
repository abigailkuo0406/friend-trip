import React from 'react'
import AdminLayout from '@/components/layout/admin-layout'
import { useEffect, useState, useContext } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import SelectOption from '@/components/common/input/select-option'



// 引入元件
import RestaurantList from '@/components/restaurant/restaurant-list'

export default function Rest() {
  const router = useRouter()

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


  // 依據querystring(?page=取得對應頁面與資料
  useEffect(() => {
    const usp = new URLSearchParams(router.query)

    // API串接
    fetch(`http://localhost:3002/restaurant?${usp.toString()}`, {
      method: 'GET',
    })
      .then((r) => r.json())
      .then((restaurantsData) => {
        setRestaurants(restaurantsData)
      })
  }, [router.query])


  //取得地區資料
  useEffect(() => {
    fetch(`http://localhost:3002/area`, {
      method: 'GET',

    })
      .then((a) => a.json())
      .then((areaData) => {
        setArea(areaData)

      })

  }, [])

  //設定地區options
  let areaGroup = []
  if (area.totalRows > 0) {
    for (let i = 0; i < area.rows.length; i++) {
      const areaItem = area.rows[i].area_name
      areaGroup.push(areaItem)
    }
  } else {
    areaGroup = ['']
  }


  //取得料理類型資料
  useEffect(() => {
    fetch(`http://localhost:3002/restmeal`, {
      method: 'GET',

    })
      .then((a) => a.json())
      .then((mealData) => {
        setMeal(mealData)

      })

  }, [])

  //設定地區options
  let mealGroup = []
  if (meal.totalRows > 0) {
    for (let i = 0; i < meal.rows.length; i++) {
      const mealItem = meal.rows[i].rest_meal
      mealGroup.push(mealItem)
    }
  } else {
    mealGroup = ['']
  }

  // select-option
  const [inputValueArea, setInputValueArea] = useState('')
  const [inputNameArea, setInputNameArea] = useState('')

  const [inputValueMeal, setInputValueMeal] = useState('')
  const [inputNameMeal, setInputNameMeal] = useState('')


  return (
    <>
      <div className="container">
        <h1>精選餐廳</h1>

        <SelectOption
          id="area"
          label="地區"
          name="area"
          selectedDefault="pasta" //預設選項，可不填，填寫 value
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
          selectedDefault="pasta" //預設選項，可不填，填寫 value
          valueGroup={mealGroup}
          optionGroup={mealGroup}
          getValue={setInputValueMeal}
          getName={setInputNameMeal}
          width="input-width-10rem" // 調整 <input> 寬度，到 style.sass 挑選適合的 input-width 前綴 class 或自行新增
          addClassforLabel="try1" // 如果要在 label 添加 class
          addClassforSelect="try2" // 如果要在 Select 添加 class
          addClassforOption="try3" // 如果要在 Option 添加 class
        ></SelectOption>


        {restaurants.rows.map((v, i) => {
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

              />
            </div>
          )
        })}
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <Link
                className="page-link"
                href={"?" + new URLSearchParams('page=1').toString()}
                aria-label="Previous"
              >
                <span aria-hidden="true">&laquo;</span>

              </Link>

            </li>
            <li class="page-item">
              <Link
                className="page-link"
                href={"?" +
                  new URLSearchParams(parseInt(restaurants.page) > 1
                    ?
                    `page=${parseInt(restaurants.page) - 1}`
                    :
                    'page=1').toString()}
                aria-label="Previous"
              >
                <span aria-hidden="true">前一頁</span>

              </Link>

            </li>

            {Array(5)
              .fill(1)
              .map((v, i) => {
                const p = restaurants.page - 2 + i;
                const query = { ...router.query };
                if (p < 1 || p > restaurants.totalPages) return;
                query.page = p;
                return (
                  <li
                    className={
                      `page-item ` + (p === restaurants.page ? "active" : "")
                    }
                    key={p}
                  >
                    <Link
                      className="page-link"
                      href={"?" + new URLSearchParams(query).toString()}
                    >
                      {p}
                    </Link>
                  </li>
                );
              })}
            <li class="page-item">
              <Link
                className="page-link"
                href={"?" +
                  new URLSearchParams(parseInt(restaurants.page) < restaurants.totalPages
                    ?
                    `page=${parseInt(restaurants.page) + 1}`
                    :
                    `page=${restaurants.totalPages}`).toString()}
                aria-label="Previous"
              >
                <span aria-hidden="true">下一頁</span>

              </Link>

            </li>
            <li class="page-item">
              <Link
                className="page-link"
                href={"?" + new URLSearchParams(`page=${restaurants.totalPages}`).toString()}
                aria-label="Next"
              >
                <span aria-hidden="true">&raquo;</span>

              </Link>

            </li>
            {/* <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li> */}
          </ul>
        </nav>
      </div>
    </>
  )
}
Rest.getLayout = function (page) {
  return <AdminLayout>{page}</AdminLayout>
}
