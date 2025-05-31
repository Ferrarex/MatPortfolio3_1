const conteudo = {
    titulo: 0,
    entendimento: 1,
    ensino: 2,
    exemplos: 3,
    aprendizado: 4,
    estudo: 5,
}

frac = function (a, b) { return sup(a)+"/"+sub(b); }
sup = function (n) {
    return `<sup>${n}</sup>`;
}
sub = function (n) {
    return `<sub>${n}</sub>`;
}
line = function(s) {
    return `<line>${s}</line>`
}

const centro = `style="margin-left: 50%; transform: translate(-50%, 0)"`;

const enunciados = ["",
    "O que entendi do assunto?",
    "Como posso ensinar alguém?",
    "Quais exemplos podem ilustrar minhas explicações?",
    "O que não entendi do assunto?",
    "Como estudo?",
];

class Conteudo {
    constructor(titulo, entendimento, ensino, exemplos, aprendizado, estudo) {
        this.titulo = titulo;
        this.entendimento = entendimento;
        this.ensino = ensino;
        this.exemplos = exemplos;
        this.aprendizado = aprendizado;
        this.estudo = estudo;
    }
}

conteudos = [
    new Conteudo("Análise Combinatória",
        `É uma parte da matemática que estuda as diferentes maneiras de organizar e agrupar os elementos.
        O exemplo que mais foi dado em aula foi a reorganização de senhas.
        
        <h3>Assuntos:</h3>\
        <div class="caixa">\
        <h2>Princípio Fundamental da Contagem (PFC)</h2>\
            Se você tem várias etapas para realizar uma tarefa, e cada etapa tem diferentes formas de ser feita, o total de possibilidades é o produto entre essas quantidades.

        </div>
        <div class="caixa">\
            <h2>Permutação</h2>\
            Organizar elementos, levando em conta a ordem.
            
            <h4>- Permutação Simples</h4>\
            Todos os itens são diferentes.
            Fórmula: n!
            Exemplo: Quantas formas diferentes de posicionar 5 livros numa estante?
            
            5! = <resp>120.</resp>
            
            <grey>(retrabalhado de um exercício da prof)</grey>

            <h4>- Permutação com Repetição:</h4>\
            Quando alguns itens se repetem, o total de formas diminui.
            Fórmula: n! dividido pelos fatoriais dos itens repetidos.
        
        </div>
        <div class="caixa">\
            <h2>Arranjo</h2>\
            Organizar só uma parte dos elementos, e a ordem importa.
            
            <h4>- Arranjo Simples:</h4>\
            Sem repetir elementos.
            Fórmula: ${frac("n!", "(n - p)!")}, onde p é a quantidade de elementos escolhidos.

            <h4>- Arranjo com Repetição:</h4>\
            É permitido repetir os elementos.
            Fórmula: n${sup("p")}.

        </div>
        <div class="caixa">\
            <h2>Combinação</h2>\
            Combinação é quando a ordem não muda nada, só importa quem está no "grupo", não como estão organizados.
            Fórmula: C(n, p) = ${frac("n!", "(p! * (n - p)!)")}

        </div>
        `,
        `Acredito que dando exemplos práticos, considerando que é um assunto fácilmente interligado com o dia a dia.
        
        Gostei muito da maneira como a professora apresentou o conteúdo, acredito que não faria algo muito diferente disso.`,
        undefined,
        `Acredito que não houveram muitas dúvidas, especialmente por ser um conteúdo meio intuitivo. Entretanto, isso abre margem para erros caso não faça as observações e interpretações com cautela.`,
        `Uma boa repassada nos assuntos de maneira geral normalmente funciona, acredito que com esse não é diferente, só é preciso dar foco mais direto .`
    ),
    new Conteudo("Binômio de Newton",
        `Binômio de Newton é qualquer binômio com expoente inteiro positivo.
        
        Uma fórmula que utilizamos para desenvolver é a seguinte:
        <img ${centro} src="images/soma.png"><grey>
        (Desenhei eu mesmo, desculpe pela qualidade)</grey>
        
        Com essa fórmula, é possível desenvolver a conta.
        
        Esses coeficientes podem ser encontrados usando o Triângulo (ou pirâmide) de Pascal ou com a fórmula de combinação, C(n, p). Cada termo da expansão tem uma parte com 'x' e outra com 'a', e os expoentes vão mudando: o 'x' começa com o expoente n e vai diminuindo, enquanto o 'a' começa no zero e vai aumentando.
        
        Representação do Triângulo de Pascal:
        <img ${centro} src="images/triangulo.png">
        <grey>(Imagem retirada de toda matéria: <a class="simples" href="https://static.todamateria.com.br/upload/tr/ia/triangulopascal4.jpg">Origem</a>)</grey>`,
        `Acredito que a maneira que a professora ensinou foi bem lúdica, provavelmente teria uma abordagem semelhante, introduzindo o aluno aos poucos ao conteúdo, e respeitando a curva de aprendizagem.`,
        undefined,
        `Acabei não entendendo muito as aplicações da fórmula, como onde ela seria utilizada em senário empresarial por exemplo.`,
        `Para estudar, utilizei o método Pomodoro, considerando que é fácil se confundir, pela quantidade elevada de contas simples, onde ao cometer um erro, você ferra a conta inteira.
        
        Eu programei a pirâmide de pascal em Java também, para ter uma melhor compreensão.
        <img ${centro} src="images/codigo1.png">
        Levou cerca de 3 horas para programar.
        E aqui está a saída do programa (para entrada 6):
        <img ${centro} src="images/out1.png">`

    ),
    new Conteudo("Probabilidade",
        `<h3>Assuntos:</h3>\
        <div class="caixa">\
            <h2>Experimento aleatório, Espaço Amostral e Evento</h2>\
            Um experimento aleatório é aquele cujo resultado você não pode prever com certeza (por exemplo, lançar uma moeda ou um dado).
            
            Espaço amostral (chamado de U) é o conjunto de todos os resultados possíveis de um experimento (por exemplo, U={1,2,3,4,5,6} ao lançar um dado cúbico).
            
            Um evento é qualquer subconjunto do espaço amostral que me interessa (por exemplo, “sair número par” no lançamento do dado: B={2,4,6}, n(B)=3).
            
            Evento certo: Sempre acontece
            Evento impossível: Nunca acontece

        </div>
        <div class="caixa">\
            <h2>Definição de probabilidade:</h2>\
            Quando todas as saídas do espaço tem a mesma chance de acontecer, a probabilidade de um evento acontecer é:
            P(A) = ${frac("n(A)", "n(U)")}
            (A sendo um evento dentro de U)

        </div>
        <div class="caixa">\
            <h2>Eventos complementares:</h2>\
            É o evento contrário, exemplo: A = dar cara ao rodar a moeda
            ${line("A")} = dar coroa ao rodar a mesma moeda

        </div>
        <div class="caixa">\
            <h2>Frequência relativa e probabilidade:</h2>\
            Encontrei também como Lei dos grandes números, A frequência relativa (fr) de um evento em experimentos repetidos tende a aproximar sua probabilidade teórica conforme o número de repetições cresce.
            Então se eu rodar uma moeda 1000 vezes, as chances vão tender a 50% para cada lado.

            Programei isso para testar, e realizei duas tentativas, dando a chance como 50%, e na primeira fiz 4 repetições, já na segunda, 100.000 repetições.
            
            Código:
            <img ${centro} src="images/codigo2.png">
            
            Primeiro teste:
            <img ${centro} src="images/out2.png">

            Segundo teste:
            <img ${centro} src="images/out3.png">

            Como é possível ver, no primeiro teste houve diferenças notáveis, dado que tem maior chance de divergir da média, pois foram menos testes, o que dá oportunidade ao desconhecido.
            
            Já no segundo, foram feitos tantos testes que é improvável que ele divirja da chance esperada.

        </div>
        <div class="caixa">\
            <h2>Lei binomial (método binomial)</h2>\
            Ao repetir o experimento n vezes, a probabilidade de obter exatamente k
            Fórmula: P${sub("k")} = (${sup("n")}${sub("k")}) p${sup("k")} q${sup("n - k")}

        </div>`,
        `Ensinar alguém de forma progressiva acredito que ainda é a melhor forma. A maneira como a professora ensinou é bem similar a isso. Assim como "Análise Combinatória", gostei muito da forma que foi apresentado o conteúdo.`,
        undefined,
        `Mesmo após ler o material e discutir com os colegas, ainda me confundo um pouco na hora de interpretar as questões. As questões de Lei binomial em específico acabaram me pegando um pouco na prova, porém, creio que agora sei um pouco mais.`,
        `Revisando aos poucos o PDF, a maioria das minhas dúvidas foram sanadas. A maioria dos problemas que enfrentei foram por falta de atenção.`
    )
];

