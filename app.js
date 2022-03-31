const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const { data, addData, deleteData, editData } = require('./modals/dummyData');
const userRouter = require('./routes/users.route');

// fetch public folder
app.use(express.static(path.join(__dirname, 'public')));

// enginge use ejs
app.set('views', 'views');
app.set('view engine', 'ejs');
app.use(express.json());

// home Page
app.get('/', (req, res) => {
  res.render(path.join(__dirname, '/views', '/notfound.ejs'), {
    title: 'Home',
    data: data,
  });
});

app.use('/users', userRouter);

// not found page
app.use('', (req, res) => {
  res.render(path.join(__dirname, '/views', '/notfound.ejs'), {
    title: 'Not Found',
    data: data,
  });
});

app.listen(PORT, (err) => {
  if (err) {
    return;
  }
  console.log(`Running on port ${PORT}`);
});
