exports.getPosts = (req, res, next) => {
    res.status(200).json({
        posts: [{ title: "First Post", content: "This is the first post!" }]
    });
};

exports.createPost = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;

    if (!title || !content) {
        return res.status(400).json({
            message: "Title and content are required"
        });
    }

    res.status(201).json({
        message: "Post created successfully",
        post: {
            id: new Date().toISOString(),
            title: title,
            content: content
        }
    });
};