muchoTexto = function (texto) {
    return texto.replaceAll("\\n", "").replaceAll("\n", "<br>");
}

pulaLinha = function (d) {
    d.appendChild(document.createElement("br"));
}

novoEnunciado = function (enun) {
    temp = document.createElement("h2");
    temp.innerHTML = enun;
    return temp;
}

novaExplica = function (exp) {
    temp = document.createElement("p");
    temp.style.textAlign = "justify";
    temp.innerHTML = exp;
    return temp;
}

inserirConteudo = function (elemento) {
    if (elemento.titulo == undefined) return;

    div = document.createElement("div");
    div.setAttribute("class", "caixa");
    div.style.width = "700px;";
    t = document.createElement("h1");
    tit = elemento.titulo;
    t.setAttribute("id", tit);
    t.innerHTML = tit;
    t.setAttribute("class", "center");
    div.appendChild(t);

    a = elemento.entendimento;
    if (a != undefined) {
        div.appendChild(novoEnunciado(enunciados[conteudo.entendimento]));
        div.appendChild(novaExplica(muchoTexto(a)));
        pulaLinha(div);
    }


    a = elemento.ensino;
    if (a != undefined) {
        div.appendChild(novoEnunciado(enunciados[conteudo.ensino]));
        div.appendChild(novaExplica(muchoTexto(a)));
        pulaLinha(div);
    }

    a = elemento.exemplos;
    if (a != undefined) {
        div.appendChild(novoEnunciado(enunciados[conteudo.exemplos]));
        div.appendChild(novaExplica(muchoTexto(a)));
        pulaLinha(div);
    }

    a = elemento.aprendizado;
    if (a != undefined) {
        div.appendChild(novoEnunciado(enunciados[conteudo.aprendizado]));
        div.appendChild(novaExplica(muchoTexto(a)));
        pulaLinha(div);
    }

    a = elemento.estudo;
    if (a != undefined) {
        div.appendChild(novoEnunciado(enunciados[conteudo.estudo]));
        div.appendChild(novaExplica(muchoTexto(a)));
    }
    document.body.appendChild(div);
    pulaLinha(document.body);
}

