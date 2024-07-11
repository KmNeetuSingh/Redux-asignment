import { useState } from 'react'
import { store } from './redux/store'
function App() {
    const [up,setup] = useState(0)
     store.subscribe (()=>{
      console.log (store.getState())
      setup(up+1)
     })
  return (
    <>
      <div>
      {JSON.stringify(store.getState())}
      <button onClick={()=>store.dispatch({type:'ADD'})}> + </button>
      <button onClick={()=>store.dispatch({type:'SUB'})}> - </button>
      
      
      
      </div>
    </>
  )
}

export default App
