document.addEventListener("DOMContentLoaded", () => {

    //  DADOS DAS CATEGORIAS
    const categorias = {
        motivacionais: {
            titulo: "Frases Motivacionais",
            subtitulo: "Encontre mensagens que elevam sua energia e fortalecem sua determinação.",
            introTitulo: "Mensagens para Inspirar o Seu Dia",
            introTexto: "Essas frases foram selecionadas para te motivar e lembrar que cada dia é uma nova oportunidade de vencer.",
            frases: [
                "“Acredite em si mesmo e tudo será possível.”",
                "“O sucesso é a soma de pequenos esforços repetidos dia após dia.”",
                "“Você é mais forte do que imagina.”",
                "“Grandes conquistas exigem coragem para começar.”",
                "“A persistência transforma o impossível em realidade.”"
            ]
        },
        amor: {
            titulo: "Frases de Amor",
            subtitulo: "Mensagens românticas para compartilhar com quem você ama.",
            introTitulo: "Mensagens Românticas",
            introTexto: "Espalhe amor e carinho com frases que tocam o coração.",
            frases: [
                "“O amor não se vê com os olhos, mas com o coração.”",
                "“Te amo não pelo que você é, mas pelo que sou quando estou com você.”",
                "“O verdadeiro amor nunca se desgasta. Quanto mais se dá, mais se tem.”",
                "“Amar é encontrar na felicidade do outro a própria felicidade.”",
                "“O amor é a poesia dos sentidos.”"
            ]
        },
        "bom-dia": {
            titulo: "Frases de Bom Dia",
            subtitulo: "Comece o dia com mensagens positivas e inspiradoras.",
            introTitulo: "Mensagens de Bom Dia",
            introTexto: "Cada manhã é uma nova chance para recomeçar e ser feliz.",
            frases: [
                "“Bom dia! Que o seu dia seja leve, abençoado e cheio de boas energias.”",
                "“Sorria! Um novo dia nasceu para você.”",
                "“Amanheceu! Acredite, hoje será incrível.”",
                "“Cada dia é uma nova oportunidade para ser melhor que ontem.”",
                "“Que o sol de hoje ilumine seus sonhos e suas conquistas.”"
            ]
        },
        amizade: {
            titulo: "Frases de Amizade",
            subtitulo: "Celebre os laços que tornam a vida mais leve e feliz.",
            introTitulo: "Mensagens sobre Amizade",
            introTexto: "Amigos verdadeiros tornam cada momento inesquecível.",
            frases: [
                "“A amizade duplica as alegrias e divide as tristezas pela metade.”",
                "“Amigos são irmãos que o coração escolhe.”",
                "“A amizade verdadeira resiste ao tempo, à distância e ao silêncio.”",
                "“Um amigo é um presente que damos a nós mesmos.”",
                "“A vida é melhor com amigos por perto.”"
            ]
        },
        reflexao: {
            titulo: "Frases de Reflexão",
            subtitulo: "Pense, aprenda e cresça com mensagens profundas.",
            introTitulo: "Mensagens para Refletir",
            introTexto: "Uma pausa para pensar pode mudar o rumo de um dia — ou de uma vida.",
            frases: [
                "“A vida é 10% o que acontece e 90% como você reage.”",
                "“Não há caminho para a felicidade. A felicidade é o caminho.”",
                "“Os ventos da mudança sopram para quem tem coragem de abrir as velas.”",
                "“O autoconhecimento é o primeiro passo para a sabedoria.”",
                "“Às vezes é preciso silêncio para entender o que o coração quer dizer.”"
            ]
        },
        engracadas: {
            titulo: "Frases Engraçadas",
            subtitulo: "Dê boas risadas e compartilhe alegria com seus amigos.",
            introTitulo: "Mensagens Engraçadas",
            introTexto: "Rir é o melhor remédio. Divirta-se com frases cheias de bom humor.",
            frases: [
                "“Se preguiça fosse profissão, eu seria o funcionário do mês.”",
                "“Acordei linda! Mas voltei a dormir porque o sonho estava melhor.”",
                "“Dieta? Começo na próxima encarnação.”",
                "“Não sou bagunçado, sou criativo em 3D.”",
                "“O importante é ser feliz, nem que seja às custas do ar-condicionado do vizinho.”"
            ]
        }
    };

    // IDENTIFICAR CATEGORIA
    const path = window.location.pathname.toLowerCase();
    let categoriaAtual = "motivacionais"; // padrão

    for (const nome in categorias) {
        if (path.includes(nome)) {
            categoriaAtual = nome;
            break;
        }
    }

    const dados = categorias[categoriaAtual];

    // ATUALIZAR CONTEÚDO PRINCIPAL
    document.getElementById("tituloPagina").textContent = dados.titulo;
    document.getElementById("subTituloPagina").textContent = dados.subtitulo;
    document.querySelector("#introCategoria h2").textContent = dados.introTitulo;
    document.querySelector("#introCategoria p").textContent = dados.introTexto;
    

    // POPULAR AS FRASES
    const listaMensagens = document.getElementById("listaMensagens");
    listaMensagens.innerHTML = ""; // limpar anteriores

    dados.frases.forEach(frase => {
        const article = document.createElement("article");
        article.innerHTML = `
            <blockquote>${frase}</blockquote>
            <button>Copiar frase</button>
        `;
        listaMensagens.appendChild(article);
    });

    // EVENTO DE COPIAR
    listaMensagens.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON") {
            const frase = e.target.previousElementSibling.textContent;
            navigator.clipboard.writeText(frase);
            e.target.textContent = "Copiado!";
            setTimeout(() => e.target.textContent = "Copiar frase", 1500);
        }
    });

    // CLIQUES NO MENU (AJAX SIMULADO)
    document.querySelectorAll(".main-menu a").forEach(link => {
        link.addEventListener("click", (e) => {
            const href = link.getAttribute("href");

            // Se for o link da home (index.html), deixa o navegador seguir normalmente
            if (href.includes("index.html") || href === "/") {
                return;
            }

            // Impede o reload só para os links de categoria
            e.preventDefault();
            const nome = href.replace("/", "");

            if (categorias[nome]) {
                atualizarCategoria(nome);
                history.pushState({}, "", `/${nome}`);
            }
        });
    });


    function atualizarCategoria(nome) {
        const c = categorias[nome];
        document.getElementById("tituloPagina").textContent = c.titulo;
        document.getElementById("subTituloPagina").textContent = c.subtitulo;
        document.querySelector("#introCategoria h2").textContent = c.introTitulo;
        document.querySelector("#introCategoria p").textContent = c.introTexto;

        listaMensagens.innerHTML = "";
        c.frases.forEach(frase => {
            const article = document.createElement("article");
            article.innerHTML = `
                <blockquote>${frase}</blockquote>
                <button>Copiar frase</button>
            `;
            listaMensagens.appendChild(article);
        });
    }

});
