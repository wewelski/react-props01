function Link({text, url, blank}) {
  return <a href={url} target={blank}>
    <h5>{text}</h5>
  </a>
}

export default Link