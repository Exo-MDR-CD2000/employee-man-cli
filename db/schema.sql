-- should define the schema for the database

drop database if exists employee_manager_db;
create database employee_manager_db;

use employee_manager_db;

create table department (
    id int not null auto_increment primary KEY,
    name varchar(30) not null
);

create table role (
    id int not null auto_increment primary KEY,
    title varchar(30) not null,
    salary int not null,
    department_id int,
    foreign key (department_id) references department(id)
);

create table employee (
    id int not null auto_increment primary KEY,
    first_name varchar(30) not null,
    last_name varchar(30) not null,
    role_id int,
    manager_id int,
    foreign key (role_id) references role(id),
    foreign key (manager_id) references employee(id)
);