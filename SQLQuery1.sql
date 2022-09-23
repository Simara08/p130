 create database University
 use University


create table Stu(
Id int primary key,
Fullname nvarchar(255),
Age int
);
delete from Stu where Id=1
select*from Stu

update Stu set Fullname='Simara Maharramli' where Id=2
select top 2*from Stu
select*from Stu where Age=(select MAX(Age)from Stu)
select*from Stu where Age=(select MIN(Age)from Stu)
select*from Stu where Fullname not LIKE '[c-e]'
select*from Stu order by Age ASC
select*from Stu order by Age DESC

select GETDATE() as Date 

select count(*)from Stu 

