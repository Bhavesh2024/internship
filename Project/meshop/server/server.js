const express = require("express");
const cors = require("cors");
const app = express();
const loginRoute = require('./routes/login')
const imageRoute = require('./routes/product');
const apiRoute = require ('./routes/api')
app.use(
	cors({
		origin: "http://localhost:5173",
		method: "GET,POST,PUT,PATCH,DELETE",
		allowedHeaders: ["Content-Type", "Authorization"],
	})
);

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.get('/',(req,res) =>{
	console.log('hello');
	res.send('welcome')
})
app.use('/user',loginRoute);
app.use('/api',apiRoute);
app.use('/products/images/',imageRoute)
const PORT = 5000;
app.listen(PORT, () => console.log(`Server Started at PORT::${PORT}`));
