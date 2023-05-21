import './App.css'
import Button from './components/Button'
import Comment from './components/Comment';
import Heading from './components/Heading';
import List from './components/List';
import Card from './components/Card';

function App() {
  return <div>
    <Heading text="This is obviously is a heading" />
    <Comment name="Ravi Reuel Paul Fernandez" email="rrpfernandez@gmail.com" body="God is good!"/>
    <List items={["apple","peach","orange"]} />
    {/* <Card title="The Lone Drummer" subtitle="The story of Wewel" description="A guy who grew up thinking that he wasn't a normal individual, but not above average." image={""} */}
    <Button label="Click me" onClick={() => alert("Button pressed!")} />
  </div>
}

export default App;