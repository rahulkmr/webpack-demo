import printMe from './print'
import { cube } from './math'

function component() {
    let element = document.createElement('pre')
    let btn = document.createElement('button')

    element.innerHTML = ['Hi webpack', '5 cubed is ' + cube(5)].join('\n\n')
    element.classList.add('hello')

    btn.innerHTML = 'Click me and check the console'
    btn.onclick = printMe

    element.appendChild(btn)

    return element;
}

document.body.appendChild(component())
