var nb1, nb2, opera,radio,resultat,insert;
function valeurs(){
    nb1 = Number(document.getElementById('nb1').value);
    nb2 = Number(document.getElementById('nb2').value);
    var radio = document.getElementsByName('operateur');
    for (var i =0; i < radio.length; i++){
        if(radio[i].checked){
            opera = radio[i].value;
        }
    }
    if(opera == "+"){
        resultat = nb1 + nb2;
    }
    if(opera == "-"){
        resultat = nb1 - nb2;
    }
    if(opera == "*"){
        resultat = nb1 * nb2;
    }
    if(opera == "/"){
        resultat = nb1 / nb2;
    }
    insert = document.getElementById("resultat");
    insert.innerHTML += "Le résultat est : " + resultat +'<br>';
}