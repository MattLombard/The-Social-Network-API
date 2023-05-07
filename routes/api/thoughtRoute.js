const router = require('express').Router();

const {
  getThoughts,
  createThought,
  findThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require('../../controllers/thought-controller');

router.route('/').get(getThoughts); // GET all thoughts

router.route('/:userId').post(createThought); // POST a new thought
