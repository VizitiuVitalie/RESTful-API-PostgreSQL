const db = require("../db");

class PostController {
  async createPost(req, res) {
    try {
      const { title, content, userId } = req.body;
      const newPost = await db.query(
        `INSERT INTO post (title, content, user_id) VALUES ($1, $2, $3) RETURNING *`,
        [title, content, userId]
      );
      res.json(newPost.rows[0]);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error while creating post" });
    }
  }

  async getPostsByUser(req, res) {
    try {
      const id = req.query.id;
      const posts = await db.query(`SELECT * FROM post WHERE user_id = $1`, [
        id,
      ]);
      res.json(posts.rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error while fetching user posts" });
    }
  }

  async getAllPosts(req, res) {
    try {
      const posts = await db.query("SELECT * FROM post");
      res.json(posts.rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error while fetching all posts" });
    }
  }

  async getOnePost(req, res) {
    try {
      const id = req.params.id;
      const post = await db.query("SELECT * FROM post WHERE id = $1", [id]);
      if (post.rows.length === 0) {
        return res.status(404).json({ error: "Post not found" });
      }
      res.json(post.rows[0]);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error while fetching post" });
    }
  }

  async updatePost(req, res) {
    try {
      const { title, content, id } = req.body;
      const post = await db.query(
        "UPDATE post SET title = $1, content = $2 WHERE id = $3 RETURNING *",
        [title, content, id]
      );
      if (post.rows.length === 0) {
        return res.status(404).json({
          error: "Post not found",
        });
      }
      res.json(post.rows[0]);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error while updating post" });
    }
  }

  async deleteAllPosts(req, res) {
    try {
      await db.query("DELETE FROM post");
      res.json({ message: "All posts have been deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error while deleting all posts" });
    }
  }

  async deleteOnePost(req, res) {
    try {
      const id = req.params.id;
      await db.query("DELETE FROM post WHERE id = $1", [id]);
      res.json({ message: "Post deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error while deleting post" });
    }
  }
}

module.exports = new PostController();
