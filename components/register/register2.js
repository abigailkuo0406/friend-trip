import React from 'react'

import styles from './register2.module.css'
export default function RegisterCard() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.cardbody}>
          <div>
            <h2>深入資料</h2>
          </div>
          <div className={styles.inputstyle}>
            <h5 className={styles.inputlabel}>身高</h5>
            <input type="text" className={styles.input}></input>
          </div>
          <div className={styles.inputstyle}>
            <h5 className={styles.inputlabel}>體重</h5>
            <input type="text" className={styles.input}></input>
          </div>
          <div className={styles.inputstyle}>
            <h5 className={styles.inputlabel}>星座</h5>
            <select>
              <option>請選擇你的星座</option>
              <option>星座</option>
              <option>Cat</option>
              <option>Hamster</option>
              <option>Parrot</option>
              <option>Spider</option>
              <option>Goldfish</option>
            </select>
          </div>
          <div className={styles.inputstyle}>
            <h5 className={styles.inputlabel}>血型</h5>
            <select>
              <option>請選擇你最愛的寵物</option>
              <option>A</option>
              <option>B</option>
              <option>O</option>
              <option>AB</option>
            </select>
          </div>
          <div className={styles.inputstyle}>
            <h5 className={styles.inputlabel}>抽菸</h5>
            <input
              type="radio"
              id="html"
              name="fav_language"
              value="HTML"
            ></input>
            <label htmlfor="html">有</label>
            <input
              type="radio"
              id="html"
              name="fav_language"
              value="HTML"
            ></input>
            <label htmlfor="html">沒有</label>
          </div>
          <div className={styles.inputstyle}>
            <h5 className={styles.inputlabel}>酒精</h5>
            <input
              type="radio"
              id="html"
              name="fav_language"
              value="HTML"
            ></input>
            <label htmlfor="html">滴酒不沾</label>
            <input
              type="radio"
              id="html"
              name="fav_language"
              value="HTML"
            ></input>
            <label htmlfor="html">小酌</label>
            <input
              type="radio"
              id="html"
              name="fav_language"
              value="HTML"
            ></input>
            <label htmlfor="html">酒豪</label>
          </div>
          <div className={styles.inputstyle}>
            <h5 className={styles.inputlabel}>教育程度</h5>
            <input
              type="radio"
              id="html"
              name="fav_language"
              value="HTML"
            ></input>
            <label htmlfor="html">男</label>
            <input
              type="radio"
              id="html"
              name="fav_language"
              value="HTML"
            ></input>
            <label htmlfor="html">女</label>
          </div>
          <div className={styles.inputstyle}>
            <h5 className={styles.inputlabel}>工作</h5>
            <input type="text" className={styles.input}></input>
          </div>
          <div className={styles.inputstyle}>
            <label htmlfor="w3review" className={styles.inputlabel}>
              自我介紹
            </label>
            <textarea id="w3review" name="w3review" rows="4" cols="50">
              自我介紹轎討美例平爸的美今記與。王進將采五處是常一主城度斜有許誓我聞人懼沾至攸站…；中別光摯現觀樹角討撒此聲法！穩在士致猿到受禾陳方柴弟陳度上報傾實體嘶死至過…或望白梓場了了知們妞間跟，一西民式速盎水在對龍進
            </textarea>
          </div>
        </div>
      </div>
    </>
  )
}
