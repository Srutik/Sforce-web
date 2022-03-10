const express = require('express');

const JobController = require('../controllers/job');

const router = express.Router();

router.post('/addjob', JobController.createJobPost);

router.get('/getjobs',JobController.getJobs);

router.get('/getjob/:jobId',JobController.getJob);

// router.post('/inginproduct/:productId/:ingredientId',IngredientController.AddingIngredientIntoProduct);

// router.post('/ingoutproduct/:productId/:ingredientId',IngredientController.RemovingIngredientFromProduct);

// router.get('/getIngredients',IngredientController.getIngredients);

// router.get('/getIngredient/:ingredientId',IngredientController.getIngredient);

// router.put('/update/:ingredientId',IngredientController.updateIngredient);

// router.delete('/delete/:ingredientId',IngredientController.deleteIngredient);

module.exports = router; 