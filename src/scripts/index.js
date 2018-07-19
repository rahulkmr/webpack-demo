import base from '../styles/base.scss'
import '../styles/index.scss'
import printMe from './print.js'
import {cube} from './math.js'

function component() {
    var element = document.createElement('pre');
    var btn = document.createElement('button')

    element.innerHTML = ['Hi webpack', '5 cubed is ' + cube(5)].join('\n\n')
    element.classList.add(base.hello)

    btn.innerHTML = 'Click me and check the console'
    btn.onclick = printMe

    element.appendChild(btn)

    return element;
}

document.body.appendChild(component());
