const  express = require('express');
const multer = require('multer');
const uploadFile = require('./services/storage.service');
const postModel = require('./models/post.model')
const cors = require('cors')


const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() })

app.post('/create-post' , upload.single("image"), async(req,res) => {
    

    try {
        const result = await uploadFile(req.file.buffer)
        const post = await postModel.create({
            image: result.url,
            caption: req.body.caption
        })
         
        res.status(200).json({
            message: "post created successfully",
            post: post
        })
    } catch (error) {
        console.log(error)
    }
} )

app.get('/post', async(req, res) => {
    
    try {
        
        const post_data = await postModel.find()

        if(!post_data){
            console.log("no post found in database. Create it first")
        }

        res.status(200).json({
            message: "all post fetched successfully",
            post: post_data
        })
    } catch (error) {
        console.log(error)
    }

})


module.exports = app