import HeaderOfThePost from './HeaderOfThePost'
import ImgForThePost from './ImgForThePost'
import ArticleOfPost from './ArticleOfPost'
import React from 'react'
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
}){
 
  function sendMsg(leftMsg) {
    axios
      .post('http://localhost:3002/show-forum-posts', { leaveMsg: leftMsg })
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
