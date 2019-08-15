import React, { Fragment } from 'react'
import './App.css'
import { Navigation, Footer } from "./Components/Layout"
import PageTemplate from './Components/Pages'

function App() {
  return (
    <Fragment>
      <Navigation />
      <PageTemplate />
      <Footer />
    </Fragment>
  );
}

export default App;
