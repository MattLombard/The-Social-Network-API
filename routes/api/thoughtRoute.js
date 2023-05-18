const router = require('express').Router();

const {
  getThoughts,
  createThought,
  findThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts); // GET all thoughts

router.route('/:userId').post(createThought); // POST a new thought

router.route('/:id').get(findThought); // GET a single thought

router.route('/:id').put(updateThought); // PUT update a thought by ID

router.route('/:id').delete(deleteThought); // DELETE a thought by ID

router.route('/:thoughtId/reactions').post(addReaction); // POST add a reaction

router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction); // DELETE remove a reaction

module.exports = router;
