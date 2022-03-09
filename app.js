const express = require('express');
const productController = require('./controllers/product.controller');
const authjwt = require('./config/jwt');
const unless = require('express-unless');
authjwt.unless = unless;
const app = express();
require('./models/index');
const userController = require('./controllers/user.controller')
const reportController = require('./controllers/log-report.controller');
require('dotenv');

app.use(express.json());

app.get('/users',authjwt, userController.getAllusers);
app.post('/add',  userController.addUser);
app.post('/login',userController.logIN);
app.get('/products', productController.getAllProducts);
app.get('/product/:id', productController.getOneProduct);
app.post('/add-product', productController.addProduct);
app.put('/update-product/:id', productController.updateProduct);
app.delete('/delete-product/:id', productController.deleteProduct);
app.post('/add-report',authjwt, reportController.addReports);
app.post('/view-reports',authjwt, reportController.viewReport);




app.listen(4040, ()=>{
    console.log('server start')
})