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
    <button onClick={handleClick} className="gotop"style={{ height:'50px',width:'50px',position: 'fixed', bottom: 0, right: 10, padding: '15px', backgroundColor: 'red', color: '#fff', cursor: 'pointer',border:'none' }}>
      {isScrolling ? 'Scanning...' : '^'}
    </button>
  );
}

export default MoveToTopButton;