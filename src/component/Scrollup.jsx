import React, { useState } from 'react';

function MoveToTopButton() {
  const [isScrolling, setIsScrolling] = useState(false);

  const handleClick = () => {
    setIsScrolling(true);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsScrolling(false);
    }, 0);
  };

  return (
    <button onClick={handleClick} style={{ height:'40px',width:'40px',position: 'fixed', bottom: 0, right: 10, padding: '15px', backgroundColor: 'red', color: '#fff', cursor: 'pointer',border:'none' ,zIndex:'100'}}>
      {isScrolling ? 'Scanning...' : '^'}
    </button>
  );
}

export default MoveToTopButton;