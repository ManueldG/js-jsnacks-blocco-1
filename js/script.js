/*

Oltre ai 4 visti insieme ve ne lascio uno bonus che non abbiamo fatto, per provare se volete a risolverlo.
Nome della repo: js-jsnacks-blocco-1
Di seguito gli snacks:
Snack 1
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while
Snack 2
Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo
Snack 3
Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.
Snack 4
Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari
Snack 5 - Bonus
Crea due array di numeri che hanno un numero di elementi diversi.
Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

*/


/*
 1 )
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while

*/ 

var valore=0;
var tMax = 5;

for (i=0; i < tMax ; i++)
    valore +=parseInt(prompt ("inserisci valore"+(i+1)+" / "+tMax));
console.log("somma con for: "+valore+" "+i+" / "+tMax)


    valore =0;
    i=0;
do{
    valore += parseInt(prompt ("inserisci valore"+(i+1)+" / "+tMax));
    i++;
}while (i<tMax)

console.log("somma con while:"+valore+" "+i+" / "+tMax);



/*
2 )
Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo
*/


var numero = parseInt(prompt("inserisci numero"));
if (numero%2)
    console.log(numero+1);
else
    console.log(numero);


/*
3 )
Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.
*/

var nomi = ["luca","andrea","andrea","roberto","gianni","paolo","gigi","stefano"];
var cognomi = ["bianchi","rossi","verdi","smith"];
var newlist= [];
for(var i=0 ; i < 3; i++)
   newlist[i] = (nomi[ Math.trunc(Math.random()*nomi.length).toFixed(0) ]+" "+cognomi[Math.trunc(Math.random()*cognomi.length)]);
   
console.log (newlist);




/*
4 )
Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

*/ 

array = [2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1];
var somma = 0;

for (i=0; i<array.length; i+=2)
    somma += array[i+1];

console.log(array);
console.log(somma);

/*

5) 
Crea due array di numeri che hanno un numero di elementi diversi.
Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.
*/ 

var a = [2,1,2,1];
var b = [4,6];

while (a.length!==b.length){
    console.log(a);
    console.log(b);
    if (a.length>b.length)
        b.push(Math.trunc(Math.random()*100));
    else
        a.push(Math.trunc(Math.random()*100));
}

console.log("fine a"+a);
console.log("fine b"+b);
 


















