import "./Card.css"

const styles = {
  card: {
    display: "flex",
    flexDirection: "column",
    padding: "1em",
    width: "400px"
  }
}

function Card({title, subtitle, description, image}) {
  return <article style={styles.card}>
    <div className="container">
      <img src={image} className="redpanda"/>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>{description}</p>
    </div>
  </article>
}

export default Card;