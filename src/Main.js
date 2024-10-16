import React from 'react';

function Main({ children }) {
  return (
    <main>
      {children} {/* This will render the Routes defined in App.js */}
    </main>
  );
}

export default Main;
