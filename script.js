const personagens = [
    { 
        nome: "Asta", 
        imagem: "./imagens/asta.jpeg", 
        descricao: "Asta 「アスタ Asuta」 é o principal protagonista de Black Clover e um órfão que foi criado sob os cuidados de uma igreja na vila de Hage depois que sua mãe o abandona na porta da igreja. Após completar 15 anos, Asta recebe um grimório de trevo de cinco folhas com um demônio Anti Magia dentro. Ele se junta ao esquadrão Touros Negros dos Cavaleiros Mágicos do Reino Clover e se torna um Cavaleiro Mágico Sênior de 1ª Classe. Ele foi temporariamente um membro do esquadrão Cavaleiros Reais. Sua magia é simplesmente SURREAL onde tudo no mundo é sobre magia, tendo em vista suas 3 espadas: Espada Matadora de Demônios, Espada Habitadora do Demônio, Espada Destruidora de Demônios, e posteriormente por conta de uma luta com seu captão Yami contra um demonio maior, tambem conquista a Katana Assassina de Demônio"
    },
    { 
        nome: "Yuno", 
        imagem: "./imagens/yuno.jpg", 
        descricao: "Yuno Grinberryall 「ユノ・グリンベリオール Yuno Gurinberiōru」 é um órfão que foi deixado sob os cuidados de uma igreja em Hage após a queda da Casa Grinberryall, a ex-família real do Reino Spade. Ele empunha um grimório de trevo de quatro folhas e é um Cavaleiro Mágico do esquadrão Alvorecer Dourado e foi temporariamente um membro dos Cavaleiros Reais do Reino Clover.Yuno é promovido a vice-capitão do Alvorecer Dourado, e, eventualmente, atinge o posto de Grão Cavaleiro Mágico, tornando-se o mais jovem a alcançar esse posto, com 18 anos. William Vangeance depois renuncia a sua posição e nomeia Yuno seu sucessor como o segundo capitão do esquadrão.Sylph, o espírito do vento, escolhe servir Yuno depois que ele encontra seu pergaminho em uma masmorra. Ele também é o hospedeiro humano do espírito reencarnado do filho de Licht e Tetia."
    },
    { 
        nome: "Noelle Silva", 
        imagem: "./imagens/noele.jpg", 
        descricao: "Noelle Silva 「ノエル・シルヴァ Noeru Shiruva」 é da realeza e a segunda filha da Casa Silva do Reino Clover, uma de suas famílias reais. Ela também é uma Cavaleira Mágica Júnior de 3ª Classe do esquadrão Touros Negros[6] e foi temporariamente uma membro dos Cavaleiros Reais. Undine, o espírito da água, escolhe servir Noelle depois que seu contrato com a Princesa Lolopechka está temporariamente enfraquecido. Com Undine retornando para Lolopechka, Noelle faz um contrato com o 'Deus do Mar' Leviathan para o Dia do Julgamento."
    },
    { 
        nome: "Julius Nova Chrono", 
        imagem: "./imagens/julius.jpg", 
        descricao: "Julius é conhecido por ter uma obsessão por magia, pois ele gosta de explorar o reino em busca de magia que ele nunca viu antes. Geralmente, sua personalidade infantil surge quando ele encontra um novo tipo de magia e fica animado para vê-la em ação. Julius também se disfarça para que ele possa realizar sua pesquisa sem ser reconhecido pelos cidadãos. Devido à sua natureza infantil, Julius também tem uma inclinação natural para não realizar seu dever como o Rei Mago e faz isso intencionalmente, enquanto os Cavaleiros de alto escalão estão no mesmo cômputo dos cavaleiros de baixa classificação, mesmo sabendo que eles acabariam por entrar em conflito.  Suas habilidades são envolvidas com magia temporal, oriunda de seu grimoriod de 3 folhas, O MAIOR GRIMORIO DE TODOS."
    },
    { 
        nome: "Yami Sukehiro", 
        imagem: "./imagens/yami.jpg", 
        descricao: "Yami Sukehiro 「ヤミ・スケヒロ」, nascido como Sukehiro Yami 「夜見介大 Yami Sukehiro」, é um descendente do Clã Yami do País Hino. Quando criança, ele fugiu do país e naufragou no Reino Clover, onde mais tarde ele se juntou ao esquadrão Cervo Cinzento dos Cavaleiros Mágicos e mais tarde se tornou o primeiro capitão do esquadrão Touros Negros. Suas principais habilidades estao ligadas ao seu poderoso grimorio de escuridão, de 3 folhas, e sua força descomunal"
    },
    { 
        nome: "Liebe", 
        imagem: "./imagens/liebe.jpg", 
        descricao: "Liebe é um dos personagens mais importantes de Black Clover, conhecido como o demônio Anti Magia que habita o grimório de trevo de cinco folhas de Asta. Sua história é trágica e complexa:Liebe nasceu no Submundo, mas, ao contrário dos outros demônios, não tinha poder mágico. Por causa disso, era constantemente maltratado pelos outros demônios. Eventualmente, Liebe foi expulso do Submundo pelo demônio mais poderoso, Lucifero, e acabou no mundo humano.No mundo humano, Liebe foi encontrado por uma mulher chamada Licita, que possuía a habilidade de absorver a energia vital e mágica de qualquer ser vivo ao seu redor. Incapaz de interagir normalmente com outras pessoas por causa dessa habilidade, Licita acolheu Liebe e cuidou dele como um filho. Os dois desenvolveram um vínculo muito forte.No entanto, Lucifero tentou tomar o controle do corpo de Liebe no mundo humano. Para protegê-lo, Licita sacrificou sua vida ao selar Liebe dentro do grimório de trevo de cinco folhas, onde ele permaneceu por anos, carregando tanto sua dor quanto sua determinação de vingar Licita.Mais tarde, Liebe é libertado por Asta, com quem ele forma uma conexão especial. Apesar de sua raiva inicial contra todos os demônios e usuários de magia, sua relação com Asta evolui para uma parceria baseada na confiança e no desejo compartilhado de superar seus limites."
    },
    { 
        nome: "Licht", 
        imagem: "./imagens/licht.jpg", 
        descricao: "Licht é um personagem importante de Black Clover, sendo o líder da tribo dos Elfos e o principal antagonista em um arco central da série. Ele nasceu como um dos elfos mais poderosos e foi criado ao lado de seu amigo, o rei mágico, Julius Novachrono, com quem compartilhava uma amizade próxima. No entanto, após um trágico evento, os Elfos são exterminados por uma traição. Licht, acreditando que Julius os traiu, busca vingança contra o reino Clover, mas sua raiva e dor o levam a fazer escolhas drásticas. Ele usa o poder de um grimório demoníaco e invoca uma guerra contra os humanos. Ao longo da série, descobrimos que Licht não era realmente o vilão, mas foi manipulado por um ser maligno, conhecido como Patolli. O verdadeiro Licht era um líder carismático que desejava a paz entre humanos e elfos, mas a perda de seu povo e a traição o corromperam. Eventualmente, com o auxílio dos heróis humanos, a verdade sobre seu passado e as manipulações que sofreu vêm à tona, e sua tragédia é finalmente revelada. Suas principais habilidades englobam seu grimorio de 4 folhas, e sua magia da luz"
    },
];

