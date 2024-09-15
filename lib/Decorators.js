export const template = (name) => {
    return function (target) {
        target.property = name;
    };
};