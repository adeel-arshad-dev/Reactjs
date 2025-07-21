
function renderReact(reactElement, container) {

    /*
const domElement = document.createElement(reactElement.type)

    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
    // above method is not a good way to do that lets do it generically(with help of loop)
    */
   let domElement=document.createElement(reactElement.type)
   domElement.innerHTML=reactElement.children
   for (const prop in reactElement.props) {
     
    if(prop==='children'){
        continue
    }
    domElement.setAttribute(prop,reactElement.props[prop])
   }
   container.appendChild(domElement)
}


const reactElement = {
    type: 'a', // it may be div,href etc
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me to visit google'
}
let maincontainer = document.querySelector('#root')
renderReact(reactElement, maincontainer)




