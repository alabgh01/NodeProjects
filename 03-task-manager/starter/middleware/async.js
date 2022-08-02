/* jshint esversion: 8 */
/* jshint node: true */

const asyncWrapper = (fn) => {
    return async (req, res, next) => {
        try {
            await fn(req, res, next);
        } catch (error) {
            next(error);
        }
    }
};

module.exports = asyncWrapper;