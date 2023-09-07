-- should define the schema for the database

drop database if exists employee_manager_db;
create database employee_manager_db;

use employee_manager_db;

create table department (
    id int primary KEY,
    name varchar(30) not null
);

create table role (
    id int primary KEY,
    title varchar(30) not null,
    salary int not null,
    -- can also be set to decimal but it looks weird having a yearly salary with cents
    department_id int,
    -- determine later if department_id needs to be set to 'not null'
    foreign key (department_id) references department(id)
);

create table employee (
    id int primary key,
    first_name varchar(30) not null,
    last_name varchar(30) not null,
    role_id int,
    manager_id int,
    foreign key (role_id) references role(id),
    foreign key (manager_id) references employee(id)
)