ALTER USER 'root'@'localhost' IDENTIFIED BY 'password';
CREATE DATABASE IF NOT EXISTS testlinkme;
GRANT ALL PRIVILEGES ON *.* TO 'test'@'%' IDENTIFIED BY '123456' WITH GRANT OPTION;
