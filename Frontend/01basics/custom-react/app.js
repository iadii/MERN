

function customRender(reactElement, rootContainer){
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children; 
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    rootContainer.appendChild(domElement) 
} 

// with better syntax 
function customRendering(reactElememnt, rootContainer){
    const domElement = document.createElement(reactElememnt.type)
    domElement.innerHTML = reactElememnt.children;

    for (const prop in reactElememnt.props) {
        domElement.setAttribute(prop, reactElememnt.props[prop])
    }
    rootContainer.appendChild(domElement)
}


const root = document.querySelector('#root')
const reactElement = {
    type: "a",
    props: {
        href: "google.com",
        target: "_blank"
    },
    children: 'click me to visit google'
}  

customRender(reactElement, root)
customRendering(reactElement, root)