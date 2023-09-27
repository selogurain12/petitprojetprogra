var nb1, nb2, opera,cf1,clique,resultat,inclu;
function valeur(){
    nb1 = Number(document.getElementById('nb1').value)
}
function chiffres(nb){
    switch(nb){
        case 1:
            cf1 = document.getElementById("resultat");
            cf1.value += "1"
            break;
        case 2:
            cf1 = document.getElementById("resultat");
            cf1.value += "2";
            break;
        case 3:
            cf1 = document.getElementById("resultat");
            cf1.value += "3";
            break;
        case 4:
            cf1 = document.getElementById("resultat");
            cf1.value += "4";
            break;
        case 5:
            cf1 = document.getElementById("resultat");
            cf1.value += "5";
            break;
        case 6:
            cf1 = document.getElementById("resultat");
            cf1.value += "6";
            break;
        case 7:
            cf1 = document.getElementById("resultat");
            cf1.value += "7";
            break;
        case 8:
            cf1 = document.getElementById("resultat");
            cf1.value += "8";
            break;
        case 9:
            cf1 = document.getElementById("resultat");
            cf1.value += "9";
            break;
        case 0:
            cf1 = document.getElementById("resultat");
            cf1.value += "0";
            break;
        case '+':
        case '-':
        case '*':
        case '/':
            nb1 = Number(document.getElementById('resultat').value);
            opera = nb;
            cf1 = document.getElementById('resultat');
            cf1.value = 0;
            break;
        case "=":
           nb2 = Number(document.getElementById('resultat').value);
            console.log(nb2)
            switch (opera){
                case '+':
                    resultat = nb1 + nb2;
                break;
                case '-':
                    resultat = nb1 - nb2;
                break;
                case '*':
                    resultat = nb1 * nb2;
                break;
                case '/':
                    resultat = nb1 / nb2;
                break;
            }
            cf1 = document.getElementById('resultat');
            cf1.value = resultat; 
            break;
        case 'CE':
            cf1 = document.getElementById('resultat');
            cf1.value = 0;
            break;
        case '+-':
            clique = Number(document.getElementById("resultat").value);
            let newValue = -clique;
            cf1.value = newValue;
            break;
        case 'suppr':
            clique = document.getElementById("resultat").value;
            let newstr = clique.substring(0,clique.length - 1);
            cf1.value = newstr;
            break;
        case ',':
            cf1 = document.getElementById("resultat");
            cf1.value += ".";
            break;
        case '%':
            nb1 = Number(document.getElementById('resultat').value);
            result = nb1 / 1000;
            cf1.value = result
            break;
            
    }
}