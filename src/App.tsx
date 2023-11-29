import React, { lazy, Suspense } from 'react';

import './Styles/App.scss';
import { Route, Routes } from 'react-router-dom';

import AnimatedCursor from 'react-animated-cursor';

import { Footer } from './Components/Footer/ui/Footer';

import { Header } from './Components/Header/ui/Header';

import { Main } from './Pages/Main/Main';

const About = lazy(() => import(/* webpackChunkName: "about" */ './Pages/About/About'));
const HairColoring = lazy(
  () => import(/* webpackChunkName: "HairColoring" */ './Pages/HairColoring/HairColoring'),
);

function App() {
  return (
    <>
      <AnimatedCursor
        color="169, 105, 63"
        innerScale={2}
        innerSize={20}
        outerAlpha={1}
        outerScale={0}
        outerSize={0}
        innerStyle={{
          mixBlendMode: 'difference',
        }}
      />
      <div className="App">
        <hr className="main__line" />
        <hr className="main__line" />
        <Header />
        <Suspense fallback={(
          <div className="loader__wrapper">
            <div className="loader" />
          </div>
        )}
        >
          <Routes>
            <Route element={<Main />} path="/" />
            <Route element={<About />} path="/about-us" />
            <Route element={<HairColoring />} path="/services" />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </>
  );
}

export default App;
