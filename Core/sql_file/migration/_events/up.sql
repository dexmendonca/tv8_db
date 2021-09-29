CREATE SCHEMA IF NOT EXISTS eventBus;

Create Or Replace Function eventBus.emit(v_eventname VARCHAR,v_data JSON) Returns BOOLEAN As $$
Begin
    PERFORM pg_notify(v_eventname, v_data::text);
    Return TRUE ;
End;
$$ language plpgsql;