function isType(param, type) {
    return typeof param === type;
}

function isUndefined(param) {
    return isType(param, 'undefined');
}

function isFunction(param) {
    return isType(param, 'function');
}

function isBoolean(param) {
    return isType(param, 'boolean');
}

function isNumber(param) {
    return isType(param, 'number');
}

function isArray(param) {
    return Array.isArray(param);
}

module.exports = {
    isType,
    isUndefined,
    isFunction,
    isBoolean,
    isNumber,
    isArray
};
