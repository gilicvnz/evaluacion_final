// ─────────────────────────────────────────────────────────────────
// DATOS — Programas universitarios de Diseño en Chile
// Fuente: Sistema de Información de Educación Superior (SIES),
// Subsecretaría de Educación Superior, MINEDUC. Corte: enero 2026.
// Archivo fuente: "Consolidando - Universidades según SIES_12_01_2026"
// Las 46 filas corresponden exactamente al filtro original del curso.
// NO se agregaron ni modificaron registros respecto a la fuente.
// ─────────────────────────────────────────────────────────────────

const programas = [
    { programa: "Bachillerato en Artes, Arquitectura y Diseño", universidad: "Universidad Finis Terrae", region: "Metropolitana", tipo: "Privada", arancel: 7200000, acreditacion: 5, vacantes: 20 },
    { programa: "Bachillerato en Diseño", universidad: "Universidad del Desarrollo", region: "Metropolitana", tipo: "Privada", arancel: 10364360, acreditacion: 6, vacantes: 45 },
    { programa: "Comunicación Digital Esp. Diseño y Desarrollo de Videojuegos", universidad: "UNIACC", region: "Metropolitana", tipo: "Privada", arancel: 4580000, acreditacion: 3, vacantes: 50 },
    { programa: "Diseño", universidad: "Universidad del Desarrollo", region: "Metropolitana", tipo: "Privada", arancel: 9754692, acreditacion: 6, vacantes: 240 },
    { programa: "Diseño", universidad: "Universidad Diego Portales", region: "Metropolitana", tipo: "Privada", arancel: 7597000, acreditacion: 6, vacantes: 165 },
    { programa: "Diseño", universidad: "Pontificia Universidad Católica de Chile", region: "Metropolitana", tipo: "Privada", arancel: 8080000, acreditacion: 7, vacantes: 178 },
    { programa: "Diseño", universidad: "Universidad Finis Terrae", region: "Metropolitana", tipo: "Privada", arancel: 7320000, acreditacion: 5, vacantes: 80 },
    { programa: "Diseño", universidad: "Universidad de Valparaíso", region: "Valparaíso", tipo: "Estatal", arancel: 5713000, acreditacion: 6, vacantes: 75 },
    { programa: "Diseño", universidad: "Universidad del Desarrollo", region: "Biobío", tipo: "Privada", arancel: 6056038, acreditacion: 6, vacantes: 70 },
    { programa: "Diseño", universidad: "Pontificia Universidad Católica de Valparaíso", region: "Valparaíso", tipo: "Privada", arancel: 6915000, acreditacion: 7, vacantes: 65 },
    { programa: "Diseño", universidad: "Universidad de Chile", region: "Metropolitana", tipo: "Estatal", arancel: 6486700, acreditacion: 7, vacantes: 115 },
    { programa: "Diseño", universidad: "Universidad Católica de Temuco", region: "La Araucanía", tipo: "Privada", arancel: 5276000, acreditacion: 5, vacantes: 60 },
    { programa: "Diseño", universidad: "Universidad de Las Américas", region: "Metropolitana", tipo: "Privada", arancel: 4730000, acreditacion: 5, vacantes: 51 },
    { programa: "Diseño", universidad: "Universidad Austral de Chile", region: "Los Ríos", tipo: "Privada", arancel: 5887000, acreditacion: 6, vacantes: 45 },
    { programa: "Diseño", universidad: "Universidad de Talca", region: "Maule", tipo: "Estatal", arancel: 5887000, acreditacion: 6, vacantes: 45 },
    { programa: "Diseño", universidad: "Universidad de La Serena", region: "Coquimbo", tipo: "Estatal", arancel: 4071000, acreditacion: 5, vacantes: 40 },
    { programa: "Diseño", universidad: "Universidad de Viña del Mar", region: "Valparaíso", tipo: "Privada", arancel: 4277000, acreditacion: 4, vacantes: 30 },
    { programa: "Diseño", universidad: "Universidad de Playa Ancha", region: "Valparaíso", tipo: "Estatal", arancel: 4305000, acreditacion: 5, vacantes: 25 },
    { programa: "Diseño de Experiencias Inmersivas y Videojuegos", universidad: "Universidad Gabriela Mistral", region: "Metropolitana", tipo: "Privada", arancel: 4814000, acreditacion: 4, vacantes: 45 },
    { programa: "Diseño de Imagen Especialidad Moda", universidad: "UNIACC", region: "Metropolitana", tipo: "Privada", arancel: 4210000, acreditacion: 3, vacantes: 50 },
    { programa: "Diseño de Interiores y Ambientes", universidad: "UNIACC", region: "Metropolitana", tipo: "Privada", arancel: 4030000, acreditacion: 3, vacantes: 60 },
    { programa: "Diseño de Juegos Digitales", universidad: "Universidad Andrés Bello", region: "Biobío", tipo: "Privada", arancel: 5069000, acreditacion: 6, vacantes: 90 },
    { programa: "Diseño de Juegos Digitales", universidad: "Universidad Andrés Bello", region: "Metropolitana", tipo: "Privada", arancel: 7136000, acreditacion: 6, vacantes: 80 },
    { programa: "Diseño de Moda y Management", universidad: "Universidad Finis Terrae", region: "Metropolitana", tipo: "Privada", arancel: 7320000, acreditacion: 5, vacantes: 35 },
    { programa: "Diseño de Vestuario y Textil", universidad: "Universidad Andrés Bello", region: "Metropolitana", tipo: "Privada", arancel: 7148000, acreditacion: 6, vacantes: 100 },
    { programa: "Diseño de Videojuegos", universidad: "Universidad Gabriela Mistral", region: "Metropolitana", tipo: "Privada", arancel: 4814000, acreditacion: 4, vacantes: 30 },
    { programa: "Diseño en Animación Digital", universidad: "Universidad Gabriela Mistral", region: "Metropolitana", tipo: "Privada", arancel: 4814000, acreditacion: 4, vacantes: 60 },
    { programa: "Diseño en Comunicación Visual", universidad: "Universidad Tecnológica Metropolitana", region: "Metropolitana", tipo: "Estatal", arancel: 4763300, acreditacion: 4, vacantes: 60 },
    { programa: "Diseño en Comunicación Visual", universidad: "Universidad de Santiago de Chile", region: "Metropolitana", tipo: "Estatal", arancel: 6552000, acreditacion: 7, vacantes: 40 },
    { programa: "Diseño en Interacción Digital", universidad: "Universidad Gabriela Mistral", region: "Metropolitana", tipo: "Privada", arancel: 4814000, acreditacion: 4, vacantes: 20 },
    { programa: "Diseño en Marketing Digital", universidad: "Universidad Gabriela Mistral", region: "Metropolitana", tipo: "Privada", arancel: 4814000, acreditacion: 4, vacantes: 20 },
    { programa: "Diseño Gráfico", universidad: "Universidad Andrés Bello", region: "Metropolitana", tipo: "Privada", arancel: 7065000, acreditacion: 6, vacantes: 80 },
    { programa: "Diseño Gráfico", universidad: "Universidad del Bío-Bío", region: "Ñuble", tipo: "Estatal", arancel: 4307000, acreditacion: 5, vacantes: 45 },
    { programa: "Diseño Gráfico Especialidad Multimedia", universidad: "UNIACC", region: "Metropolitana", tipo: "Privada", arancel: 4210000, acreditacion: 3, vacantes: 50 },
    { programa: "Diseño Gráfico Mención Diseño Estratégico", universidad: "Universidad de Antofagasta", region: "Antofagasta", tipo: "Estatal", arancel: 5120000, acreditacion: 5, vacantes: 35 },
    { programa: "Diseño Industrial", universidad: "Universidad del Bío-Bío", region: "Biobío", tipo: "Estatal", arancel: 4434000, acreditacion: 5, vacantes: 55 },
    { programa: "Diseño Industrial", universidad: "Universidad de Santiago de Chile", region: "Metropolitana", tipo: "Estatal", arancel: 4989000, acreditacion: 7, vacantes: 50 },
    { programa: "Diseño Industrial", universidad: "Universidad Tecnológica Metropolitana", region: "Metropolitana", tipo: "Estatal", arancel: 4891000, acreditacion: 4, vacantes: 40 },
    { programa: "Diseño Mención Industrial/Gráfico/Ambientes", universidad: "Universidad Mayor", region: "Metropolitana", tipo: "Privada", arancel: 7214218, acreditacion: 5, vacantes: 70 },
    { programa: "Diseño Multimedia", universidad: "Universidad de Tarapacá", region: "Arica y Parinacota", tipo: "Estatal", arancel: 6555000, acreditacion: 6, vacantes: 58 },
    { programa: "Diseño Teatral", universidad: "Universidad de Chile", region: "Metropolitana", tipo: "Estatal", arancel: 5492400, acreditacion: 7, vacantes: 25 },
    { programa: "Ingeniería en Diseño", universidad: "Universidad Adolfo Ibáñez", region: "Metropolitana", tipo: "Privada", arancel: 9754692, acreditacion: 6, vacantes: 0 },
    { programa: "Ingeniería en Diseño de Productos", universidad: "Univ. Técnica Federico Santa María", region: "Metropolitana", tipo: "Privada", arancel: 6000000, acreditacion: 6, vacantes: 25 },
    { programa: "Ingeniería en Diseño de Productos", universidad: "Univ. Técnica Federico Santa María", region: "Valparaíso", tipo: "Privada", arancel: 6000000, acreditacion: 6, vacantes: 20 },
    { programa: "Ingeniería en Fabricación y Diseño Industrial", universidad: "Univ. Técnica Federico Santa María", region: "Valparaíso", tipo: "Privada", arancel: 5180000, acreditacion: 6, vacantes: 20 },
    { programa: "Ingeniería en Realidad Virtual y Diseño de Juegos Digitales", universidad: "Universidad Bernardo O'Higgins", region: "Metropolitana", tipo: "Privada", arancel: 5900000, acreditacion: 5, vacantes: 55 },
];

