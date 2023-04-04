const Blog = require("../model/blogmodel.js");

exports.getBlogView = async (req, res) => {
    try {
        const blogs = await Blog.find();

        res.status(200).render('blogs', {
            naslovNaStranata: 'Site blogovi',
            godina: 2023,
            blogs,
        });
    } catch (err) {
        res.status(500).send('Error with page');
    }
};

exports.getSpecificBlog = async(req, res) => {
    try {
        console.log('aaa');
        const blog = await Blog.findById(req.params.id);
        res.status(200).render('clickedBlog', {
            blog,
        });
    } catch(err) {
        res.status(500).send('Error creating blog post')
    };
};

exports.createBlog = async(req, res) => {
    try {
        console.log(req.body)
        await Blog.create(req.body);
        res.redirect('/blogs')
    } catch(err) {
        res.status(500).send('Error creating blog post')
    }
};

exports.deleteBlog = async (req, res) => {
    try {
        const id = req.params.id
        await Blog.findByIdAndDelete(id)
        res.redirect('/blogs')
    } catch(err) {
        res.status(500).send('Error deleting blog')
    }
};

exports.deleteBlog = async (req, res) => {
    try {
        const id = req.params.id
        await Blog.findByIdAndUpdate(id)
        res.redirect('/blogs/${blog._id}');
    } catch(err) {
        res.status(500).send('Error deleting blog')
    }
}; 