function customRender(reactELement, container){
    const domElement = document.createElement(reactELement.type)
    domElement.innerHTML = reactELement.children
    domElement.setAttribute('href', reactELement.props.href)
    domElement.setAttribute('target', reactELement.props.target)

    container.appendChild(domElement)
}

const reactELement = {
    type : 'a',
    props : {
        href : 'adii.com',
        target : '_blank'
    },
    children : 'Click me to visit adii'
    
}

const mainContainer = document.querySelector('#root')

customRender(reactELement,mainContainer)