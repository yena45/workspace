-- CREATE FUNCTION `f_emoinfo`(_id INT)
-- RETURNS VARCHAR(62)
-- BEGIN
--     DECLARE v_ret VARCHAR(62) DEFAULT '';

--     SELECT CONCAT(e.ename, '(', d.dname, ')')
--     INTO v_ret
--     FROM Emp e
--     LEFT JOIN Dept d ON e.dept = d.id
--     WHERE e.id = _id;

-- RETURN 1;
-- END 
CREATE VIEW v_emp_dept AS
SELECT 
    e.id AS emp_id,
    e.ename AS emp_name,
    e.salary,
    d.id AS dept_id,
    d.dname
FROM Emp e
INNER JOIN Dept d ON e.dept = d.id;


drop procedure if exists sp_deptinfo;

delimiter $$

CREATE DEFINER=`hana4`@`%` PROCEDURE `sp_deptinfo`(_dept_name varchar(31))
xxx:BEGIN
    SELECT COUNT(*) AS empcnt, AVG(salary) AS avg_salary
    FROM v_emp_dept
    WHERE dname = _dept_name;
END $$

delimiter ;

CALL sp_deptinfo('영업부');