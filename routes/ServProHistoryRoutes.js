const router = require('express').Router()
const servProHistoryController = require('./../controller/ServProHistoryController')

router.post('/addservice/:email',servProHistoryController.addOrder)
router.get('/servprohistory',servProHistoryController.getServProHistory)
router.get('/servprohistory/:id',servProHistoryController.getServProHistoryById)
router.put('/service/:id',servProHistoryController.updateServiceStatus)
module.exports = router