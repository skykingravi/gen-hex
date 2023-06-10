import express from "express";
import cors from 'cors';
const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   next();
// });

// REST endpoint
app.get('/color', (req, res) => {
    
    // for 'OK' response
    res.status(200).json(`#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6,"0")}`);

});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});