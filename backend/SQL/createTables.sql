CREATE TABLE business(
    id serial not null primary key,
    businessName varchar (255) not null
)

CREATE TABLE hotels(
	idHotel serial not null primary key,
	nameHotel varchar(255) not null,
	typeHotel varchar(255) not null,
	starsHotel float not null,
	descriptionHotel varchar (255) not null,
	addressHotel varchar (255) not null,
	breakfastHotel boolean not null,
	businessOwner integer references bussines(id) on delete cascade
);

CREATE TABLE rooms(
    idRoom serial not null primary key,
    floorRoom integer not null,
    bedsNumber integer not null,
    persons integer not null,
    price float not null,
    reserved boolean,
    hotelsOwner integer references hotels(idHotel) on delete cascade
);

CREATE TABLE reservation(
    idReservation serial not null primary key,
    customerName varchar not null,
    checkInRes DATE not null,
    checkOutRes DATE not null,
    roomsRes integer references rooms(idRoom) on delete cascade
);

CREATE TABLE tickets(
    idTicket serial not null primary key,
    fromCity varchar not null,
    toCity varchar not null,
    departDate date not null,
    returnDate date not null,
    priceTicket float not null,
    typeTicket varchar not null,
    customerName varchar,
    busyTicket boolean,
    businessOwner integer references business(id) on delete cascade
);

