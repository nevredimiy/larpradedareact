import React, { useEffect, useState } from 'react';

const App = () => {
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    const handleClick = () => {
      setClickCount(prevCount => prevCount + 1);
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div>
      <h1>Click Count: {clickCount}</h1>
    </div>
  );
};

export default App;
