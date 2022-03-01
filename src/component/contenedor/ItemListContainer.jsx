import React, { useState } from 'react';

function ItemListContainer() {
  const [count, setCount] = useState(1);
  return (
    <div>


      <button onClick={() => setCount(count - 1)}>
      -
      </button>
      <input value={count} />
      <button onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
}


export default ItemListContainer