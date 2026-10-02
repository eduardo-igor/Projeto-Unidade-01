# 1 Projeto-Unidade-01
O projeto deve utilizar somente recursos estudados ou demonstrados até o momento. Bibliotecas de componentes prontas não são necessárias: o objetivo é praticar HTML, Tailwind e JavaScript.

1.1 HTML semântico

A página deverá utilizar:

    estrutura completa do HTML5;
    header, nav, main, section, article e footer quando forem semanticamente adequados;
    um único h1 que identifique a página;
    subtítulos em ordem coerente;
    parágrafos, listas, links e, quando fizer sentido, tabela ou imagem;
    navegação interna com pelo menos três links;
    identificadores nas áreas atualizadas pelo JavaScript;
    textos próprios e relacionados ao tema;
    texto alternativo em imagens informativas;
    rótulos claros para valores, métricas e classificações.

A escolha do elemento deve ser feita pela função do conteúdo, não pela aparência. O Tailwind muda a apresentação, mas não substitui a semântica do HTML.
1.2 Tailwind CSS

A interface será estilizada com classes utilitárias no HTML. O projeto deverá demonstrar:

    cores de fundo, texto e borda com contraste legível;
    hierarquia tipográfica com tamanho, peso e altura de linha;
    uso intencional de padding, margin e gap;
    largura máxima e conteúdo centralizado;
    bordas, arredondamento e sombras aplicados com moderação;
    Flexbox em pelo menos uma área, como navegação ou grupo de indicadores;
    Grid em pelo menos uma coleção, como cards ou resultados;
    adaptação para telas estreitas e largas com prefixos responsivos;
    estados de foco visíveis em links e outros elementos interativos;
    consistência visual entre seções e componentes.

1.3 JavaScript

Use apenas src/script.js, conectado ao HTML:

<script src="./script.js" defer></script>

O script deverá apresentar:

    const e let usados de acordo com a necessidade;
    pelo menos uma string, um number, um boolean e um array;
    operadores aritméticos, de comparação e lógicos;
    pelo menos uma cadeia com if, else if e else;
    pelo menos uma repetição com for, for...of ou while;
    no mínimo três funções com parâmetros e retorno;
    template literals;
    resultados com rótulos claros no Console;
    pelo menos três resultados apresentados no HTML com textContent;
    nomes que expressem a responsabilidade de variáveis e funções;
    ausência de erros inesperados no Console.

Os três resultados visuais podem ser, por exemplo, total, média e classificação. Calcular um valor no Console não substitui sua apresentação na interface.

Não são obrigatórios formulários, eventos, objetos, armazenamento, APIs ou bibliotecas JavaScript externas. Esses recursos podem ser utilizados somente quando a dupla compreender a implementação e ela não comprometer os requisitos principais.
2. Configuração do projeto com Tailwind e Docker

Reaproveite a configuração utilizada nos encontros anteriores:

nome-do-projeto/
├── compose.yaml
├── Dockerfile
├── package.json
├── package-lock.json
├── .dockerignore
├── src/
│   ├── index.html
│   ├── input.css
│   ├── output.css
│   └── script.js
└── imagens/
    └── arquivos-utilizados

3. Estrutura mínima da página

Independentemente do tema, o site deverá conter:

    cabeçalho com nome e apresentação do projeto;
    menu com pelo menos três links internos;
    seção que explique o propósito da aplicação;
    seção com informações, cards ou orientações;
    seção de resultados calculados pelo JavaScript;
    seção que apresente ou explique os seis dados processados;
    rodapé com nomes dos integrantes e turma.

3.1 Cabeçalho e navegação

O cabeçalho deve apresentar o nome do projeto e permitir acesso às seções principais. Use Flexbox para organizar os elementos quando houver espaço e permita quebra ou empilhamento em telas menores.
3.2 Conteúdo informativo

A apresentação precisa explicar o que os seis valores representam e qual meta, limite ou referência será utilizada. Uma pessoa que não participou do projeto deve compreender os resultados sem consultar o código.
3.3 Cards e resultados

Os cards não devem servir apenas como decoração. Cada um precisa comunicar uma informação relevante, como dado de entrada, indicador calculado, dica ou estado final. Use Grid para organizar a coleção e mantenha o mesmo padrão visual entre itens equivalentes.
3.4 Rodapé

Informe os integrantes e a turma. Garanta contraste, legibilidade e separação visual em relação ao conteúdo principal.
