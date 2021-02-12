INSERT INTO user (username, email, password)
VALUES ('Paul', 'pc@hotmail.com', 'password');
INSERT INTO post (title, post_url, user_id, created_at, updated_at)
VALUES (
        "Taskmaster goes public!",
        "https://taskmaster/press",
        1,
        CURRENT_TIMESTAMP,
        CURRENT_TIMESTAMP
    );