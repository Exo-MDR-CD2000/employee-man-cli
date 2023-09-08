insert into department (id, name) values
    (1, 'Sales'),
    (2, 'Engineering'),
    (3, 'Finance'),
    (4, 'Legal');

-- add in some example roles
insert into role (id, title, salary, department_id) values
(1, 'Sales Lead', 100000, 1),
(2, 'Salesperson', 80000, 1),
(3, 'Lead Engineer', 150000, 2),
(4, 'Software Engineer', 120000, 2),
(5, 'Accountant Team Lead', 125000, 3),
(6, 'Legal Team Lead', 250000, 4),
(7, 'Lawyer', 90000, 4),
(8, 'Junior Accountant', 75000, 3);


-- add in some example employees

insert into employee (id, first_name, last_name, role_id, manager_id) values
(1, 'John', 'Doe', 1, null),
(2, 'Mike', 'Chan', 2, 1),
(3, 'Ashley', 'Rodriguez', 3, null),
(4, 'Kevin', 'Tupik', 4, 3),
(5, 'Malia', 'Brown', 5, null),
(6, 'Sarah', 'Lourd', 6, null),
(7, 'Tom', 'Allen', 7, 6),
(8, 'Sam', 'Wright', 8, 5);

-- null values determine the manager of the department