import React, { Fragment } from 'react'
import './App.css'
import { Navigation } from "./Components/Layout"
import PageTemplate from './Components/Pages'

function App() {
  return (
    <Fragment>
      <Navigation />
      <PageTemplate />
    </Fragment>
  );
}

export default App;
