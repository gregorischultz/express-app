const express = require ("express"); //primeiro sempre importar express
const app = express(); //depois criar uma aplicaçao que chamara o modulo express, fazendo isso podemos ter acesso e muitos metodos express

const port = 5000;

const welcome = (req, res) => {
    res.send ("welcome to express");
};//aqui a funçao 

app.get ("/", welcome);//aqui o caminho, ou seja quando tiver em "/" vai rodar a funçao "welcome"

const welcomeName = (req, res) => {
    res.send (`welcome ${req.params.name}`);
};//a funçao para mostrar o bem vindo com o nome

app.get ("/users/:name", welcomeName);//quando o caminho for "/users/:name" vai todar a funçao "welcomeName", que vai aparecer "welcome + nome da pessoa"

const cocktails = [
    {
        id: 1,
        name: "Margarida",
    },
    {
        id: 2,
        name: "Mojito",
    },
    {
        id: 3,
        name: "Cuba Libre",
    },
];

const getCocktails = (req, res) => {
    res.status(200).json(cocktails);
};

app.get ("/api/cocktails", getCocktails);
//METHOD é um metodo de solicitaçao HTTP (get, post, put, delete)
//PATH é um caminho no servidor
//HANDLER é a funçao executada quando o caminho é reconhecido

app 
   .listen (port, () => {
    console.info (`Server is listening on port ${port}`);
   })
   .on ("error", (err) => {
    console.error ("Error", err.message);
   });

