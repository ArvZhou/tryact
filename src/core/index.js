import { TextType } from './createElement'
export class Component {
    setState(state) {
        this.state = Object.assign(this.state, state);

        traverseElements(this.render());
    }

    render() {
        return '';
    }
}

function createDom({ type, props }) {
    const dom = document.createElement(type);

    Object.entries(props).forEach(([attribute, value]) => {
        if (attribute.startsWith('on')) {
            const eventName = attribute.toLowerCase().substring(2);

            dom.addEventListener(eventName, value);
        } else {
            dom[attribute] = value;
        }
    })

    return dom;
}

function traverseElements(rootElement) {
    let children = rootElement.children;
    let dom = createDom(rootElement);

    if (children && children.length) {
        children.forEach(child => {
            if (child.type === TextType) {
                dom.append(child.text);
            } else {
                dom.append(traverseElements(child));
            }
        })
    }

    return dom;
}

export function render(container, element) {
    container.append(traverseElements(element))
}