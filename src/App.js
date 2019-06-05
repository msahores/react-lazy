import React, {Component, lazy, Suspense } from 'react';
import './App.css';
const MyComp = lazy(()=> import('./components/myComp'));

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Suspense fallback={<div>Loading...</div>}>
        <MyComp />
      </Suspense>
      </header>
    </div>
  );
}

export default App;
