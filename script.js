// ==========================
// GOLDEN CANDYS
// ==========================

// Chance da Mensagem Dourada.
// Quanto maior o número, mais rara ela será.
// 250 = aproximadamente 1 chance em 250.
const CHANCE_MENSAGEM_DOURADA = 250;

// Frases (PARTE 1 - 100)
const frases = [

{numero:1,texto:"Que seu dia seja tão doce quanto este brigadeiro. 🤍"},
{numero:2,texto:"Você é mais forte do que imagina. 💛"},
{numero:3,texto:"Nunca desista dos seus sonhos. ✨"},
{numero:4,texto:"Deus está preparando algo lindo para você. 🙏"},
{numero:5,texto:"Continue caminhando. O melhor ainda está por vir. 🌸"},
{numero:6,texto:"Seu sorriso ilumina o mundo. 😊"},
{numero:7,texto:"Tudo coopera para o bem daqueles que amam a Deus. ❤️"},
{numero:8,texto:"Você merece viver coisas incríveis. 🌻"},
{numero:9,texto:"A esperança sempre vence o medo. 🤍"},
{numero:10,texto:"Confie no tempo de Deus. ⏳"}

];

// ==========================
// NÃO ALTERE DAQUI PARA BAIXO
// ==========================

const ganhou = Math.floor(Math.random()*CHANCE_MENSAGEM_DOURADA)==0;

const frase=document.getElementById("frase");
const numero=document.getElementById("numero");
const premio=document.getElementById("premio");

if(ganhou){

const codigo="GC-"+Math.floor(Math.random()*900000+100000);

frase.innerHTML="👑<br><br><strong>VOCÊ ENCONTROU A MENSAGEM DOURADA!</strong>";

numero.innerHTML="";

premio.style.display="block";

premio.innerHTML=`
🎁 <br><br>

Código do prêmio:<br><br>

<b>${codigo}</b>

<br><br>

Apresente este código para ganhar um brigadeiro.

`;

}else{

const sorteio=Math.floor(Math.random()*frases.length);

frase.innerHTML=frases[sorteio].texto;

numero.innerHTML="Mensagem #"+String(frases[sorteio].numero).padStart(3,"0");

}
