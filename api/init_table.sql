CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE IF NOT EXISTS ref_user (
   user_id SERIAL PRIMARY KEY,
   email VARCHAR(255) UNIQUE NOT NULL,
   password VARCHAR(128) NOT NULL,
   creation_date TIMESTAMPTZ NOT NULL DEFAULT NOW(),
   last_update TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS user_token (
   user_id INT NOT NULL,
   token CHAR(128) NOT NULL,
   expire INT DEFAULT 1800,
   created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
   CONSTRAINT user_for_token
       FOREIGN KEY(user_id)
       REFERENCES ref_user(user_id)
);

/*
CREATE TABLE IF NOT EXISTS user_favorite (
   fav_id SERIAL PRIMARY KEY,
   user_id INT UNIQUE NOT NULL,
   fav VARCHAR(5) NOT NULL,
   CONSTRAINT user_for_favorite
       FOREIGN KEY(user_id)
       REFERENCES ref_user(user_id)
)
*/

CREATE TABLE IF NOT EXISTS user_npc (
	npc_id SERIAL PRIMARY KEY,
	user_id INT NOT NULL,
	earth_cicle INT,
	stamina INT,
	willpower INT,
	air_cicle INT,
	reflexes INT,
	awareness INT,
	fire_cicle INT,
	agility INT,
	intelligence INT,
	water_cicle INT,
	strength INT,
	perception INT,
	void INT,
	info_sup varchar,
	clan varchar,
	npc_family varchar,
	schools JSONB,
	advantages JSONB,
	disadvantages JSONB,
	skills JSONB,
	npc_name varchar,
	character_background varchar,
	appearance varchar,
	personality varchar,
	creation_date TIMESTAMPTZ NOT NULL DEFAULT NOW(),
	last_update TIMESTAMPTZ NOT NULL DEFAULT NOW(),
	CONSTRAINT user_for_token
		FOREIGN KEY(user_id)
		REFERENCES ref_user(user_id)

);

CREATE OR REPLACE FUNCTION clear_expired_tokens()
RETURNS trigger  AS $body$
BEGIN
IF (SELECT COUNT(*) FROM user_token) > 1000
THEN DELETE FROM user_token
WHERE (EXTRACT(epoch FROM CURRENT_TIMESTAMP - created_at) - expire) > 0;
END IF;
RETURN NULL
END;
$body$
LANGUAGE plpgsql;


CREATE OR REPLACE TRIGGER clear_token
AFTER INSERT ON user_token
EXECUTE FUNCTION clear_expired_tokens();

