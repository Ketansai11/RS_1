import React, { useState } from 'react';

function C1() {
  const [wordCount, setWordCount] = useState(0);

  const count = (e) => {
    const text = e.target.value;
    const words = text.split(/\s+/).filter(Boolean);
    setWordCount(words.length);
  };

  return (
    <div ><center><div  style={{ boxShadow: '1px 1px 1px grey',width: '450px', height: '350px', borderRadius: '25px' }}>
      <b><h2>Responsive Paragraph Word</h2></b>
      <b><h2>Counter</h2></b>
        <textarea style={{ width: 300, height: 100}}  onKeyDown={count}>
        </textarea>
      <p>
        word Count : <span id="co">{wordCount}</span>
      </p></div></center>
    </div>
  );
}

export default C1;