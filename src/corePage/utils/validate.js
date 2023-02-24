/**
 * 判断是否是外链
 * @param {string} path
 * @returns {Boolean}
 * @author LiQingSong
 */
export const isExternal = (path) => {
    return /^(https?:|mailto:|tel:)/.test(path);
};
//# sourceMappingURL=validate.js.map