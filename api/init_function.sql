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

/*------------------------------*/
CREATE OR REPLACE TRIGGER clear_token
AFTER INSERT ON user_token
EXECUTE FUNCTION clear_expired_tokens();

INSERT into ref_user (email, password)
   VALUES  ('test@test.com',crypt('test@test.com',gen_salt('bf',8)));

/*------------------------------*/
CREATE OR REPLACE FUNCTION login_token(mdp varchar, mail varchar)
RETURNS TABLE (
        user_id int,
        token VARCHAR,
		email VARCHAR
)
AS $body$
with is_confirm_user as (
	SELECT user_id
	,(password = crypt(mdp,password)) as responce
	,email
	FROM ref_user
	WHERE email = mail
)

, create_token as (
    SELECT user_id
    ,CASE WHEN responce THEN encode(gen_random_bytes(32), 'hex')  ELSE null END as token
    ,email
    FROM is_confirm_user

)
, insert_token_if_valid as (
    INSERT into user_token (user_id,token)
    SELECT user_id,token
    FROM create_token
    WHERE token is not null
)

SELECT *
FROM create_token
$body$
LANGUAGE SQL;

/*------------------------------*/

CREATE OR REPLACE FUNCTION check_token(x int, y varchar)
RETURNS TABLE (
        user_id int,
        token boolean
)
AS $body$
SELECT user_id, true as is_valid
FROM user_token
where user_id = x
AND token= y
AND (EXTRACT( epoch FROM CURRENT_TIMESTAMP - created_at)  - expire <= 0)
GROUP BY user_id;
$body$
LANGUAGE SQL;


/*------------------------------*/

CREATE OR REPLACE FUNCTION delete_user_token(x int)
RETURNS void
AS $body$
DELETE FROM user_token
WHERE user_id = x
$body$
LANGUAGE SQL;

/*------------------------------*/

CREATE OR REPLACE FUNCTION insert_user_npc(x1 int, x2 int, x3 int, x4 int, x5 int, x6 int, x7 int, x8 int, x9 int, x10 int, x11 int, x12 int, x13 int, x14 int,
							x15 varchar, x16 varchar, x17 varchar, x18 jsonb, x19 jsonb, x20 jsonb, x21 jsonb, x22 varchar, x23 varchar, x24 varchar, x25 varchar)
RETURNS TABLE(
	npc_id int, clan varchar, npc_name varchar

)
AS $body$
WITH inserted_data as (
	SELECT	x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11, x12, x13, x14,
	x15, x16, x17, x18, x19, x20, x21, x22, x23, x24, x25
)

INSERT INTO user_npc (user_id, earth_cicle, stamina, willpower, air_cicle, reflexes, awareness,
fire_cicle, agility, intelligence, water_cicle, strength, perception, void, info_sup, clan,
npc_family, schools, advantages, disadvantages, skills, npc_name, character_background,
appearance, personality)
SELECT *
FROM inserted_data
RETURNING npc_id, clan, npc_name
$body$
LANGUAGE SQL;

/*------------------------------*/


CREATE OR REPLACE FUNCTION select_all_user_npc(x int)
RETURNS TABLE(
	npc_id int, clan varchar, npc_name varchar
)
AS $body$
select npc_id, clan, npc_name
FROM user_npc
WHERE user_id=x
$body$
LANGUAGE SQL;

/*------------------------------*/

CREATE OR REPLACE FUNCTION select_user_npc(x int)
RETURNS TABLE(
	earth_cicle INT,stamina INT,willpower INT,air_cicle INT,reflexes INT,awareness INT,fire_cicle INT,agility INT,intelligence INT,water_cicle INT,
	strength INT,perception INT,void INT,info_sup varchar,clan varchar,npc_family varchar,schools JSONB,advantages JSONB,
	disadvantages JSONB,skills JSONB,npc_name varchar,character_background varchar,appearance varchar,personality varchar
)
AS $body$
	SELECT earth_cicle, stamina, willpower, air_cicle, reflexes, awareness,
	fire_cicle, agility, intelligence, water_cicle, strength, perception, void, info_sup, clan,
	npc_family, schools, advantages, disadvantages, skills, npc_name, character_background,
	appearance, personality
	FROM user_npc
	WHERE npc_id=x
$body$
LANGUAGE SQL;


/*------------------------------*/

CREATE OR REPLACE FUNCTION drop_user_npc(x int)
RETURNS TABLE(
	npc_id int, clan varchar, npc_name varchar
)
AS $body$
WITH info_delete as (
SELECT npc_id, clan, npc_name
FROM user_npc
WHERE npc_id=x
),

delete_info as (
	DELETE FROM user_npc
	WHERE npc_id=x
)

SELECT * FROM info_delete
$body$
LANGUAGE SQL;