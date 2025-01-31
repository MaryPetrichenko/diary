const db = require("../db/connect");

class Diary {
  constructor({ id, title, post, date, imageurl }) {
    (this.id = id),
      (this.title = title),
      (this.post = post),
      (this.date = date),
      (this.imageurl = imageurl);
  }

  static async getAll() {
    const response = await db.query("SELECT * FROM diary");
    if (response.rows.length == 0) {
      throw Error("No posts found!");
    } else {
      return response.rows.map((el) => new Diary(el));
    }
  }

  static async getById(id) {
    const response = await db.query("SELECT * FROM diary WHERE id = $1", [id]);
    if (response.rows.length !== 1) {
      throw Error("Unable to find the post!");
    } else {
      return new Diary(response.rows[0]);
    }
  }

  static async create(data) {
    const { title, post, imageurl } = data; // destructuring
    let response = await db.query(
      "INSERT INTO diary (title, post, imageurl) VALUES ($1, $2, $3) RETURNING *",
      [title, post, imageurl]
    );
    return new Diary(response.rows[0]);
  }
  async destroy() {
    const response = await db.query(
      "DELETE FROM diary WHERE id = $1 RETURNING *;",
      [this.id]
    );
    return new Diary(response.rows[0]);
  }
}


module.exports = Diary;