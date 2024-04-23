-- migrate:up
ALTER TABLE posts ADD COLUMN status VARCHAR(20) DEFAULT 'published';

-- migrate:down