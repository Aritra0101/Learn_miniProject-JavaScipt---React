import { useState } from 'react'
import UserContextProvider from './contexts/UserContextProvider'
import {Login, Profile} from './components'


function App() {

  return (
    <UserContextProvider>
      <h1> ASC </h1>
      <Login />
      <Profile/>
    </UserContextProvider>
  )
}

export default App
