import React from 'react';
import ReactDOM from 'react-dom';

const parent = React.createElement('div', {id: 'parent'}, [
    React.createElement('h1', {id: 'heading1'}, 'Hi, I am Heading 1')
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);
