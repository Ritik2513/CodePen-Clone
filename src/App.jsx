import React from 'react'
import Header from './components/Header'
import Code from './components/Code'
import DataProvider from './context/DataProvider'
import Result from './components/Result'

function App() {
  return (
    <>
    <DataProvider>
    <Header/>
    <Code/>
    <Result/>
    </DataProvider>
    </>
  )
}

export default App