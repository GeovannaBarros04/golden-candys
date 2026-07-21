// ==========================
// GOLDEN CANDYS
// ==========================

// Chance da Mensagem Dourada.
// Quanto maior o número, mais rara ela será.
// 50 = aproximadamente 1 chance em 50.
const CHANCE_MENSAGEM_DOURADA = 50;

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
{numero:10,texto:"Confie no tempo de Deus. ⏳"},
{numero:11,texto:"Acredite: grandes coisas começam com pequenos passos. 🌷"},
{numero:12,texto:"Hoje pode ser o começo de algo extraordinário. ✨"},
{numero:13,texto:"Nunca deixe de acreditar em você. 💛"},
{numero:14,texto:"Você é capaz de conquistar muito mais do que imagina. 🌻"},
{numero:15,texto:"Que a paz acompanhe cada momento do seu dia. 🤍"},
{numero:16,texto:"Respire fundo. Deus continua no controle. 🙏"},
{numero:17,texto:"Seu esforço de hoje será sua vitória amanhã. 💪"},
{numero:18,texto:"Espalhe gentileza por onde passar. 😊"},
{numero:19,texto:"Você é luz na vida de alguém. ✨"},
{numero:20,texto:"O impossível é apenas uma oportunidade para Deus agir. ❤️"},
{numero:21,texto:"Nunca perca a esperança. 🌸"},
{numero:22,texto:"Você nasceu para viver grandes histórias. 📖"},
{numero:23,texto:"Cada novo dia é um presente. 🎁"},
{numero:24,texto:"Sua coragem inspira pessoas ao seu redor. 🌷"},
{numero:25,texto:"Confie mais em Deus e menos no medo. 🙏"},
{numero:26,texto:"Que seu coração permaneça leve. 🤍"},
{numero:27,texto:"Tudo acontece no tempo certo. ⏳"},
{numero:28,texto:"Você é mais amado do que imagina. ❤️"},
{numero:29,texto:"Os melhores capítulos da sua vida ainda serão escritos. 📚"},
{numero:30,texto:"Deus nunca esquece dos seus sonhos. ✨"},
{numero:31,texto:"Hoje é um ótimo dia para recomeçar. 🌻"},
{numero:32,texto:"Sorria. Seu sorriso faz diferença. 😊"},
{numero:33,texto:"A bondade sempre volta para quem a pratica. 🤎"},
{numero:34,texto:"Continue firme. Você está mais perto da vitória. 💪"},
{numero:35,texto:"Que nunca falte fé em seu coração. 🙏"},
{numero:36,texto:"A felicidade mora nas pequenas coisas. 🍫"},
{numero:37,texto:"Você consegue superar qualquer desafio. 💛"},
{numero:38,texto:"O amor sempre será a melhor escolha. ❤️"},
{numero:39,texto:"Grandes milagres começam com pequenas orações. ✨"},
{numero:40,texto:"Você foi criado com um propósito especial. 🌸"},
{numero:41,texto:"Seja motivo de alegria para alguém hoje. 😊"},
{numero:42,texto:"Nunca desista daquilo que faz seu coração sorrir. 🤍"},
{numero:43,texto:"A gratidão transforma tudo. 🌷"},
{numero:44,texto:"A cada amanhecer nasce uma nova oportunidade. 🌅"},
{numero:45,texto:"Você é precioso aos olhos de Deus. 🙏"},
{numero:46,texto:"As melhores surpresas chegam sem aviso. 🎁"},
{numero:47,texto:"Confiança é plantar hoje para colher amanhã. 🌱"},
{numero:48,texto:"Você é mais forte do que qualquer dificuldade. 💪"},
{numero:49,texto:"Que a alegria faça morada em sua vida. 🤍"},
{numero:50,texto:"O bem que você faz sempre encontra o caminho de volta. ❤️"},
{numero:51,texto:"Seja paciente. O melhor está chegando. 🌻"},
{numero:52,texto:"Sua história ainda está sendo escrita. 📖"},
{numero:53,texto:"Nunca subestime o poder de um sorriso. 😊"},
{numero:54,texto:"Deus conhece cada detalhe da sua caminhada. 🙏"},
{numero:55,texto:"O amor vence qualquer medo. ❤️"},
{numero:56,texto:"A esperança é uma escolha diária. ✨"},
{numero:57,texto:"Você já venceu muitas batalhas. Continue. 💛"},
{numero:58,texto:"O hoje é uma oportunidade de ser feliz. 🌸"},
{numero:59,texto:"Acredite no impossível. 🤍"},
{numero:60,texto:"Você é um presente para este mundo. 🎁"},
{numero:61,texto:"Toda tempestade passa. ☀️"},
{numero:62,texto:"A bondade nunca sai de moda. 🌷"},
{numero:63,texto:"Seu coração é maior que qualquer obstáculo. ❤️"},
{numero:64,texto:"Permita-se sonhar grande. ✨"},
{numero:65,texto:"Você está exatamente onde precisa estar. 🌻"},
{numero:66,texto:"A fé move montanhas. 🙏"},
{numero:67,texto:"A alegria compartilhada se multiplica. 😊"},
{numero:68,texto:"Nunca deixe sua luz apagar. 💡"},
{numero:69,texto:"O melhor investimento é acreditar em você. 💛"},
{numero:70,texto:"Deus abre portas que ninguém pode fechar. 🚪"},
{numero:71,texto:"Que seu dia seja repleto de paz. 🤍"},
{numero:72,texto:"A felicidade começa dentro de você. 🌸"},
{numero:73,texto:"Seja luz por onde passar. ✨"},
{numero:74,texto:"Cada passo vale a pena. 👣"},
{numero:75,texto:"Você é mais corajoso do que imagina. 💪"},
{numero:76,texto:"O amor de Deus nunca falha. ❤️"},
{numero:77,texto:"Tudo tem um propósito. 🙏"},
{numero:78,texto:"Sua determinação inspira. 🌻"},
{numero:79,texto:"Continue acreditando. 🤍"},
{numero:80,texto:"Hoje será um lindo dia. ☀️"},
{numero:81,texto:"Nunca deixe de espalhar amor. ❤️"},
{numero:82,texto:"Você pode recomeçar quantas vezes precisar. 🌷"},
{numero:83,texto:"O impossível se torna possível pela fé. ✨"},
{numero:84,texto:"Deus cuida até dos detalhes. 🙏"},
{numero:85,texto:"Seu futuro é promissor. 💛"},
{numero:86,texto:"O amor sempre encontra um caminho. 🤎"},
{numero:87,texto:"Você nasceu para brilhar. ⭐"},
{numero:88,texto:"Que nunca falte esperança. 🌸"},
{numero:89,texto:"A vida é mais doce quando compartilhamos alegria. 🍫"},
{numero:90,texto:"Você faz diferença no mundo. 🌍"},
{numero:91,texto:"Continue firme. Deus está com você. 🙏"},
{numero:92,texto:"Semeie amor e colha felicidade. ❤️"},
{numero:93,texto:"Os melhores dias ainda virão. 🌷"},
{numero:94,texto:"Você é capaz de realizar seus sonhos. ✨"},
{numero:95,texto:"Toda conquista começa com um passo. 👣"},
{numero:96,texto:"Confie no processo. 🌻"},
{numero:97,texto:"Que Deus abençoe seu caminho. 🤍"},
{numero:98,texto:"Seu sorriso pode mudar o dia de alguém. 😊"},
{numero:99,texto:"Você é um milagre vivendo grandes possibilidades. 💛"},
{numero:100,texto:"Obrigado por fazer parte da família Golden Candys! 🍫❤️"},
  
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
