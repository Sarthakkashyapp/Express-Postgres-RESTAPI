CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email Varchar(100) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT NOW()
)