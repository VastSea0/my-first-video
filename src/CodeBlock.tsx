import React from 'react';

export const CodeBlock = () => {
  return (
    <pre
      style={{
        background: '#1e1e1e',
        color: '#dcdcdc',
        padding: '20px',
        borderRadius: '10px',
        fontFamily: 'monospace',
        fontSize: '18px',
        overflowX: 'auto',
      }}
    >
      <code>
        {`const MyComponent = () => {
  return <h1>Hello, Remotion!</h1>;
};`}
      </code>
    </pre>
  );
};
