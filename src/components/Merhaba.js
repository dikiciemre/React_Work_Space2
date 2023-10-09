import React from 'react';

function Merhaba(props) {
  return (
    <div>
      <h1>Merhaba, {props.ad}! kaç {props.durum} ?</h1>
    </div>
  );
}

export default Merhaba;
