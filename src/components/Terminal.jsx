// Terminal.js
import React, { useState } from 'react';

const Terminal = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      executeCommand();
    }
  };

  const executeCommand = () => {
    // Process the command and update the output
    // You may use a switch statement or other logic here

    setOutput([...output, { type: 'input', content: input }, { type: 'output', content: 'Command executed!' }]);
    setInput('');
  };

  return (
    <div className="terminal">
      <div className="output">
        {output.map((line, index) => (
          <div key={index} className={line.type}>
            {line.content}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        onKeyPress={handleEnter}
        placeholder="Type your command..."
      />
    </div>
  );
};

export default Terminal;
