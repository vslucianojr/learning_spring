INSERT INTO public.hotels(
	namehotel, typehotel, starshotel, descriptionhotel, addresshotel, breakfasthotel, businessowner)
	VALUES ('Laser Hotel','Hotel', 4.5, 'Hotel bem localizado e próximo a praia', 'Rua dos CI, SN - Joao Pessoa', true, 1);

INSERT INTO public.hotels(
	namehotel, typehotel, starshotel, descriptionhotel, addresshotel, breakfasthotel, businessowner)
	VALUES ('Pousada da Boa','Pousada', 3.5, 'Pousada com piscina e churrasqueira', 'Av. Epitacio Pessoa, 20 - Joao Pessoa', false, 1);

INSERT INTO public.hotels(
	namehotel, typehotel, starshotel, descriptionhotel, addresshotel, breakfasthotel, businessowner)
	VALUES ('Synchro Hotel','Hotel', 4, 'Este hotel tem muitos quartos com ar condicionado', 'Rua dos Escoteiros, SN - Joao Pessoa', true, 1);

INSERT INTO public.rooms(
	"floorroom", "bedsnumber", "personsnumber", "priceroom", "reservedroom", "hotelsowner")
	VALUES (1, 2, 4, 130.50, false, 1);

INSERT INTO public.rooms(
	"floorroom", "bedsnumber", "personsnumber", "priceroom", "reservedroom", "hotelsowner")
	VALUES (1, 2, 4, 200.90, false, 1);

INSERT INTO public.rooms(
	"floorroom", "bedsnumber", "personsnumber", "priceroom", "reservedroom", "hotelsowner")
	VALUES (1, 4, 4, 680.50, false, 1);