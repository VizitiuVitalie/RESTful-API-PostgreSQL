const db = require("../db");

class UserController {
  async createUser(req, res) {
    try {
      const { name, surname } = req.body;
      const newPerson = await db.query(
        `INSERT INTO person (name, surname) VALUES ($1, $2) RETURNING *`,
        [name, surname]
      );
      res.json(newPerson.rows[0]);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error while creating user" });
    }
  }

  async getAllUsers(req, res) {
    try {
      const users = await db.query("SELECT * FROM person");
      res.json(users.rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error while fetching users" });
    }
  }

  async getOneUser(req, res) {
    try {
      const id = req.params.id;
      const user = await db.query("SELECT * FROM person WHERE id = $1", [id]);
      if (user.rows.length === 0) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json(user.rows[0]);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error while fetching user" });
    }
  }

  async updateUser(req, res) {
    try {
      const { id, name, surname } = req.body;
      const userCheck = await db.query("SELECT * FROM person WHERE id = $1", [
        id,
      ]);
      if (userCheck.rows.length === 0) {
        return res.status(404).json({ error: "User not found" });
      }
      const user = await db.query(
        "UPDATE person SET name = $1, surname = $2 WHERE id = $3 RETURNING *",
        [name, surname, id]
      );
      res.json(user.rows[0]);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error while updating user" });
    }
  }

  async deleteAllUsers(req, res) {
    try {
      await db.query("DELETE FROM person");
      res.json({ message: "All users have been deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error while deleting all users" });
    }
  }

  async deleteOneUser(req, res) {
    try {
      const id = req.params.id;
      await db.query("DELETE FROM person WHERE id = $1", [id]);
      res.json({ message: "User deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error while deleting user" });
    }
  }
}

module.exports = new UserController();
