CREATE DATABASE ecommerce;

---\c into ecommerce

CREATE TABLE "user" (
    username VARCHAR NOT NULL UNIQUE,
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(20) NOT NULL,
    isAdmin BOOLEAN DEFAULT FALSE,
    time_ TIMESTAMP
);

