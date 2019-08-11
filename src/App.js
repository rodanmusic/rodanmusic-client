import React, { Fragment } from 'react'
import './App.css'
import { Header, Footer } from "./Components/Layout"
import Pages from './Components/Pages'
// import logo from './logo.svg';

function App() {
  return (
    <Fragment>
      <Header />
        <Pages />
      <Footer />
    </Fragment>
  );
}

export default App;
