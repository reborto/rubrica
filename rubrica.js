const rubrica=[];

function iscriviti(){
    let dati=prompt ("inserisci i tuoi dati separandoli da una virgola");
    let input=dati.split(',');

    let nuovoUser=schedaUser(input);
    aggiungiUser(nuovoUser);
    console.log(rubrica)
}

function schedaUser(arrData){
/*definisco un user*/
let user={
    nome: arrData[0],
    cognome:arrData[1],
    numero:arrData[2],
    email:arrData[3],
    via:arrData[4]
}
return user;

} 

function aggiungiUser(user){
    rubrica.push(user)
}