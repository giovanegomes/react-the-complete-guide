import React, { useCallback, useState } from 'react';

import './App.css';
import DemoOutput from './components/Demo/DemoOutput';
import Button from './components/UI/Button/Button';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToogle, setAllowToogle] = useState(false);

  console.log('APP RUNNING');

  const toogleParagraphHandler = useCallback(() => {
    if (allowToogle) {
      setShowParagraph((previousShowParagraph) => !previousShowParagraph);
    }
  }, [allowToogle]);

  const allowToogleHandler = () => {
    setAllowToogle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph}/>
      <Button onClick={allowToogleHandler}>Allow Toogle</Button>
      <Button onClick={toogleParagraphHandler}>Toogle Paragraph</Button>
    </div>
  );
}

export default App;