// ─────────────────────────────────────────────────────────────────
// Todo el código que manipula el DOM se ejecuta después de que
// el documento esté completamente cargado
// ─────────────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {

    // ─────────────────────────────────────────────────────────────────
    // GRÁFICO 1 — Dispersión: Acreditación vs Arancel (con color por tipo)
    // ─────────────────────────────────────────────────────────────────

    const datosEstatal = programas
        .filter(p => p.tipo === "Estatal")
        .map(p => ({ x: p.acreditacion, y: p.arancel, name: p.programa, uni: p.universidad }));

    const datosPrivada = programas
        .filter(p => p.tipo === "Privada")
        .map(p => ({ x: p.acreditacion, y: p.arancel, name: p.programa, uni: p.universidad }));

    new Chart(document.getElementById("dispersion"), {
        type: "scatter",
        data: {
            datasets: [
                {
                    label: "Estatal",
                    data: datosEstatal,
                    backgroundColor: "rgba(92, 110, 60, 0.75)",
                    pointRadius: 6,
                    pointHoverRadius: 8,
                },
                {
                    label: "Privada",
                    data: datosPrivada,
                    backgroundColor: "rgba(232, 87, 26, 0.65)",
                    pointRadius: 6,
                    pointHoverRadius: 8,
                },
                {
                    label: "Tendencia",
                    type: "line",
                    data: [
                        { x: 3, y: 4030000 },
                        { x: 7, y: 8080000 },
                    ],
                    borderColor: "rgba(102,102,102,0.25)",
                    borderWidth: 1.5,
                    borderDash: [5, 4],
                    pointRadius: 0,
                    pointHoverRadius: 0,
                    fill: false,
                    tension: 0,
                },
            ],
        },
        options: {
            responsive: true,
            plugins: {
                tooltip: {
                    backgroundColor: "#fff",
                    borderColor: "#ddd",
                    borderWidth: 1,
                    titleColor: "#111",
                    bodyColor: "#555",
                    titleFont: { family: "'Georama', sans-serif", size: 12, weight: "700" },
                    bodyFont: { family: "'Georama', sans-serif", size: 11 },
                    padding: 10,
                    callbacks: {
                        title: ctx => ctx[0].raw.uni || "",
                        label: ctx => {
                            if (ctx.dataset.label === "Tendencia") return null;
                            const p = ctx.raw;
                            return [`${p.name}`, `${p.x} años acreditación · $${p.y.toLocaleString("es-CL")}`];
                        },
                    },
                },
                legend: {
                    position: "top",
                    align: "end",
                    labels: {
                        font: { family: "'Georama', sans-serif", size: 11 },
                        color: "#666",
                        boxWidth: 10,
                        filter: item => item.text !== "Tendencia",
                    },
                },
            },
            scales: {
                x: {
                    type: "linear",
                    position: "bottom",
                    min: 2,
                    max: 8,
                    grid: { color: "rgba(0,0,0,0.05)" },
                    border: { color: "#ccc" },
                    title: {
                        display: true,
                        text: "Años de acreditación institucional",
                        font: { family: "'Georama', sans-serif", size: 11 },
                        color: "#999",
                    },
                    ticks: {
                        font: { family: "'Georama', sans-serif", size: 11 },
                        color: "#999",
                        stepSize: 1,
                        callback: v => Number.isInteger(v) ? v + " años" : null,
                    },
                },
                y: {
                    grid: { color: "rgba(0,0,0,0.05)" },
                    border: { color: "#ccc" },
                    title: {
                        display: true,
                        text: "Arancel anual ($)",
                        font: { family: "'Georama', sans-serif", size: 11 },
                        color: "#999",
                    },
                    ticks: {
                        font: { family: "'Georama', sans-serif", size: 11 },
                        color: "#999",
                        callback: v => "$" + (v / 1000000).toFixed(0) + "M",
                    },
                },
            },
        },
    });

    // ─────────────────────────────────────────────────────────────────
    // GRÁFICO 2 — Barras horizontales: Vacantes totales por región
    // ─────────────────────────────────────────────────────────────────

    const vacantasPorRegion = {};
    programas.forEach(p => {
        vacantasPorRegion[p.region] = (vacantasPorRegion[p.region] || 0) + p.vacantes;
    });

    const regionesOrdenadas = Object.entries(vacantasPorRegion)
        .sort((a, b) => b[1] - a[1]);

    new Chart(document.getElementById("barras-vacantes"), {
        type: "bar",
        data: {
            labels: regionesOrdenadas.map(r => r[0]),
            datasets: [
                {
                    label: "Vacantes",
                    data: regionesOrdenadas.map(r => r[1]),
                    backgroundColor: regionesOrdenadas.map(r =>
                        r[0] === "Metropolitana"
                            ? "rgba(232, 87, 26, 0.85)"
                            : "rgba(232, 87, 26, 0.35)"
                    ),
                    borderColor: regionesOrdenadas.map(r =>
                        r[0] === "Metropolitana"
                            ? "rgba(232, 87, 26, 1)"
                            : "rgba(232, 87, 26, 0.6)"
                    ),
                    borderWidth: 1,
                    borderRadius: 2,
                },
            ],
        },
        options: {
            indexAxis: "y",
            responsive: true,
            scales: {
                x: {
                    grid: { color: "rgba(0,0,0,0.05)" },
                    border: { color: "#ccc" },
                    title: {
                        display: true,
                        text: "Total de vacantes",
                        font: { family: "'Georama', sans-serif", size: 11 },
                        color: "#999",
                    },
                    ticks: {
                        font: { family: "'Georama', sans-serif", size: 11 },
                        color: "#999",
                    },
                },
                y: {
                    grid: { display: false },
                    border: { color: "#ccc" },
                    ticks: {
                        font: { family: "'Georama', sans-serif", size: 11 },
                        color: "#555",
                    },
                },
            },
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: "#fff",
                    borderColor: "#ddd",
                    borderWidth: 1,
                    titleColor: "#111",
                    bodyColor: "#555",
                    titleFont: { family: "'Georama', sans-serif", size: 12, weight: "700" },
                    bodyFont: { family: "'Georama', sans-serif", size: 11 },
                    padding: 10,
                    callbacks: {
                        label: ctx => ctx.parsed.x + " vacantes",
                    },
                },
            },
        },
    });

    // ─────────────────────────────────────────────────────────────────
    // TABLA DINÁMICA CON BUSCADOR
    // ─────────────────────────────────────────────────────────────────

    const tbody = document.getElementById("tabla-body");
    const buscador = document.getElementById("buscador");
    const contador = document.getElementById("contador-resultados");

    function formatArancel(n) {
        return "$ " + n.toLocaleString("es-CL");
    }

    function renderTabla(datos) {
        tbody.innerHTML = "";
        datos.forEach(p => {
            const tr = document.createElement("tr");
            const esAlto = p.arancel >= 8000000;
            tr.innerHTML = `
                <td>${p.programa}</td>
                <td>${p.universidad}</td>
                <td>${p.region}</td>
                <td class="${p.tipo === "Estatal" ? "tipo-estatal" : "tipo-privada"}">${p.tipo}</td>
                <td class="${esAlto ? "arancel-alto" : ""}">${formatArancel(p.arancel)}</td>
                <td>${p.acreditacion} años</td>
                <td>${p.vacantes > 0 ? p.vacantes : "—"}</td>
            `;
            tbody.appendChild(tr);
        });
        const total = datos.length;
        contador.textContent = total === programas.length
            ? `${total} programas`
            : `${total} de ${programas.length} programas`;
    }

    renderTabla(programas);

    buscador.addEventListener("input", () => {
        const q = buscador.value.toLowerCase().trim();
        if (!q) {
            renderTabla(programas);
            return;
        }
        const filtrados = programas.filter(p =>
            p.programa.toLowerCase().includes(q) ||
            p.universidad.toLowerCase().includes(q) ||
            p.region.toLowerCase().includes(q) ||
            p.tipo.toLowerCase().includes(q)
        );
        renderTabla(filtrados);
    });

}); // fin DOMContentLoaded
