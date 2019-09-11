import React from 'react';
import Structure from './Components/Layout/Structure';
import { Blog, Contact, Events, Home, Media, PageNotFound } from './Components/Pages'
import { useRoutes } from 'hookrouter';

const pages = {
  "/": () => {
    return { navValue: 'home', component: <Home /> }
  },
  "/blog": () => {
    return { navValue: 'blog', component: <Blog /> }
  },
  "/contact": () => {
    return { navValue: 'contact', component: <Contact />}
  },
  "/events": () => {
    return { navValue: 'events', component: <Events /> }
  },
  "/home": () => {
    return { navValue: 'home', component: <Home /> }
  },
  "/media": () => {
    return { navValue: 'media', component: <Media />}
  }
}

function App() {
  const route = useRoutes(pages);
  return (
      <>
        {
          route && <Structure location={route} />
        }
        {
          !route && <PageNotFound />
        }
      </>
  );
}

export default App;
