import './App.css'
import Button from './components/Button'
import Comment from './components/Comment';
import Heading from './components/Heading';
import List from './components/List';
import Card from './components/Card';
import List2 from './components/List2';
import Link from './components/Link';

function App() {

  const todos = [
      "Learn React",
      "Learn Redux",
      "Learn GraphQL",
      "Learn MongoDB",
      "Learn NodeJS",
      "Learn Express"
  ]

  return <div>
    <Heading text="This is obviously is a heading" />
    <Comment name="Ravi Reuel Paul Fernandez" email="rrpfernandez@gmail.com" body="God is good!"/>
    <List items={["apple","peach","orange"]} />
    <Card title="Red Panda" subtitle="Yes, a red panda" description="Cuteness of a panda, plus a tail, and a rusty red color" image="https://images.unsplash.com/photo-1619476006517-75d535a84652?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80" />
    <Button label="Click me" onClick={() => alert("Button pressed!")} />
    <List2 todos={todos}/>
    <Link text="My anti-boredom go-to since college days" url="https://www.ebaumsworld.com/" blank="_blank"/>
  </div>
}

export default App;