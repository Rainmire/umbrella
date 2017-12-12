# Database Schema

## users

Column Name | Data Type | Details
------------|-----------|-----------
id          | integer   | not null, primary key
provider    | string    |
name        | string    | not null, indexed
email       | string    | not null, unique, indexed
type        | string    | not null
teacher_class | string  | indexed
oauth_token | string    | not null, unique
oauth_expires_at | datetime | not null
created_at  | datetime  | not null
updated_at  | datetime  | not null

## children

Column Name | Data Type | Details
------------|-----------|-----------
id          | integer   | not null, primary key
name        | string    | not null, indexed
teacher_id  | integer   | not null, indexed, foreign key
parent_id   | integer   | not null, indexed, foreign key
created_at  | datetime  | not null
updated_at  | datetime  | not null

## moments

Column Name | Data Type | Details
------------|-----------|-----------
id          | integer   | not null, primary key
body        | text      | not null
created_at  | datetime  | not null
updated_at  | datetime  | not null
author_id   | integer   | not null, foreign key

## messages

Column Name | Data Type | Details
------------|-----------|-----------
id          | integer   | not null, primary key
body        | text      | not null
author_id   | integer   | not null, foreign key, indexed
child_id    | integer   | not null, foreign key, indexed
created_at  | datetime  | not null
updated_at  | datetime  | not null
