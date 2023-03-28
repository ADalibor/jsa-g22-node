const express = require("express");
const mongoose = require("mongoose");
const blogController = require("./controlers/blogController")

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


mongoose
    .connect(
        "mongodb+srv://Triki:trikomon00@cluster0.lvrcsc0.mongodb.net/Vezba1?retryWrites=true&w=majority", 
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => {
         console.log("uspesno se povrzavme");
    })
    .catch((err) => {
         console.log(err);
});

// so ovaa ruta sakame da ja zememe celata kolekcija
app.get("/api/v1/blogs", blogController.getAllBlogs);
app.get("/api/v1/blogs/:id", blogController.getBlog);
// so ovaa ruta prakjame informacii vo serverot, vo ovoj slucaj kreirame blog
app.post("/api/vi/blogs", blogController.createBlog);
//so patch pravime update na blogot
app.patch("/api/v1/blogs/:id", blogController.updateBlog);
// briseme informacii
app.delete("/api/v1/blogs/:id", blogController.deleteBlog)

const port = 10000;
app.listen(port, () => {
    console.log(`App running on port ${port}`)
});