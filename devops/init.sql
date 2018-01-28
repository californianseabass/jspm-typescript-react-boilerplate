DROP ROLE IF EXISTS my_admin;
CREATE ROLE my_admin;
ALTER ROLE my_admin WITH LOGIN;
ALTER ROLE my_admin WITH PASSWORD 'pass4';

CREATE SCHEMA IF NOT EXISTS public AUTHORIZATION my_admin;

CREATE SCHEMA IF NOT EXISTS am AUTHORIZATION my_admin;
GRANT ALL PRIVILEGES ON SCHEMA am TO my_admin;

DROP ROLE IF EXISTS my_pg_user;
CREATE ROLE my_pg_user;
ALTER ROLE my_pg_user with LOGIN;
ALTER ROLE my_pg_user WITH PASSWORD 'pass325';
GRANT ALL PRIVILEGES ON SCHEMA am to my_pg_user;

CREATE TABLE am.users
(
  id uuid PRIMARY KEY,
  password VARCHAR NOT NULL,
  email VARCHAR UNIQUE NOT NULL,
  name VARCHAR NOT NULL
) TABLESPACE pg_default;

CREATE TABLE am.nodes
(
  id uuid PRIMARY KEY,
  name varchar NOT NULL,
  created_ts timestamp NOT NULL,
  expiration_ts timestamp,
  size INTEGER,
  user_id uuid REFERENCES am.users(id),
  clusters varchar(64)[] DEFAULT array[]::varchar(64)[]
) TABLESPACE pg_default;


GRANT SELECT, UPDATE, INSERT, DELETE ON ALL TABLES IN SCHEMA am TO my_pg_user;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA am to my_pg_user;
