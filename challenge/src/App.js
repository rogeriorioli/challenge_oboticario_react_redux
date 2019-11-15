import React from 'react';
import GlobalStyle from './styles/global';
import Layouts from './Layouts';
import Product from './components/Product';


function App() {
  return (
    <>
      <Layouts>
        <Product/>
      </Layouts>
       <GlobalStyle/>
    </>
  );
}

export default App;
