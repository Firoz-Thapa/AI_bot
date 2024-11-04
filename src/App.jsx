import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Main from './components/Main/Main';
import ContextProvider from './context/Context'; // Import the ContextProvider

const App = () => {
  return (
    <div className="app-container">
    <ContextProvider> {/* Wrap the application in ContextProvider */}
      <Sidebar />
      <Main />
    </ContextProvider>
    </div>
  );
};

export default App;
