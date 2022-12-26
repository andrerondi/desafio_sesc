# Números por Extenso

## Descrição:
Um servidor HTTP que, para cada requisição GET, retorne como resposta um JSON cuja chave extenso seja a versão por extenso do número inteiro
enviado no path. Os números podem estar no intervalo [-99999, 99999].

## Instruções para executar o projeto:

Clone o projeto:  
**$ git clone https://github.com/andrerondi/desafio_sesc.git**

Acesse o diretório do projeto:  
**$ cd desafio_sesc**

Execute o docker-compose:  
**$ docker-compose up** ou **$ sudo docker-compose up**

Acesse a URL:  
**http://localhost:3000**  
Obs: Use qualquer navegador web ou use o Postman para realizar os testes.

## Exemplos de Resultados Esperados:
λ curl http://localhost:3000/1  
{ "extenso": "um" }  
λ curl http://localhost:3000/-1042  
{ "extenso": "menos mil e quarenta e dois" }  
λ curl http://localhost:3000/94587  
{ "extenso": "noventa e quatro mil e quinhentos e oitenta e sete" }  


## Tecnologias Utilizadas:
* Docker e Docker-compose;
* Nodejs (express, nodemon);
* Postman;
* Visual Studio Code.
