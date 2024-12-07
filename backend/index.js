//all backend codes
const port =  4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { type } = require("os");

app.use(express.json());
app.use(cors());

//database connection with MongoDb
mongoose.connect("mongodb+srv://Arkja:Arkja%4011@cluster0.372tu.mongodb.net/e-commerce");
//API creation

app.get("/",(req,res)=>{
res.send("Express App is running")
})

//Image storage Engine
const storage = multer.diskStorage({
    destination: './upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage})

//Creating  upload endpoint
app.use('/images',express.static('upload/images'))

app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})

//Schema for creating Products
const Product = mongoose.model("Product",{
    id:{
        type: Number,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    category:{
    type:String,
    required:true,
    },
    new_price:{
    type:Number,
    required:true,
    },
    old_price:{
    type:Number,
    required:true,
    },
    date:{
    type:Date,
    default:Date.now,
    },
    available:{
    type:Boolean,
    default:true,
    },
})
app.post('/addproduct',async (req,res)=>{
    let products = await Product.find({});
    let id;
    if(products.length>0){
        let last_product_array=products.slice(-1);//last index
        let last_product = last_product_array[0];
        id = last_product.id+1;
    }
    else{
        id=1;
    }
    const product = new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
    });
    console.log(product);
    await product.save();
    console.log("Saved");
    res.json({
        success:true,
        name:req.body.name,
    })
})
//creating api for deleting products
app.post('/removeproduct',async (req,res)=>{
  await Product.findOneAndDelete({id:req.body.id}); 
  console.log("Remove");
  res.json({
    success:true,
    name:req.body.name
  }) 
})
//error hai uspar me

//creating api for all products
app.get('/allproducts',async (req,res)=>{
    let products = await Product.find({});
    console.log("All Products Fetched")
    res.send(products);
})

//Schema creating for user model
const Users = mongoose.model('User',{
  name:{
    type:String,
  } ,
  email:{
    type:String,
    unique:true,
  },
  password:{
    type:String,
  },
  cartData:{
    type:Object,
  },
  date:{
    type:Date,
    default:Date.now,
  }

})
// Creating endpoint for regestring the user
app.post('/signup',async (req,res)=>{
    let check = await Users.findOne({email:req.body.email});
    if(check){
        return res.status(400).json({success:false,errors:"exixting user found with same email address"})
    }
    let cart ={};
    for(let i=0;i<300;i++){
        cart[0]=0;
    }
    const user = new Users({
        name:req.body.username,
        email:req.body.email,
        password:req.body.password,
        cardData:cart,
    })
    await user.save();

    const data = {
        user:{
            id:user.id
        }

    }
    const token = jwt.sign(data,'secret_ecom');
    res.json({success:true,token})
})

//creating endpoint for user login
app.post('/login',async (req,res)=>{
let user = await Users.findOne({email:req.body.email});
if(user){
    const passCompare = req.minus.password === user.password;
    if(passCompare){
        const data = {
            user:{
                id:user.id
            }
        }
        const token = jwt.sign(data,'secret_ecom');
        res.json({success:true,token});
    }
else{
    res.json({success:false,error:"wrong password"});
}    
}
else{
    res.json({success:false,errors:"Wrong Email Id"})
}
})
app.listen(port,(error)=>{
if(!error){
    console.log("Server Running on Port",+port)
}
else{
    console.log("Error :"+error)
}
})
