--
-- select * from prod.pg_logger order by aud_insert_ts desc limit 99;
-- drop table prod.pg_logger;
-- alter table prod.pg_logger rename to pg_logger_20231021;
create table if not exists prod.pg_logger(
  pg_logger_id bigint not null generated always as identity primary key,
  level_t text,
  message_t text,
  meta_t text,
  route_name_t text,
  route_function_t text,
  route_function_sub_t text,
  url_t text,
  req_t text,
  user_ip text,
  user_ua text,

  aud_src_t text,
  aud_active_f boolean default true null,
  aud_insert_dt date default current_date not null,
  aud_insert_ts timestamp(6) with time zone default current_timestamp not null,
  aud_update_ts timestamp(6) with time zone null
);