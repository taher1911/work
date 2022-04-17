---
title: SQL
description: Google Cloud SQL
img: image1.jpg
alt: Google Cloud SQL
updatedAt: 2022-1-25
status: draft

author:
  name: Chrisurf
  bio: All about Chrisurf
  image: avatar.png
---

# Google Cloud SQL

## Sample data
1. Get sample data from [here](https://www.contextures.com/xlsampledata01.html)
2. Unzip file and open the file in Gogole sheets
3. Download the data tab as csv file


## Setup
1. Create a new cloud compute instance
2. Create a new database

## SQL
Reference on [w3schools](https://www.w3schools.com/sql/sql_create_table.asp)

Connect to google mssql
```bash
$ mysql --host=INSTANCE_IP --user=root --password
```

### Show all database
```bash
> SHOW DATABASES;
```

### Connect to database
```bash
> USE database_name;
```

### Create database table
```bash
> CREATE TABLE Persons (
    PersonID int,
    LastName varchar(255),
    FirstName varchar(255),
    Address varchar(255),
    City varchar(255)
);
```

*crerate a sample table*
```bash
> CREATE TABLE food (
    Id int NOT NULL AUTO_INCREMENT,
    OrderDate varchar(255),
    Region varchar(255),
    City varchar(255),
    Category varchar(255),
    Product varchar(255),
    Quantity varchar(255),
    UnitPrice varchar(255),
    TotalPrice varchar(255),
    PRIMARY KEY (Id)
);
```

### Show all tables in database
```bash
> SHOW TABLES;
```

### Show all rows in table
```bash
> SELECT * FROM table_name;
```

