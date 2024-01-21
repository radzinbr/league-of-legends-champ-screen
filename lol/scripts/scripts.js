let personagem = 1;

const mudarPersonagem = (event) => {
    const bodyElement = document.getElementById("body");
    const h1Element = document.getElementById("personagemnome");
    const desc = document.getElementById("descricao");
    const ski = document.getElementById("skin1");
    const ski2 = document.getElementById("skin2");
    const ski3 = document.getElementById("skin3");

    const hoveredElement = event.target;

    switch (hoveredElement.id) {
        case "personagem-1":
            personagem = 1;
            bodyElement.style.backgroundImage = "url(img/akali/akali-sF.png)";
            h1Element.textContent = "Akali";
            desc.textContent = "Abandonando a Ordem Kinkou e seu título de Punho das Sombras, Akali agora ataca sozinha, pronta para ser a arma mortal que seu povo precisa. Embora ela mantenha tudo o que aprendeu com seu mestre Shen, ela se comprometeu a defender Ionia de seus inimigos, um assassinato de cada vez. Akali pode atacar em silêncio, mas sua mensagem será ouvida em voz alta e clara: “Temam a assassina sem mestre”.";
            ski.src = "img/akali/akali-icon.png";
            ski2.src = "img/akali/skins/Akali-icon-skin1.jpg";
            ski3.src = "img/akali/skins/akali-icon-skin2.jpg";
            break;
        case "personagem-2":
            personagem = 2;
            bodyElement.style.backgroundImage = "url(img/yone/yone-splash-art.png)";
            h1Element.textContent = "Yone";
            desc.textContent = "Em vida, ele foi Yone; meio-irmão de Yasuo e um respeitado aluno da escola de espadachins de seu vilarejo. Mas, ao morrer pelas mãos do irmão, ele se viu perseguido por uma entidade maligna do reino espiritual e foi forçado a exterminá-la com sua própria espada. Agora, condenado a usar uma máscara demoníaca com o rosto da entidade, Yone busca incansavelmente essas criaturas para tentar entender o que ele mesmo se tornou.";
            ski.src = "img/yone/yone-icon.png";
            ski2.src = "img/yone/skins/yone-icon-skin1.png";
            ski3.src = "img/yone/skins/yone-icon-skin2.png";
            break;
        case "personagem-3":
            personagem = 3;
            bodyElement.style.backgroundImage = "url(img/irelia/irelia-splash-art.png)";
            h1Element.textContent = "Irelia";
            desc.textContent = "A ocupação noxiana de Ionia produziu muitos heróis, mas nenhum era mais improvável do que a jovem Irelia de Navori. Treinada nas antigas danças de Ionia, ela adaptou sua arte à guerra, usando movimentos graciosos e cuidadosamente executados para levitar uma série de lâminas fatais. Após provar seu valor como guerreira, ela foi nomeada líder e representante da resistência e até hoje se dedica à preservação de sua terra natal.";
            ski.src = "img/irelia/irelia-icon.png";
            ski2.src = "img/irelia/skins/irelia-icon-skin1.png";
            ski3.src = "img/irelia/skins/irelia-icon-skin2.png";
            break;
        case "personagem-4":
            personagem = 4;
            bodyElement.style.backgroundImage = "url(img/yasuo/yasuo-splash-art.png)";
            h1Element.textContent = "Yasuo";
            desc.textContent = "Yasuo, um ioniano extremamente determinado, é também um ágil espadachim que usa o próprio ar como arma para enfrentar seus inimigos. Quando jovem, ele teve seu orgulho ferido ao ser acusado injustamente do assassinato de seu mestre — sem conseguir provar sua inocência, ele foi forçado a matar o próprio irmão para se defender. Até hoje, mesmo depois do verdadeiro assassino do seu mestre ter sido revelado, Yasuo ainda não consegue se perdoar e vaga por sua terra natal com apenas o vento para guiar sua espada.";
            ski.src = "img/yasuo/yasuo-icon.png";
            ski2.src = "img/yasuo/skins/yasuo-icon-skin1.png";
            ski3.src = "img/yasuo/skins/yasuo-icon-skin2.png";

            break;
        case "personagem-5":
            personagem = 5;
            bodyElement.style.backgroundImage = "url(img/darius/darius-splash-art.png";
            h1Element.textContent = "Darius";
            desc.textContent = "Não há símbolo maior do poder de Noxus do que Darius, o mais temido e experiente comandante da nação. Vindo de origens humildes para se tornar a Mão de Noxus, ele corta seu caminho através dos inimigos do império; muitos dos quais são, inclusive, noxianos. Sabendo que ele nunca duvida da integridade de sua causa e que nunca hesita assim que seu machado é levantado, aqueles que desafiam o comandante da Legião Trifária não esperam por misericórdia.";
            ski.src = "img/darius/darius-icon.png";
            ski2.src = "img/darius/skins/darius-icon-skin1.png";
            ski3.src = "img/darius/skins/darius-icon-skin2.png";

            break;
        case "personagem-6":
            personagem = 6;
            bodyElement.style.backgroundImage = "url(img/gragas/gragas-splash-art.jpg";
            h1Element.textContent = "Gragas";
            desc.textContent = "Igualmente alegre e imponente, Gragas é um gigante e arruaceiro mestre-cervejeiro em uma busca pessoal pelo mais perfeito caneco de cerveja. Vindo de partes desconhecidas, ele busca por ingredientes raros entre a vastidão intocada de Freljord, testando cada receita enquanto segue seu caminho. Frequente embriagado e extremamente impulsivo, ele é lendário pelas lutas de bar que começa, que quase sempre acabam em festas que duram a noite toda e em muitos danos de propriedade. Qualquer aparição de Gragas certamente será seguida de bebidas e destruição, nessa ordem.";
            ski.src = "img/gragas/gragas-icon.png";
            ski2.src = "img/gragas/skins/gragas-icon-skin1.png";
            ski3.src = "img/gragas/skins/gragas-icon-skin2.png"

            break;
        case "skin1":

            if (personagem === 1) {
                bodyElement.style.backgroundImage = "url(img/akali/akali-sF.png)";
            }
           

            if (personagem === 2) {
                bodyElement.style.backgroundImage = "url(img/yone/yone-splash-art.png)";
            }
            
            if (personagem === 3) {
                bodyElement.style.backgroundImage = "url(img/irelia/irelia-splash-art.png)";
                console.log("funciona2");
            }

            if (personagem === 4) {
                bodyElement.style.backgroundImage = "url(img/yasuo/yasuo-splash-art.png)";
                console.log("funciona2");
            }

            if (personagem === 5) {
                bodyElement.style.backgroundImage = "url(img/darius/darius-splash-art.png)";
                console.log("funciona2");
            }

            if (personagem === 6) {
                bodyElement.style.backgroundImage = "url(img/gragas/gragas-splash-art.jpg)";
                console.log("funciona2");
            }

            break;

        case "skin2":

            if (personagem === 1) {
                bodyElement.style.backgroundImage = "url(img/akali/skins/Akali-splash-art1.jpg)";
                console.log("funciona2");
            }

            if (personagem === 2) {
                bodyElement.style.backgroundImage = "url(img/yone/skins/yone-splash-art1.jpg)";
                console.log("funciona2");
            }

            if (personagem === 3) {
                bodyElement.style.backgroundImage = "url(img/irelia/skins/irelia-splash-art1.jpg)";
                console.log("funciona2");
            }

            if (personagem === 4) {
                bodyElement.style.backgroundImage = "url(img/yasuo/skins/yasuo-splash-art1.jpg)";
                console.log("funciona2");
            }

            if (personagem === 5) {
                bodyElement.style.backgroundImage = "url(img/darius/skins/darius-splash-art1.jpg)";
                console.log("funciona2");
            }

            if (personagem === 6) {
                bodyElement.style.backgroundImage = "url(img/gragas/skins/gragas-splash-art1.jpg)";
                console.log("funciona2");
            }
           
            break;
        case "skin3":

            if (personagem === 1) {
                bodyElement.style.backgroundImage = "url(img/akali/skins/Akali-splash-art2.jpg)";
                console.log("funciona2");
            }

            if (personagem === 2) {
                bodyElement.style.backgroundImage = "url(img/yone/skins/yone-splash-art2.jpg)";
                console.log("funciona2");
            }

            if (personagem === 3) {
                bodyElement.style.backgroundImage = "url(img/irelia/skins/irelia-splash-art2.jpg)";
                console.log("funciona2");
            }

            if (personagem === 4) {
                bodyElement.style.backgroundImage = "url(img/yasuo/skins/yasuo-splash-art2.jpg)";
                console.log("funciona2");
            }

            if (personagem === 5) {
                bodyElement.style.backgroundImage = "url(img/darius/skins/darius-splash-art2.jpg)";
                console.log("funciona2");
            }

            if (personagem === 6) {
                bodyElement.style.backgroundImage = "url(img/gragas/skins/gragas-splash-art2.jpg)";
                console.log("funciona2");
            }

            break;




        default:

    }
};

const elementos = document.querySelectorAll('.obj');

elementos.forEach(elemento => {
    elemento.addEventListener('mouseover', mudarPersonagem);
});
