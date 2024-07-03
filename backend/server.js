// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors"

// const app = express();
// app.use(express.json());
// app.use(express.urlencoded());
// app.use(cors());
 
// mongoose
//   .connect("mongodb://127.0.0.1/NewUserRegistration")
//   .then((res) => {
//     if (res) {
//       console.log("Database connected !!");
//     }
//   })
//   .catch((err) => {
//     console.log(err);
//   });
 
// const userschema = new mongoose.Schema({
//   email: String,
//   password: String,
// });

// const signup = mongoose.model("userdata", userschema);
 
// app.get("/", (req, res) => {
//   res.send("Server Started..");
// });

// app.post("/Login", (req, res) => {
//     console.log(req.body);
   
//     login
//     .findOne({ email: req.body.email })
//       .then((resp) => {
//         if (resp) {
//           res.send("welcome");
//           window.open("/Login");
//         } else {
//           res.send("invalied user");
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   });  

//   app.listen(8000,()=>{
//     console.log("Server started at port no 8000")
// })