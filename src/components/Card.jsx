function Card({title, subtitle, description, image}) {
  return <div className="card-container">
    <h1>{title}</h1>
    <h3>{subtitle}</h3>
    <p>{description}</p>
    <img src={image} alt="an image" />
  </div>
}

export default Card;