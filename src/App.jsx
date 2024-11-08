import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Main from './components/Main/Main';
import ContextProvider from './context/Context'; 

const App = () => {
  return (
    <div className="app-container">
    <ContextProvider> {}
      <Sidebar />
      <Main />
    </ContextProvider>
    </div>
  );
};

export default App;



