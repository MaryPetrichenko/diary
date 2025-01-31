const Diary = require("../models/Diary");

async function index(req, res) {
  try {
    const posts = await Diary.getAll();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function show(req, res) {
  try {
    let id = req.params.id;
    const post = await Diary.getById(id);
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

async function create(req, res) {
    try {
        const data = req.body
        const newPost = await Diary.create(data)
        res.status(201).json(newPost)
    }
    catch(error) {
        res.status(400).json({error: error.message})
    }
  }

async function destroy(req, res) {
  try {
    const id = req.params.id;
    const post = await Diary.getById(id); // Fetch the post from DB
    const result = await post.destroy(); // Call destroy on the post
    res.status(204).end(); 
  } catch (error) {
    res.status(404).json({ error: error.message }); // If something goes wrong, send error message
  }
}

module.exports = { index, show, create, destroy}