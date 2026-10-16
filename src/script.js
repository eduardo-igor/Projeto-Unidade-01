const projects = [
    { name: "Robô de Reciclagem Automatizado", score: 9.5, desc: "Utiliza sensores óticos para separar plástico, metal e vidro automaticamente.", icon: "fa-robot" },
    { name: "Energia Solar de Baixo Custo", score: 8.8, desc: "Painéis montados a partir de materiais recicláveis e CDs antigos.", icon: "fa-solar-panel" },
    { name: "Purificador de Água Orgânico", score: 7.2, desc: "Filtro construído com sementes e carvão ativado natural.", icon: "fa-droplet" },
    { name: "Horta Hidropônica Inteligente", score: 9.0, desc: "Controle de nutrientes via app com irrigação automatizada.", icon: "fa-leaf" },
    { name: "Bioplástico de Casca de Banana", score: 6.8, desc: "Alternativa ecológica ao plástico comum com rápida degradação.", icon: "fa-recycle" },
    { name: "App de Carona Escolar Segura", score: 8.5, desc: "Aplicativo para otimizar rotas de pais e reduzir a emissão de CO2.", icon: "fa-car" }
];

const total = projects.reduce((acc, curr) => acc + curr.score, 0);
const average = total / projects.length;
const referenceScore = 8.0;
const aboveRef = projects.filter(p => p.score > referenceScore).length;
let classification = "";
let classColor = "";
if (average >= 8.5) {
    classification = "Destaque 🏆";
    classColor = "text-yellow-500";
} else if (average >= 7.0) {
    classification = "Bom Desempenho 🚀";
    classColor = "text-emerald-500";
} else {
    classification = "Em Desenvolvimento 🛠️";
    classColor = "text-blue-500";
}

document.getElementById("total-score").innerText = total.toFixed(1);
document.getElementById("average-score").innerText = average.toFixed(2);
document.getElementById("above-ref").innerText = aboveRef;

const classEl = document.getElementById("classification");
classEl.innerText = classification;
classEl.className = `font-black text-xl ${classColor}`;
const grid = document.getElementById("projects-grid");
projects.forEach(p => {
    const scoreColor = p.score >= referenceScore ? 'text-emerald-500 bg-emerald-50' : 'text-amber-500 bg-amber-50';
    
    const card = document.createElement('div');
    card.className = "bg-white rounded-2xl shadow-sm p-6 border border-slate-100 card-hover flex flex-col justify-between";
    
    card.innerHTML = `
        <div>
            <div class="h-12 w-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center text-2xl mb-4">
                <i class="fa-solid ${p.icon}"></i>
            </div>
            <h3 class="text-xl font-bold text-slate-800 mb-2 leading-tight">${p.name}</h3>
            <p class="text-slate-500 text-sm mb-6">${p.desc}</p>
        </div>
        <div class="flex justify-between items-end border-t border-slate-100 pt-4">
            <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Nota Final</span>
            <span class="text-2xl font-black px-3 py-1 rounded-lg ${scoreColor}">${p.score.toFixed(1)}</span>
        </div>
    `;
    grid.appendChild(card);
});

console.log("Projeto Unidade 01 conectado.");