import useReducer from './useReducer.js'
import useState from './useState.js'

function App() {
  // const [count, setCount] = useState(0)

  const reducer = (state, action) => {
    
  }

  const [state, dispatch] = useReducer(reducer, { count: 0, name: "Sam" })

  return (
    <div className="App">
      <button onClick={ () => { setCount(count + 1) } }>Increment</button>
      <h1>{count}</h1>
    </div>
  )
}

export default App
