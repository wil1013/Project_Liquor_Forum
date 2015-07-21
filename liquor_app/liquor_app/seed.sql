INSERT INTO	users	(name,password,img_url,email,latitude,longitude,city,state)	VALUES('The Hulk','1234','http://assets.nydailynews.com/polopoly_fs/1.986006.1336765559!/img/httpImage/image.jpg_gen/derivatives/gallery_1200/hulk-hogan-pastamania.jpg','hulk@hulk.net','40.7402420','-73.9895074','New York','NY');
INSERT INTO	users	(name,password,img_url,email,latitude,longitude,city,state)	VALUES('Chuck','1234','https://upload.wikimedia.org/wikipedia/commons/b/b1/Chuck_Norris,_The_Delta_Force_1986.jpg','chuck@hulk.net','40.7402416','-73.9895076','New York','NY');
INSERT INTO	users	(name,password,img_url,email,latitude,longitude,city,state)	VALUES('Derek Zoolander','1234','http://i.giphy.com/KeZBE7z1VT9bW.gif','Dzoo@hulk.net','40.7402418','-73.9895080','New York','NY');
INSERT INTO	users	(name,password,img_url,email,latitude,longitude,city,state)	VALUES('Ron Burgundy','1234','http://i.giphy.com/dEimmuap85Xi.gif','Dburg@hulk.net','40.7402414','-73.9895090','New York','NY');
												
												
INSERT INTO	liquors	(liq_name,img_url,user_id,description)	VALUES('Willet','http://www.bigjoneschicago.com/bigjonesblog/wp-content/uploads/2013/12/Willett.jpg',	'1','Smoky and smooth');				
INSERT INTO	liquors	(liq_name,img_url,user_id,description)	VALUES('Larceny','http://cdn.bourbonbanter.com/wp-content/uploads/2012/08/heavenhilllarcenybourbon.jpg?090fad','2','Smoky and smooth');				
INSERT INTO	liquors	(liq_name,img_url,user_id,description)	VALUES('Redemption High Rye','http://www.holidaywinecellar.com/images/Product/large/191472.jpg','4','good stufffffffffff');				
INSERT INTO	liquors	(liq_name,img_url,user_id,description)	VALUES('Michters','http://www.proprofs.com/api/ckeditor_images/michters.jpg','4','basiccccccccc');				
INSERT INTO	liquors	(liq_name,img_url,user_id,description)	VALUES('Unicorn Tears','https://verypersonality.files.wordpress.com/2015/06/unicorn-tears.jpg','3','hard to find but worth every penny down to the last tear');				
INSERT INTO	liquors	(liq_name,img_url,user_id,description)	VALUES('Pappy Van Winkle','http://liquor.s3.amazonaws.com/wp-content/uploads/2014/11/Pappy-Van-Winkle%E2%80%99s-Family-Reserve-20yr.jpg','1','expensive and sold on the black market. cannot get anywhere');				
												
INSERT INTO	threads	(title,liquor_id,comment,view_count,comment_count,user_id)	VALUES('Best Bourbon?',	3,'	maybe it is this one',	5,	3,	4	);		
INSERT INTO	threads	(title,liquor_id,comment,view_count,comment_count,user_id)	VALUES('Where can I buy ?',	1,'	cannot find this anywhere',	3,	10,	1	);		
INSERT INTO	threads	(title,liquor_id,comment,view_count,comment_count,user_id)	VALUES('Not good',	2,'	do not waste your time',	23,	5,	3	);		