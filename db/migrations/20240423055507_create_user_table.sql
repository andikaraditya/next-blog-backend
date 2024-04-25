-- migrate:up
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4 (), name VARCHAR(100), email VARCHAR(100) NOT NULL UNIQUE, password VARCHAR(100) NOT NULL
);

-- migrate:down
DROP TABLE IF EXISTS users;