CREATE DATABASE livro;

CREATE TABLE carro(
  id BIGINT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(255),
  descricao VARCHAR(255),
  url_foto VARCHAR(255),
  url_video VARCHAR(255),
  latitude VARCHAR(255),
  longitude VARCHAR(255),
  tipo VARCHAR(255),
  PRIMARY KEY (id)
);

DESC carro;

INSERT INTO carro(nome, descricao, url_foto, url_video, latitude, longitude, tipo)
VALUES ('Ferrari FF', 'Descrição da Ferrari FF', 'http://www.livroandroid.com.br/livro/carros/esportivos/Ferrari_FF.png', 'http://www.livroiphone.com.br/carros/esportivos/ferrari_ff.mp4', '44.532218', '10.864019', 'esportivo');