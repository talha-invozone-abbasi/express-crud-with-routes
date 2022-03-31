const app = require('express');
const {
  getAlldata,
  postData,
  deleteOne,
  editOne,
} = require('../controllers/modals.controllers');

const userRouter = app.Router();

// get api
userRouter.get('/', getAlldata);
// post api
userRouter.post('/', postData);
// delete api
userRouter.delete('/', deleteOne);
// edit api
userRouter.put('/', editOne);

module.exports = userRouter;
