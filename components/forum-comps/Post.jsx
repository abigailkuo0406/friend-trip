import Image from 'next/image'
import styles from './Post.module.css'
import { BsEmojiKiss } from 'react-icons/bs'
import Msg from './Msg'
import Link from 'next/link'
import AvatarAndNameOfPostAuthor from './AvatarAndNameOfPostAuthor'
import DeleteAndEditForThePost from './DeleteAndEditForThePost'
import HeaderOfThePost from './HeaderOfThePost'
import ImgForThePost from './ImgForThePost'
import ArticleOfPost from './ArticleOfPost'
import { ClassNames } from '@emotion/react'
import React, { useEffect, useState } from 'react'
import ShowInputOnPage from './ShowInputOnPage'
import axios from 'axios'

export default function Post({
  id,
  avatarOfPostAuthor,
  authorOfThePost,
  isLogginUserAuthorOfThePost,
  dateOfPublishOfPost,
  imgOfPost,
  articleOfPost,
}) {
  const [comment,setComment]=useState('')
  const [comments,setComments]=useState([])
  useEffect(()=>{
    
  },[])
  function sendMsg(leftMsg) {
    axios
      .post('sample', { leaveMsg: leftMsg })
      .then((d) => console.log(d))
      .catch((err) => console.log(err))
  }
  return (
    <div className="bg-light mt-4 p-5 rounded-5">
      <HeaderOfThePost
        avatarOfPostAuthor={avatarOfPostAuthor}
        authorOfThePost={authorOfThePost}
        isLogginUserAuthorOfThePost={isLogginUserAuthorOfThePost}
        dateOfPublishOfPost={dateOfPublishOfPost}
      />
      <ImgForThePost imgSrc={imgOfPost} className="my-md-4" />
      <ArticleOfPost content={articleOfPost} className="my-md-4" />
      <ShowInputOnPage sendMsg={sendMsg} />
    </div>
  )
}
