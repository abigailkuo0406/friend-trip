function DeleteAndEditForThePost({ isLogginUserAuthorOfThePost }) {
  return <div>{isLogginUserAuthorOfThePost && '🗑️ ✏️'}</div>
}

export default DeleteAndEditForThePost
