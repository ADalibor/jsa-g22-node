const Blog = require("../model/blogmodel.js");

exports.createBlog = async (req, res) => {
try {
    console.log(req.body);
    //const newBlog = new Blog(req.body)
    //await newBlog.save()
    const newBlog = await Blog.create(req.body);
    res.status(201).json({
        status: "success",
        data: {
            blog: newBlog
        },
    });
} catch (err) {
    res.status(400).json({
        status: "fail",
        message: err,
    });
}
    
};

exports.getAllBlogs = async (req, res) => {
    try {
      // so ova gi dobivame site dokumenti od kolekcijata
      const blogs = await Blog.find();
      res.status(200).json({
        status: "success",
        data: {
          blogs: blogs,
        },
      });
    } catch (err) {
      res.status(404).json({
        status: "fail",
        message: err,
      });
    }
  };
exports.getBlog = async (req, res) => {
    try {
        const blog = await Blog.find();
        res.status(200).json({
          status: "success",
          data: {
            blog: blog,
          },
        });
      } catch (err) {
        res.status(404).json({
          status: "fail",
          message: err,
        });
      }
};
exports.updateBlog = async (req, res) => {
    try {
        const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        const naslov = req.params.naslov;
       // const blog = await Blog.findByIdAndUpdate({ime: naslov})
       res.status(200).json({
        status: 'success',
        data: {
            blog,
        },
       });
    } catch (err) {
        res.status(404).json ({
            status: 'fail',
            message: err,
        });
    }
};
exports.deleteBlog = async (req, res) => {
    try {
        await Blog.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status: 'success',
            data: null,
        });
    } catch (err) {
        res.status(404).json({ status: 'fail', message: err})
    }

};
