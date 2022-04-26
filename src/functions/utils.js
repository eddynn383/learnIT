// this function combine multiple classes arrays in one and convert the resulted array into a string
// args : args is used to get all function arguments: [type: array]
export const addClass = (...args) => {
    // const a = [...args]
    const a = args?.flat()
    // console.log(Array.isArray(args[0]))
    // console.log(a)
    return a?.join(' ')
}

// this function create a class modifier based on the component default class 
// a : default class of the component: [type: string]
// b : an array with custom classes which will be modify the default class: [type: array]
export const classModifier = (a, b) => {
    const c = b?.map(e => `${a}--${e}`)
    b && c?.unshift(a)
    return c
}

// this function add an active class on the component when a condition is meet
// a : current classes array: [type: array]
// b : a class modifier used to show if the component is active: [type: string]
// c : the conditional used to add the activ modifier: [type: boolean]

export const addActive = (a, b, c) => {
    a = a?.filter(e => e !== `${a[0]}--${b}`)
    c && a?.push(`${a[0]}--${b}`)
    return a;
}