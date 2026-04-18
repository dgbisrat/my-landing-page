const pool = require("../config/database");

class User {
  static async createTable() {
    const query = `
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        first_name VARCHAR(100) NOT NULL,
        father_name VARCHAR(100),
        grand_name VARCHAR(100),
        email VARCHAR(255) UNIQUE NOT NULL,
        phone_number VARCHAR(20) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        birth_date DATE NOT NULL,
        location VARCHAR(255),
        is_verified BOOLEAN DEFAULT FALSE,
        email_verification_token VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    await pool.query(query);
  }

  static async create(userData) {
    const {
      firstName,
      fatherName,
      grandName,
      email,
      phoneNumber,
      passwordHash,
      birthDate,
      location,
      verificationToken,
    } = userData;
    const query = `
      INSERT INTO users (first_name, father_name, grand_name, email, phone_number, password_hash, birth_date, location, email_verification_token)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      RETURNING id, first_name, father_name, grand_name, email, phone_number, birth_date, location, is_verified
    `;
    const values = [
      firstName,
      fatherName,
      grandName,
      email,
      phoneNumber,
      passwordHash,
      birthDate,
      location,
      verificationToken,
    ];
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  static async findByEmail(email) {
    const query = "SELECT * FROM users WHERE email = $1";
    const result = await pool.query(query, [email]);
    return result.rows[0];
  }

  static async findByPhone(phone) {
    const query = "SELECT * FROM users WHERE phone_number = $1";
    const result = await pool.query(query, [phone]);
    return result.rows[0];
  }

  static async findById(id) {
    const query =
      "SELECT id, first_name, father_name, grand_name, email, phone_number, birth_date, location, is_verified FROM users WHERE id = $1";
    const result = await pool.query(query, [id]);
    return result.rows[0];
  }

  static async verifyEmail(token) {
    const query =
      "UPDATE users SET is_verified = TRUE, email_verification_token = NULL WHERE email_verification_token = $1 RETURNING *";
    const result = await pool.query(query, [token]);
    return result.rows[0];
  }
}

module.exports = User;
