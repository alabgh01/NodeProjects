/* jshint esversion: 8 */
/* jshint node: true */

const express = require('express');
const router = express.Router();
const {
    getAllTasks,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask
} = require('../controllers/tasks');


router.route('/').
get(getAllTasks)
.post(createTask);
router.route('/:id')
.get(getSingleTask)
.patch(updateTask)
.delete(deleteTask);


module.exports = router;