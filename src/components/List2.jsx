function List2({todos}) {
  return <ul>
    {todos.map((todo, index) => 
    <li key={index}>{todo}</li>
    )}
  </ul>
}

export default List2