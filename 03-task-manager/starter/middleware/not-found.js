/* jshint esversion: 8 */
/* jshint node: true */

const notFound = (req, res) => {
    res.status(404).send('Route does not exist');
};

module.exports = notFound;