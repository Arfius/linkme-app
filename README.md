# Angular(5) + Spring 

Example of integration between Angular5 and Spring.io created for a _testcode_.  

This web app permits to load data into the database from a file, then you can explore them as list and download.

* Angular 5 + Bootstrap

- Spring Boot
- Mysql (Docker)

## How to Install

`$ git clonehttps://github.com/Arfius/linkme-app.git`

#### Setup Container MySql Server

```
$  cd linkme-app/sql
$ docker run -p3306:3306 -p33060:33060 --name=mysql_test -d mysql/mysql-server:5.7
> (wait..until random password is generated)
$ docker logs mysql_test | grep GENERATED
> (take note of GENERATED PASSWORD)
$ docker cp ./script.sql mysql_test:/script.sql
$ docker cp ./run_script_mysql.sh mysql_test:/run_script_mysql.sh
$ docker exec -it mysql_test bash run_script_mysql.sh
> (insert GENERATED PASSWORD)
```

#### Compile Angular (5) Web Client

```
 $ cd linkme-app/src/linkme-app/
 $ npm install
 $ ng build --delete-output-path=false --output-path=../main/resources/static
```

#### Compile Server Spring boot

```
$ cd linkme-app/
$ ext install GabrielBB.vscode-lombok
$ gradle build
```

#### Run Server

```
$ cd linkme-app/
$ gradle bootRun
> open browser at http://localhost:8080 
> use this json for 
$ testing linkme-app/load_this_json.json
```