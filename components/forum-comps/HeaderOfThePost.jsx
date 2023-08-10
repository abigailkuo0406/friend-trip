import AvatarAndNameOfPostAuthor from './AvatarAndNameOfPostAuthor'
import moment from 'moment/moment'

function HeaderOfThePost({
  avatarOfPostAuthor,
  authorOfThePost,
  dateOfPublishOfPost,
  isLoggedIn,
  postMember_id,
  post_id,
  setDeletemodalStatus,
}) {
  const rawDateOfPublishOfPost = dateOfPublishOfPost
  const formattedDate = moment(rawDateOfPublishOfPost).format('YYYY-MM-DD')

  function deletePost() {
    console.log('post_id', post_id, 'member_id', isLoggedIn)
    setDeletemodalStatus('block')
    // axios
    //   .post('http://localhost:3002/delete-a-post-of-mine/delete-this-post', {
    //     post_id: post_id,
    //     postMember_id: isLoggedIn,
    //   })
    //   .then((r) => {
    //     // console.log(r.message)
    //     console.log(r.data.message)
    //     if(r.data.message == 'deleted'){
    //       alert('資料成功刪除')
    //     }
    //   })
  }
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center my-md-4">
        <div className="d-flex align-items-center">
          <AvatarAndNameOfPostAuthor
            avatarOfPostAuthor={avatarOfPostAuthor}
            authorOfThePost={authorOfThePost}
          />
          {/* 判斷登入的會員是不是發文者，是的話就顯示垃圾桶符號 */}
          {isLoggedIn == postMember_id ? (
            <div
              role="presentation"
              onClick={deletePost}
              style={{ cursor: 'pointer' }}
            >
              🗑️
            </div>
          ) : (
            ''
          )}
        </div>
        <time className="mb-0">發文時間：{formattedDate}</time>
      </div>
    </div>
  )
}

export default HeaderOfThePost
