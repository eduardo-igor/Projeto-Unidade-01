const projetos = [
    { titulo: "Robô de Reciclagem Automatizado", nota: 9.5, desc: "Utiliza sensores óticos para separar plástico, metal e vidro automaticamente.", icon: "fa-robot" },
    { titulo: "Energia Solar de Baixo Custo", nota: 8.8, desc: "Painéis montados a partir de materiais recicláveis e CDs antigos.", icon: "fa-solar-panel" },
    { titulo: "Purificador de Água Orgânico", nota: 7.2, desc: "Filtro construído com sementes e carvão ativado natural.", icon: "fa-droplet" },
    { titulo: "Horta Hidropônica Inteligente", nota: 9.0, desc: "Controle de nutrientes via app com irrigação automatizada.", icon: "fa-leaf" },
    { titulo: "Bioplástico de Casca de Banana", nota: 6.8, desc: "Alternativa ecológica ao plástico comum com rápida degradação.", icon: "fa-recycle" },
    { titulo: "App de Carona Escolar Segura", nota: 8.5, desc: "Aplicativo para otimizar rotas de pais e reduzir a emissão de CO2.", icon: "fa-car" }
];

const total = projetos.reduce((somaTotal, soma) => somaTotal + soma.nota, 0);
const media = total / projetos.length;

const notaReferencia = 8.0;
const acimaReferencia = projetos.filter(p => p.nota > notaReferencia).length;

document.getElementById("total-score").textContent = total.toFixed(1);
document.getElementById("average-score").textContent = media.toFixed(2);
document.getElementById("above-ref").textContent = acimaReferencia;

let classification = "";
let classColor = "";
if (media >= 8.5) {
    classification = "Destaque";
    classColor = "text-yellow-500";
} else if (media >= 7.0) {
    classification = "Bom Desempenho";
    classColor = "text-emerald-500";
} else {
    classification = "Em Desenvolvimento";
    classColor = "text-blue-500";
}

const classEl = document.getElementById("classification");
classEl.textContent = classification;
classEl.className = `font-black text-xl ${classColor}`;

const grid = document.getElementById("projects-grid");
projetos.forEach(p => {
    const scoreColor = p.nota >= notaReferencia ? 'text-emerald-500 bg-emerald-50' : 'text-amber-500 bg-amber-50';
    
    const card = document.createElement('div');
    card.className = "bg-white rounded-2xl shadow-sm p-6 border border-slate-100 card-hover flex flex-col justify-between";
    
    card.innerHTML = `
        <div>
            <div class="h-12 w-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center text-2xl mb-4">
                <i class="fa-solid ${p.icon}"></i>
            </div>
            <h3 class="text-xl font-bold text-slate-800 mb-2 leading-tight">${p.titulo}</h3>
            <p class="text-slate-500 text-sm mb-6">${p.desc}</p>
        </div>
        <div class="flex justify-between items-end border-t border-slate-100 pt-4">
            <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Nota Final</span>
            <span class="text-2xl font-black px-3 py-1 rounded-lg ${scoreColor}">${p.nota.toFixed(1)}</span>
        </div>
    `;
    grid.appendChild(card);
});