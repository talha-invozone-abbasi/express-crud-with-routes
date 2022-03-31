const { data, addData, deleteData, editData } = require('../modals/dummyData');

function getAlldata(req, res) {
  res.json(data).status(200);
}

function postData(req, res) {
  const name = req.body.name;
  const condition = data.find(
    (e) => e.name.toString().toLowerCase() === name.toString().toLowerCase()
  );
  if (condition) {
    res.json({ error: 'error' }).status(404);
  } else {
    res.json(addData(name)).status(201);
  }
}

function deleteOne(req, res) {
  const id = req.body.id;
  res.json(deleteData(id)).status(200);
}
function editOne(req, res) {
  const name = req.body.name;
  const id = req.body.id;
  res.json(editData(name, id)).status(200);
}
module.exports = {
  getAlldata,
  postData,
  deleteOne,
  editOne,
};
