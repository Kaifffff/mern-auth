import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
const app = express();
app.use(express.json());
main()
.then(()=>{
    console.log("connect successful");
})
.catch((err) =>{
     console.log(err)
    }
);

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/mern-auth');
}

app.listen(3000,()=>{
    console.log("server listening on port 3000");
});

app.use('/api/user',userRoutes);
app.use('/api/auth',authRoutes);