explorar = document.createElement("div");
explorar.setAttribute("class", "caixa");
exploraTit = document.createElement("h1");
exploraTit.innerHTML = "Explorar Conteúdos:";
explorar.appendChild(exploraTit);
insereExplora = function (e) {
    tit = e.titulo;
    if (tit == undefined) return;
    a = document.createElement("a");
    a.setAttribute("class", "simples");
    a.setAttribute("href", "#" + tit);
    a.innerHTML = "<h3>" + tit + "</h3>";
    explorar.appendChild(a);
}
conteudos.forEach(e => insereExplora(e));
document.body.appendChild(explorar);

pulaLinha(document.body);

conteudos.forEach(e => inserirConteudo(e));


conclusao = document.createElement("div");
conclusao.setAttribute("class", "caixa");
conclusaoTit = document.createElement("h1");
conclusaoTit.setAttribute("class", "center");
conclusaoTit.innerHTML = "Conclusão";
conclusaoText = document.createElement("h3");
conclusaoText.style.textAlign = "justify";
conclusaoText.innerHTML = muchoTexto(
    `No trimestre, consegui acompanhar bem as velocidade aulas e absorver os conteúdos apresentados. Sempre que surgiram dúvidas, procurei aprender.
As atividades e os exercícios foram bastante úteis, pois facilitaram o entendimento dos conteúdos.
Entretanto, acredito que poderia ter um desempenho melhor, e acabei dormindo em algumas das aulas. Peço desculpas, e vou agir diferente nos demais trimestres.`);
conclusao.appendChild(conclusaoTit);
conclusao.appendChild(conclusaoText);
document.body.appendChild(conclusao);

pulaLinha(document.body);

disclaimer = document.createElement("div");
disclaimer.setAttribute("class", "caixa");
disclaimerTit = document.createElement("h1");
disclaimerTit.setAttribute("class", "center");
disclaimerTit.innerHTML = "Isenção de responsabilidade";
disclaimerText = document.createElement("h3");
disclaimerText.style.textAlign = "justify";
disclaimerText.innerHTML = muchoTexto(`Momentos em que não é citado a fonte externa, são onde o material foi retirado dos conteúdos repassados pela professora durante as aulas.`);
disclaimer.appendChild(disclaimerTit);
disclaimer.appendChild(disclaimerText);
document.body.appendChild(disclaimer);