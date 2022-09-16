export const TextType = Symbol('text');

function createTextElement(text) {
    return {
        type: TextType,
        text
    }
}

export default function createElement(type, props, ...children) {
    const _children = children.map(child => {
        return typeof child === 'string' ? createTextElement(child) : child
    }).flat()

    return {
        type,
        props: {...(props || {}), children: _children}
    }
}