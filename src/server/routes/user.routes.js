import { Router } from 'express';
import { Controller } from '../controllers/user.controller.js';

const router = Router();
const userController = new Controller();
// Retrieve all users
router.get('/', userController.findAll);
// Create a new user
router.post('/', userController.create);
// Retrieve a single user with id
router.get('/:id', userController.findOne);
// Update a user with id
router.put('/:id', userController.update);
// Delete a user with id
router.delete('/:id', userController.delete);


export default router