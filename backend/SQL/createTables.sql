CREATE TABLE business
(
    id serial not null primary key,
    name varchar (255) not null
);

CREATE TABLE hotels
(
    id serial not null primary key,
    name varchar(255) not null,
    type varchar(255) not null,
    stars float not null,
    description varchar (255) not null,
    address varchar (255) not null,
    breakfast boolean not null,
    "idBusiness" integer references business(id) on delete cascade
);

CREATE TABLE rooms
(
    id serial not null primary key,
    beds integer not null,
    persons integer not null,
    price float not null,
    reserved boolean,
    "idHotel" integer references hotels(id) on delete cascade
);

CREATE TABLE reservation
(
    id serial not null primary key,
    customer varchar not null,
    checkin DATE not null,
    checkout DATE not null,
    "idRooms" integer references rooms(id) on delete cascade
);

CREATE TABLE tickets
(
    id serial not null primary key,
    fromcity varchar not null,
    tocity varchar not null,
    departdate date not null,
    returndate date not null,
    price float not null,
    type varchar not null,
    customer varchar,
    busy boolean,
    "idBusiness" integer references business(id) on delete cascade
);

