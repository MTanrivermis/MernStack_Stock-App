"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/firm:

const permissions = require('../middlewares/permissions')
const firm = require('../controllers/firm')

// URL: /firms

router.route('/')
    .get(firm.list)
    .post(permissions.isStaff, firm.create)

router.route('/:id')
    .get(permissions.isStaff, firm.read)
    .put(permissions.isStaff, firm.update)
    .patch(permissions.isStaff, firm.update)
    .delete(permissions.isAdmin, firm.delete)

/* ------------------------------------------------------- */
module.exports = router