// Função para carregar a galeria inicial
function loadGallery() {
    const galleryHtml = personagens.map(personagem => {
        const descricaoBreve = personagem.descricao.split(" ").slice(0, 10).join(" ") + "...";
        return `
            <div class="item-personagem">
                <img src="${personagem.imagem}" alt="${personagem.nome}">
                <h3>${personagem.nome}</h3>
                <p>${descricaoBreve}</p>
                <button onclick="showCharacterDetails('${personagem.nome}')">Ver Detalhes</button>
            </div>
        `;
    }).join('');
    document.querySelector('#characters').innerHTML = galleryHtml;
}

// Função para mostrar os detalhes de um personagem
function showCharacterDetails(nome) {
    const personagem = personagens.find(p => p.nome === nome);
    if (!personagem) return;

    const detailsHtml = `
        <div class="detalhes-personagem">
            <h2>${personagem.nome}</h2>
            <img src="${personagem.imagem}" alt="${personagem.nome}">
            <p>${personagem.descricao}</p>
            <button onclick="loadGallery()">Voltar à Galeria</button>
        </div>
    `;
    document.querySelector('#characters').innerHTML = detailsHtml;
}

// Inicializa a galeria ao carregar a página
loadGallery();
// Função para alternar entre tema claro e escuro
document.getElementById('toggle-theme').addEventListener('click', () => {
    const body = document.body;
    body.classList.toggle('tema-escuro');
    body.classList.toggle('tema-claro');
    
    // Atualiza o ícone e texto do botão
    const button = document.getElementById('toggle-theme');
    if (body.classList.contains('tema-escuro')) {
        button.textContent = '🌙'; // Ícone para tema escuro
    } else {
        button.textContent = '🌞'; // Ícone para tema claro
    }
});

// Função para abrir o modal com o trailer do episódio
function openModal(videoUrl) {
    const modal = document.getElementById('trailer-modal');
    const iframe = document.getElementById('video-frame');
    iframe.src = videoUrl; // Coloca o link do trailer no iframe
    modal.style.display = 'flex'; // Exibe o modal
}

// Função para fechar o modal
document.querySelector('.close-btn').addEventListener('click', () => {
    const modal = document.getElementById('trailer-modal');
    const iframe = document.getElementById('video-frame');
    iframe.src = ''; // Remove o conteúdo do vídeo ao fechar
    modal.style.display = 'none'; // Fecha o modal
});

// Fechar o modal clicando fora da área do conteúdo
window.addEventListener('click', (e) => {
    const modal = document.getElementById('trailer-modal');
    if (e.target === modal) {
        const iframe = document.getElementById('video-frame');
        iframe.src = ''; // Remove o conteúdo do vídeo ao fechar
        modal.style.display = 'none';
    }
});

// Validação e envio do formulário de contato
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validação simples para garantir que todos os campos foram preenchidos
    if (name && email && message) {
        document.getElementById('form-message').textContent = 'Mensagem enviada com sucesso!';
        document.getElementById('form-message').style.color = 'green';
    } else {
        document.getElementById('form-message').textContent = 'Por favor, preencha todos os campos!';
        document.getElementById('form-message').style.color = 'red';
    }
});
