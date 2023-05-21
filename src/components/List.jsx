function List({items}) {
  return <ul>{items.map((item, index) => <li key={index}>{item}</li>)}</ul> //iterates from items array
}

export default List;