function Comment({name, email, body}) {
  return <div className="msg-container">
    <h3>{name}</h3>
    <p>{email}</p>
    <p>{body}</p>
  </div>
}

export default Comment;