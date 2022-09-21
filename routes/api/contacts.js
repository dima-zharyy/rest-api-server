const express = require('express');
const { contacts: controller } = require('../../controllers');
const { auth } = require('../../middlewares');
const isValidId = require('../../middlewares/isValidId');

const router = express.Router();

router.get('/', auth, controller.getContacts);

router.get('/:contactId', isValidId, controller.getContactById);

router.post('/', auth, controller.addContact);

router.delete('/:contactId', isValidId, controller.removeContact);

router.put('/:contactId', isValidId, controller.updateContact);

router.patch(
  '/:contactId/favorite',
  isValidId,
  controller.updateContactFavoriteStatus
);

module.exports = router;
