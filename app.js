// const heading=React.createElement("h1",{id:"heading"},"Namaste React!");
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

const parent=React.createElement('div',{id:"parent"},
React.createElement('div',{id:"child"},[React.createElement('h1',{},"I'm h1 tag"),React.createElement("h2",{},"i'm h2 tag")])

);
console.log(parent);
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);