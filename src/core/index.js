import { TextType } from './createElement'
export class Component {
    parent = null;
    props = {};
    state = {};

    setState(state) {
        this.state = Object.assign(this.state, state);

        this.updateInstance();
    }

    updateInstance() {
        renderRoot([this.render()], this.parent);
    }

    /**Placeholder for render function */
    render() {
        return '';
    }
}

function createDom({ type, props, text }) {
    const { children, ...otherProps } = props || {};

    if (type === TextType) {
        return createTextDom(text);
    }

    const dom = document.createElement(type);

    Object.entries(otherProps).forEach(([attribute, value]) => {
        if (attribute.startsWith('on')) {
            const eventName = attribute.toLowerCase().substring(2);

            dom.addEventListener(eventName, value);
        } else {
            dom[attribute] = value;
        }
    })

    return dom;
}

function createTextDom(text) {
    return document.createTextNode(text);
}

function renderRoot(children, parent) {
    children.forEach(child => {
        child.parent = parent;

        if (typeof child.type !== 'function') {
            setDom(child, parent);
            // parent.dom.append(child.dom);

            if (child.props?.children?.length) {
                renderRoot(child.props.children, child);
            }
        } else {
            const instance = new child.type();

            instance.props = child.props;
            instance.parent = parent;

            instance.updateInstance();
        }

    });
}

function setDom(element, parent) {
    const newDom = createDom(element);

    // if (parent.dom?.children?.length) {
    //     parent.dom.replaceChild(newDom, element.dom);
    // } else {
    //     parent.dom.append(newDom);
    // }

    parent.dom.append(newDom);

    element.dom = newDom;
}

export function render(container, element) {
    renderRoot([element], { dom: container });
}