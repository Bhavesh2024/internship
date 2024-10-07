const express = require("express");
const cors = require("cors");
const app = express();

app.use(
	cors({
		origin: "http://localhost:5173",
		method: "GET,POST,PUT,PATCH,DELETE",
		allowedHeaders: ["Content-Type", "Authorization"],
	})
);
const PORT = 5000;
app.listen(PORT, () => console.log(`Server Started at PORT::${PORT}`));
