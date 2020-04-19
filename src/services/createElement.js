module.exports = function (el, vl){
    const element = document.createElement(el);
    const value = document.createTextNode(vl);
    element.appendChild(value);
    return element;
}