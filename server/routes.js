const router = require ('express').Router();
const controller = require ('./controller');

router.route('/api')
    .get(controller.get)
    .post(controller.post)
    .delete(controller.delete)

router.route('/api/inc/:id')
    .patch(controller.incrementPatchLikes)
    .get(controller.getPatchLikes)

// router.route('api/dec/:id')
//     .patch(controller.decrementPatchLikes)

router.route('/api/repostinc/:id')
    .patch(controller.incrementRepostLikes)

module.exports = router;