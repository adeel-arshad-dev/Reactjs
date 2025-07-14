import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import React from 'react'

import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>Custom App | chai</h1>
        </div>
    )
}
/*

if we write this code in this file and want to direct pass that object in render function we cannot do that we have not followed the correct syntax we can do that with the help of createReactelement() as given as an example at the end
const ReactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

*/


const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)
/*
 we can directly write that in render function like

 ReactDOM.createRoot(document.getElementById('root')).render(
  
     reactElement
   
 )
     */


/*
------------<  Note >--------------

when we are writing code in react it takes this code into three tags:
#1<> as div/a/href/span...etc
#2<>object (in which attributes are set)
#3<>inner HTML( that has to be shown in browser)

if we write these three tags within the react.creatElement()--> without using key name<--- we can write variable( that is holding that element) in render function.

// Choose ONE of the following to render:

// Option 1: Render raw React element (created manually without JSX)
// createRoot(document.getElementById('root')).render(reactElement)

// Option 2: Render your custom component
// createRoot(document.getElementById('root')).render(<MyApp />)

// Option 3: Render full App inside StrictMode
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {reactElement}
    <App />
  </React.StrictMode>
)

*/
const anotherUser = "chai aur react"

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com',target: '_blank' },
    'click me to visit google',
    anotherElement
)

// ReactDOM.createRoot(document.getElementById('root')).render(
 
//     reactElement,
  
// )



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)




