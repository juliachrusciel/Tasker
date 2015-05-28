var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Task = require('../models/Tasks');

// get /api/tasks
router.get('/', function(req, res, next) {
  console.log(req.body);
  Task.find(function(error, tasks) {
    res.json(tasks);
  });
});

// GET /api/tasks/:id
// localhost:5000/api/tasks/0392092-049-2940-2394-2309
router.get('/:id', function(req, res, next) {
  Task.findById(req.params.id, function(err, task) {
    res.json(task);
  });
});

// POST /api/tasks
router.post('/', function(req, res, next) {
  console.log(req.body);
  Task.create(req.body, function(err, task) {
    res.json(task);
  });
});

// PUT /api/tasks/:id
router.put('/:id', function(req, res, next) {
  console.log(req.body);
  Task.findByIdAndUpdate(req.params.id, req.body, function(err, task) {
    res.json({
      "message": "Your task has been updated!"
    });
  });
});

// DELETE /api/tasks/:id
router.delete('/:id', function(req, res, next) {
  Task.findByIdAndRemove(req.params.id, req.body, function(err, task) {
    res.json({
      "message": "Your task has been deleted!"
    });
  });
});

module.exports = router;





// var express = require('express');
// var router = express.Router();
//
// var bodyParser = require('body-parser');
// var mongoose = require('mongoose');
// var Task = require('../models/Tasks');
//
// // get /api/tasks
// router.get('/', function(req, res, next) {
//   console.log(req.body);
//   Task.find(function(error, tasks) {
//     res.json(tasks);
//   });
// });
//
// // GET /api/tasks/:id
// // localhost:5000/api/tasks/0392092-049-2940-2394-2309
// router.get('/:id', function(req, res, next) {
//   Task.findById(req.params.id, function(err, task) {
//     res.json(task);
//   });
// });
//
// // POST /api/tasks
// router.post('/', function(req, res, next) {
//   console.log(req.body);
//   Task.create(req.body, function(err, task) {
//     res.json(task);
//   });
// });
//
// //put
// router.put ('/:id', function(req, res, next){
//   console.log(req.body);
//   Task.findByIdAndUpdate(req.params.id, req.body,
//   function(err, task){
//     res.json({
//       "message": "Your task has been updated!"
//     });
//   });
// });
//
// router.delete('/:id', function(req, res, next) {
//   Task.findByIdAndREmove(req.params.id, req.body,
//   function(err, task){
//     res.send("Your task has been deleted!");
//   });
// });
//
// module.exports = router;s
//
//
// // var express = require('express');
// // var router = express.Router();
// //
// // var bodyParser = require('body-parser');
// // var mongoose = require('mongoose');
// // var Task = require('../models/Tasks');
// //
// // /* GET users listing. */
// // router.get('/', function(req, res, next) {
// //   console.log(req.body);
// //   Task.find(function(error, tasks){
// //     res.json(tasks);
// //   });
// // });
// //
// //
// // //GET /api/tasks/:id
// // router.get('/:id', function(req, res, next){
// //   Task.findById(req.params.id, function(err, task) {
// //     res.json(task);
// //   });
// // });
// //
// // //Post /api/tasks
// // router.post('/', function(req, res, next){
// //   console.log(req.body);
// //   Task.create(req.body, function(err, task) {
// //     res.json(task);
// //   })
// // });
// //
// //
// //
// // module.exports = router;
