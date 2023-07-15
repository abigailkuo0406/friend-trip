import { useState, useEffect, useRef } from 'react'


export default function SearchInput({  }) {
 


  return (
    <>
      <input
        className="form-control me-2 mb-3"
        type="text"
        placeholder="請輸入城市"
      />
      <button className="btn btn-outline-success" type="submit" >
        搜尋
      </button>
    </>
  );
}
