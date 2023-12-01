import './App.css'
import {AddTodo, TodoList} from './components'

function App() {

  return (
    <>
      <div className='bg-grey-600'>
        <h1>Learn about redux toolkit</h1>
        <AddTodo />
        <TodoList />
      </div>
    </>
  );
}

export default App
