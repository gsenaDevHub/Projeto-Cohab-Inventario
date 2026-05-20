const micros = [
    { tipo: 'Total de Micros', val: 12 },
    { tipo: 'Disponíveis', val: 19 },
    { tipo: 'Manutenção', val: 3 },
    { tipo: 'Pessoas', val: 5 },
];
const crescente = [...micros].sort((a, b) => a.val - b.val);

const cores = [
    { bg: 'rgba(153,102,255,0.25)', bd: 'rgba(153,102,255,1)' },
    { bg: 'rgba(255,206,86,0.25)', bd: 'rgba(255,206,86,1)' },
    { bg: 'rgba(75,192,192,0.25)', bd: 'rgba(75,192,192,1)' },
    { bg: 'rgba(54,162,235,0.25)', bd: 'rgba(54,162,235,1)' },
    { bg: 'rgba(255,99,132,0.25)', bd: 'rgba(255,99,132,1)' },
];

new Chart(document.getElementById('graficoBarras'), {
    type: 'bar',
    data: {
        labels: crescente.map(d => d.tipo),
        datasets: [{
            label: 'Vendas da Semana',
            data: crescente.map(d => d.val),
            backgroundColor: cores.map(c => c.bg),
            borderColor: cores.map(c => c.bd),
            borderWidth: 2,
            borderRadius: 6,
        }]
    },
    options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
            y: { beginAtZero: true },
            x: { grid: { display: false } }
        }
    }
});

new Chart(document.getElementById('graficoPizza'), {
    type: 'doughnut',
    data: {
        labels: ['Em uso', 'Disponíveis', 'Manutenção', 'Descarte'],
        datasets: [{
            data: [200, 100, 5, 12],
            backgroundColor: [
                'rgba(54,162,235,0.85)',
                'rgba(75,192,192,0.85)',
                'rgba(255,206,86,0.85)',
                'rgba(255,99,132,0.85)',
            ],
            borderColor: '#fff',
            borderWidth: 3,
            hoverOffset: 10,
        }]
    },
    options: {
        responsive: true,
        cutout: '58%',
        plugins: {
            legend: { position: 'bottom', labels: { padding: 16, font: { size: 12 } } }
        }
    }
});