const router = require('express').Router();

const { getUsers, createUser, findUser, updateUser, deleteUser, addFriend, deleteFriend } = require('../../controllers/user-controller');

router.route('/').get(getUsers); // GET all users
router.route('/:userId').get(findUser); // GET a single user
router.route('/').post(createUser); // POST a new user
router.route('/:userId').put(updateUser); // PUT update a user by ID
router.route('/:userId').delete(deleteUser); // DELETE a user by ID
router.route('/:userId/friends/:friendId').post(addFriend); // POST add a friend
router.route('/:userId/friends/:friendId').delete(deleteFriend); // DELETE remove a friend

module.exports = router;
