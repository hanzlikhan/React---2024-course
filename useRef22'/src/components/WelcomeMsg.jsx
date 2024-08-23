import React from 'react';

function WelcomeMsg({ todoitems }) {
  return todoitems.length === 0 ? <h2>Have a good day!</h2> : null;
}

export default WelcomeMsg;
