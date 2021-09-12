CREATE TABLE profiles (
     ID SERIAL PRIMARY KEY,
     name VARCHAR(255),
     bio VARCHAR(255),
     apikey VARCHAR(40)
);

INSERT INTO profiles (name, bio, apikey)
 VALUES ('Rachel Green', 'https://www.instagram.com/rachel.green.friends', '12341'),
('Chandler Bing', 'htttps://www.twitter.com/chandlermbing', '12342'),
('Phoebe Buffay', 'https://www.youtube.com/channel/UCEMj1MGLOwN0X3H0f6hjnUQ', '12343'),
('Joey Tribianni', 'https://www.facebook.com/joeytribbianiunofficial', '12344'),
('Monica Geller', 'https://www.instagram.com/imonicageller', '12346'),
('Ross Geller', 'https://www.linkedin.com/in/ross-eustace-geller-ph-d-837194184', '12345');