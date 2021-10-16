import React from 'react'
import Button from './common/Button'
import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`

body{
  background: white;
  min-height: 100vh;
  margin: 0;
  color: black;
  font-family: fot-chiaro-std, sans-serif;
  font-weight: 400;
  font-style: normal;
}
`

const App = () => {
  return (
    <>
      <GlobalStyle/>
      <h1>App</h1>
      <Button secondary>
        Test</Button>
      
    </>
  )
}

export default App

