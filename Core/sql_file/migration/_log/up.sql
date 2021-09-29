Create Table log_table(
	id serial primary key,
	log text,
	created timestamptz default now()
);
Create Index on log_table (id);

CREATE OR REPLACE FUNCTION console_log(service varchar, data text ) RETURNS BOOLEAN AS
$body$
BEGIN
	INSERT INTO log_table(log) VALUES (service || ' ->>' || data);
	RETURN true;
END;
$body$
language plpgsql;
