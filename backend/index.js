import express from "express";
import mongoose from "mongoose";
import cors from "cors";


const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

mongoose
  .connect("mongodb://127.0.0.1/NewUserRegistration")
  .then((res) => {
    if (res) {
      console.log("Database connected !!");
    }
  })
  .catch((err) => {
    console.log(err);
  });

const userschema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});



const signup = mongoose.model("userdata", userschema);


app.get("/", (req, res) => {
  res.send("Server Started..\n Brightwash server ");
});



app.post("/Signup", (req, res) => {
  console.log(req.body);

  signup
    .findOne({ email: req.body.email })
    .then((resp) => {
      if (resp) {
        res.send("user account already present");
      } else {
        const newuser = signup({
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
        });

        newuser
          .save()
          .then((ack) => {
            if (ack) {
              res.send("Account created successfully!!");
            } else {
              res.send("Error occured while creating the account...!");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

const login = mongoose.model("userdata", userschema);

app.post("/Login", (req, res) => {
  console.log(req.body);

  login
    .findOne({ username: req.body.username, password: req.body.password })
    .then((resp) => {
      if (resp) {
        res.send("welcome");

      } else {
        res.send("invalied user");
      }
    })
    .catch((err) => {
      console.log(err);
    });
});


const contactschema = new mongoose.Schema({
  c_name: { type: String, required: true },
  c_email: { type: String, required: true },
  c_message: { type: String, required: true },
});

const contactdata = mongoose.model("contact_details", contactschema);
app.post("/contactinfo", (req, res) => {
  console.log(req.body);

  contactdata
    .findOne({ c_email: req.body.c_email })
    .then((resp) => {
      const newuser = contactdata({
        c_name: req.body.c_name,
        c_email: req.body.c_email,
        c_message: req.body.c_message,
      });

      newuser
        .save()
        .then((ack) => {
          if (ack) {
            res.send("Thank you for contact!!");
          } else {
            res.send("Error occured while creating the account...!");
          }
        })
        .catch((err) => {
          console.log(err);
        });

    })
    .catch((err) => {
      console.log(err);
    });
});



const bookingschema = new mongoose.Schema({
  b_name: { type: String, required: true },
  mobile_number: { type: Number, required: true },
  b_email: { type: String, required: true },
  date_time: { type: String, required: true },
  car_type: { type: String, required: true },
  service_type: { type: String, required: true },
});

const bookingdata = mongoose.model("booking_details", bookingschema);
app.post("/bookinginfo", (req, res) => {
  console.log(req.body);

  bookingdata
    .findOne({ b_email: req.body.b_email })
    .then((resp) => {
      if (resp) {
        res.send("booking already done");
      } else {
        const newuser = bookingdata({
          b_name: req.body.b_name,
          mobile_number: req.body.mobile_number,
          b_email: req.body.b_email,
          date_time: req.body.date_time,
          car_type: req.body.car_type,
          service_type: req.body.service_type,
        });

        newuser
          .save()
          .then((ack) => {
            if (ack) {
              res.send("Booking done!!");
            } else {
              res.send("Error occured...!");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
    )
    .catch((err) => {
      console.log(err);
    });
});

app.post("/cancelbooking", (req, res) => {
  console.log(req.body);

  bookingdata
    .findOneAndDelete({ b_email: req.body.b_email })
    .then((resp) => {
      if (resp) {
        res.send("Booking cancelled successfully!");
      } else {
        res.send("No booking found with this email");
      }
    })
    .catch((err) => {
      console.log(err);
    });
});


app.listen(9000, () => {
  console.log("Server started at port no 9000")
})
