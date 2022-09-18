const express = require('express');
const { contacts: controller } = require('../../controllers');
const isValid = require('../../middlewares/isValidId');

const router = express.Router();

router.get('/', controller.getContacts);

router.get('/:contactId', isValid, controller.getContactById);

router.post('/', controller.addContact);

router.delete('/:contactId', isValid, controller.removeContact);

router.put('/:contactId', isValid, controller.updateContact);

router.patch(
  '/:contactId/favorite',
  isValid,
  controller.updateContactFavoriteStatus
);

module.exports = router;
