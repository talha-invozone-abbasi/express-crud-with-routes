const data = [
  {
    name: 'talha',
    id: 1,
  },
];
let id = 1;

const addData = (name) => {
  if ((!name, !id)) throw error;
  id++;
  return data.push({ name, id });
};

const deleteData = (id) => {
  const logic = data.findIndex((e) => Number(e.id) === id);

  if (logic) {
    return data.splice(logic, 1);
  }
};
const editData = (namee, id) => {
  const logic = data.filter((e) => e.id === id);
  let value = logic[0];
  console.log(data);
  if (logic) {
    const result = { ...value, name: namee ? namee : value.name };
    console.log(result);
    return result;
  }
};

module.exports = {
  data,
  addData,
  deleteData,
  editData,
};
