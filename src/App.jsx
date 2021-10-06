import useState from './useState.js'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <button onClick={ () => { setCount(count + 1) } }>Increment</button>
      <h1>{count}</h1>
    </div>
  )
}

export default App
