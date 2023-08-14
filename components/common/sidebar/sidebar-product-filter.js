import React, { useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import { BsBoxArrowUpLeft, BsFileEarmarkCheck } from "react-icons/bs";

export default function SidebarProductFilter() {
  const router = useRouter()
  useEffect(()=>{

    // 先去除所有的反白
    let ulElement1 = document.getElementById('CateUl')
    if(ulElement1){
      const cateLinks = ulElement1.querySelectorAll('a.li-click')
      cateLinks.forEach(link => link.classList.remove('li-click'))
    }
    

    // 增加新的反白
    let node = '';
    switch(router.query.category){
      case 'all':
        node = document.getElementById('AllLi')
        node.classList.add("li-click")
        break;
      case '周邊':
        node = document.getElementById('PeripheryLi')
        node.classList.add("li-click")
        break;
      case '旅行':
        node = document.getElementById('TravelLi')
        node.classList.add("li-click")
        break;
      case '票券':
        node = document.getElementById('TicketLi')
        node.classList.add("li-click")
        break;
      case '禮品':
        node = document.getElementById('GiftLi')
        node.classList.add("li-click")
        break;
    }

    if(router.query.category != undefined &&  router.query.category != ""){
      let node = document.getElementById('CateUl')
      let expand = document.createAttribute("aria-expanded")
       expand.value = true
       node.setAttributeNode(expand)
       node.classList.add("show")
    } else if (router.query.category == undefined || router.query.category == ""){
      let node = document.getElementById('CateUl')
      let expand = document.createAttribute("aria-expanded")
       expand.value = false
       node.setAttributeNode(expand)
       node.classList.remove("show")
    }

  },[router.query.category])

  useEffect(()=>{

    // 先去除所有的反白
    let ulElement = document.getElementById('OrderUl')
    if(ulElement){
      const cateLinks = ulElement.querySelectorAll('a.li-click')
      cateLinks.forEach(link => link.classList.remove('li-click'))
    }

    // 增加新的反白
    let node = '';
    switch(router.query.order){
      case 'AtoZ':
        node = document.getElementById('AtoZLi')
        node.classList.add("li-click")
        break;
      case 'ZtoA':
        node = document.getElementById('ZtoALi')
        node.classList.add("li-click")
        break;
      case 'rating':
        node = document.getElementById('RatingLi')
        node.classList.add("li-click")
        break;
    }
    if(router.query.order != undefined && router.query.order != ""){
      let node = document.getElementById('OrderUl')
      let expand = document.createAttribute("aria-expanded")
       expand.value = true
       node.setAttributeNode(expand)
       node.classList.add("show")
    } else if(router.query.order == undefined || router.query.order == ""){
      let node = document.getElementById('OrderUl')
      let expand = document.createAttribute("aria-expanded")
       expand.value = false
       node.setAttributeNode(expand)
       node.classList.remove("show")
    }
    
  },[router.query.order])

  useEffect(()=>{
      if(router.query.category == undefined && router.query.order == undefined && router.query.collection == undefined && router.query.buyagain == undefined)
      {
        
        let ulElement1 = document.getElementById('CollectionLi')
        ulElement1.classList.remove('li-click')
        let node = document.getElementById('AllProduct')
        node.classList.add("li-click")
      } else if (router.query.category != undefined || router.query.order != undefined || router.query.collection != undefined || router.query.buyagain != undefined) {
        let node = document.getElementById('AllProduct')
        node.classList.remove("li-click")
      }
      if(router.query.collection != undefined){
        let ulElement = document.getElementById('AllProduct')
        ulElement.classList.remove('li-click')
        let node = document.getElementById('CollectionLi')
          node.classList.add("li-click")
      } else {
        let node = document.getElementById('CollectionLi')
          node.classList.remove("li-click")
      }
  }, [router.query])

  useEffect(()=>{
   
    if(router.query.collection != undefined || router.query.buyagain != undefined){
    // 先去除所有的反白
    let cateULElement = document.getElementById('CateUl')
    let orderULElement = document.getElementById('OrderUl')
    if(cateULElement && orderULElement){
      const cateLinks = cateULElement.querySelectorAll('a.li-click')
      cateLinks.forEach(link => link.classList.remove('li-click'))
      const orderLinks = orderULElement.querySelectorAll('a.li-click')
      orderLinks.forEach(link => link.classList.remove('li-click'))
    }
  
    let catenode = document.getElementById('CateUl')
    let cateexpand = document.createAttribute("aria-expanded")
    cateexpand.value = false
    catenode.setAttributeNode(cateexpand)
    catenode.classList.remove("show")

    let ordernode = document.getElementById('OrderUl')
    let orderexpand = document.createAttribute("aria-expanded")
    orderexpand.value = false
    ordernode.setAttributeNode(orderexpand)
    ordernode.classList.remove("show")
  
  }
    // 增加新的反白
    if(router.query.collection != undefined){
      let allElement = document.getElementById('AllProduct')
      allElement.classList.remove('li-click')
      let buyElement = document.getElementById('BuyagainLi')
      buyElement.classList.remove('li-click')
      let node = document.getElementById('CollectionLi')
        node.classList.add("li-click")
    } else {
      let node = document.getElementById('CollectionLi')
        node.classList.remove("li-click")
    }

    if(router.query.buyagain != undefined){
      let allElement = document.getElementById('AllProduct')
      allElement.classList.remove('li-click')
      let collElement = document.getElementById('CollectionLi')
      collElement.classList.remove('li-click')
      let node = document.getElementById('BuyagainLi')
        node.classList.add("li-click")
    } else {
      let node = document.getElementById('BuyagainLi')
        node.classList.remove("li-click")
    }

  },[router.query.collection, router.query.buyagain])

  return (
    <>
      <div id="ProductSide" className="card">
        <div className="card-body nav-body">
          <nav className="navbar">
            <div className="container-fluid">
              <div className="" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a id="AllProduct" className="nav-link active li-click" aria-current="page" onClick={()=>{
                          localStorage.removeItem("searchProduct");
                          location.href="/product?page=1"
                          localStorage.setItem("inputClear", true);
                        }}>
                      全部商品
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      分類
                    </a>
                    <ul id="CateUl" className="dropdown-menu">
                    <li>
                        <a id="AllLi" className="dropdown-item" onClick={()=>{
                           if (router.pathname === '/product') {
                            router.push({
                              query: {
                                order: router.query.order,
                                category: 'all',
                                keyword: router.query.keyword,
                                page: "1",
                              },
                            });
                          } else {
                            window.location.href = '/product?category=all';
                          }
                        }}>
                          全部分類
                        </a>
                      </li>
                      <li>
                        <a id="PeripheryLi" className="dropdown-item" onClick={()=>{
                           if (router.pathname === '/product') {
                            router.push({
                              query: {
                                order: router.query.order,
                                category: '周邊',
                                keyword: router.query.keyword,
                                page: "1",
                              },
                            });
                          } else {
                            window.location.href = '/product?category=周邊';
                          }
                        }}>
                          FriendTrip 周邊
                        </a>
                      </li>
                      <li>
                        <a id="TravelLi" className="dropdown-item" onClick={()=>{
                         if (router.pathname === '/product') {
                            router.push({
                              query: {
                                order: router.query.order,
                                category: '旅行',
                                keyword: router.query.keyword,
                                page: "1",
                              },
                            });
                          } else {
                            window.location.href = '/product?category=旅行';
                          }
                        }}>
                          旅行小物
                        </a>
                      </li>
                      <li>
                        <a id="TicketLi" className="dropdown-item" onClick={()=>{
                          if (router.pathname === '/product') {
                            router.push({
                              query: {
                                order: router.query.order,
                                category: '票券',
                                keyword: router.query.keyword,
                                page: "1",
                              },
                            });
                          } else {
                            window.location.href = '/product?category=票券';
                          }
                        }}>
                          優惠票券
                        </a>
                      </li>
                      <li>
                        <a id="GiftLi" className="dropdown-item" onClick={()=>{
                          if (router.pathname === '/product') {
                            router.push({
                              query: {
                                order: router.query.order,
                                category: '禮品',
                                keyword: router.query.keyword,
                                page: "1",
                              },
                            });
                          } else {
                            window.location.href = '/product?category=禮品';
                          }
                        }}>
                          送禮禮品
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      排序
                    </a>
                    <ul id="OrderUl" className="dropdown-menu">
                      <li>
                        <a id="AtoZLi" className="dropdown-item" onClick={()=>{
                          if (router.pathname === '/product') {
                            router.push({
                              query: {
                                order: "AtoZ",
                                category: router.query.category != undefined ? router.query.category : "all",
                                keyword: router.query.keyword,
                                page: "1",
                              },
                            });
                          } else {
                            window.location.href = '/product?order=AtoZ&category=all';
                          }
                        }}>
                          金額由小至大
                        </a>
                      </li>
                      <li>
                        <a id="ZtoALi" className="dropdown-item" onClick={()=>{
                          if (router.pathname === '/product') {
                            router.push({
                              query: {
                                order: "ZtoA",
                                category: router.query.category != undefined ? router.query.category : "all",
                                keyword: router.query.keyword,
                                page: "1",
                              },
                            });
                          } else {
                            window.location.href = '/product?order=ZtoA&category=all';
                          }
                        }}>
                          金額由大至小
                        </a>
                      </li>
                      <li>
                        <a id="RatingLi" className="dropdown-item" onClick={()=>{
                          if (router.pathname === '/product') {
                            router.push({
                              query: {
                                order: "rating",
                                category: router.query.category != undefined ? router.query.category : "all",
                                keyword: router.query.keyword,
                                page: "1",
                              },
                            });
                          } else {
                            window.location.href = '/product?order=rating&category=all';
                          }
                        }}>
                          評價最高
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a id="CollectionLi" className="nav-link" onClick={()=>{
                          if (router.pathname === '/product') {
                            router.push({
                              query: {
                                collection: "true",
                                keyword: router.query.keyword,
                                page: "1",
                              },
                            });
                          } else {
                            window.location.href = '/product?collection=true';
                          }
                        }}>
                      收藏商品
                    </a>
                  </li>
                  <li className="nav-item">
                    <a id="BuyagainLi" className="nav-link" onClick={()=>{
                          if (router.pathname === '/product') {
                            router.push({
                              query: {
                                buyagain: "true",
                                keyword: router.query.keyword,
                                page: "1",
                              },
                            });
                          } else {
                            window.location.href = '/product?buyagain=true';
                          }
                        }}>
                      再買一次
                    </a>
                  </li>
                  <li className="nav-item">
                    <a id="BackIndexLi" className="nav-link" onClick={()=>{
                      router.push({
                        pathname: '../'
                      })}}>
                      返回首頁 <BsBoxArrowUpLeft></BsBoxArrowUpLeft>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a id="BackIndexLi" className="nav-link" onClick={()=>{
                      router.push({
                        pathname: '/product/order',
                        query: {
                                status: "all",
                              },

                      })}}>
                      歷史訂單 <BsFileEarmarkCheck></BsFileEarmarkCheck>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}
