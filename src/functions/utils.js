// a : an array which will be converted to a string: [type: array]
// b : add a new element in the existing array: [type: boolean]
// c : the new element which will be added at the end of the array: [type: string]
// d : when shomething is returned a new element will be added at the end of the array: [type: boolean]

export const covertClasses = (a, b, c, d) => {
    if (b) {
        a = a?.filter(e => e !== `${a[0]}--${c}`)
        d && a?.push(`${a[0]}--${c}`)
    }
    a = a?.join(' ')
    return a;
}

// a : default class of the component: [type: string]
// b : an array with custom classes which will be modify the default class: [type: array]
export const addClass = (a, b) => {
    const c = b?.map(e => `${a}--${e}`)
    return `${a} ${c?.join(' ')}`
}
