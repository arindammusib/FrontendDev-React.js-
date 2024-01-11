import React from 'react';
import ReactDOM from 'react-dom/client';
// const heading=React.createElement("h1",{id:"heading"},"Namaste everyone!");
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

// const parent=React.createElement('div',{id:"parent"},
// React.createElement('div',{id:"child"},[React.createElement('h1',{},"I'm h1 tag"),React.createElement("h2",{},"i'm h2 tag")])

// );
// console.log(parent);
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(parent);
// //using jsx
// const jsxHeading=<h1 id="heading">Namaste React with JSX</h1>;
// console.log(jsxHeading);
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(jsxHeading);
// const jsxHeading=<h1 className='head'>Namaste React with JSX</h1>;
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(jsxHeading);

//react functional component
const Heading=()=>{
    return <h1 className='head'>Heading 1</h1>
};
//component composition
const Headingcomponent=()=>{
    return <div id='container'>
        <h2>{1+2}</h2>
        <Heading/>
    <h1 className='heading'>React Components</h1>
    </div>
};
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Headingcomponent/>);

   