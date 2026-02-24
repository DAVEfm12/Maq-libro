const bookData = {
    portada: `
        <div style="text-align:center">
            <h3>COLECCIÓN DORADA</h3>
            <h1>MAQUETAS PARA PRINCIPIANTES</h1>
            <p>TEORÍA • ELABORACIÓN • ACABADOS • VEGETACIÓN</p>
            <div class="img-placeholder">[Imagen 1: Portada del Libro - Edificio]</div>
            <h2>IGNACIO LÓPEZ TORRES</h2>
            <p>VOLUMEN I</p>
            <p>Puerto Cabello - Venezuela</p>
        </div>`,
    presentacion: `
        <h1>Presentación</h1>
        <p>Este manual es producto de años de experiencia en el taller de artes plásticas. Agradezco a Nayeli Astilleros Rosas y al Dr. Nil Alfonso Hernández por la edición.</p>
        <div class="info-box">Dedicado a mis padres y hermanos por ser el motor de mi creatividad.</div>`,
    cap1: `
        <h1>Cap. 1: Conceptos del Diseño</h1>
        <p>Elementos que componen la estructura de una maqueta:</p>
        <ul>
            <li><strong>Conceptuales:</strong> El punto, la línea y el plano.</li>
            <li><strong>Visuales:</strong> Forma, medida, color y textura.</li>
        </ul>
        <div class="img-placeholder">[Imagen: Diagrama de Punto, Línea y Plano]</div>`,
    cap2: `
        <h1>Cap. 2: Clasificación de Maquetas</h1>
        <p>Se dividen según su objetivo:</p>
        <ul>
            <li><strong>Topográficas:</strong> Relieve y terreno.</li>
            <li><strong>Arquitectónicas:</strong> Edificación e interiores.</li>
            <li><strong>Especiales:</strong> Diseño industrial.</li>
        </ul>
        `,
    cap3: `
        <h1>Cap. 3: Interpretación de Planos</h1>
        <p>Es fundamental entender las Plantas (vista superior), Fachadas (vistas laterales) y Cortes (secciones verticales).</p>
        <div class="img-placeholder">[Imagen: Plano Arquitectónico con Acotaciones]</div>`,
    cap4: `
        <h1>Cap. 4: Materiales</h1>
        <p>Materiales estrella: Cartón batería, madera balsa, acetatos para vidrios y pegamento blanco.</p>
        `,
    cap5: `
        <h1>Cap. 5: Herramientas</h1>
        <p>Imprescindibles: Cúter (estilete), Exacto #11, Regla metálica y Escalímetro.</p>`,
    cap6: `
        <h1>Cap. 6: Técnicas de Corte</h1>
        <p>El corte debe ser firme, con el cúter a 45 grados y sin aplicar toda la fuerza en una sola pasada.</p>
        <div class="img-placeholder">[Imagen: Posición de manos para corte seguro]</div>`,
    cap7: `
        <h1>Cap. 7: Escalas</h1>
        <p>Relación matemática. 1:100 significa que 1 cm equivale a 1 metro real.</p>
        `,
    cap8: `
        <h1>Cap. 8: El Taller</h1>
        <p>Debe tener iluminación blanca, ventilación para los pegamentos y una mesa de trabajo nivelada.</p>`,
    cap9: `
        <h1>Cap. 9: El Ensamble</h1>
        <p>Uso de pegamento de contacto y lijado de bordes para que las esquinas cierren perfectamente.</p>`,
    cap10: `
        <h1>Cap. 10: Vegetación</h1>
        <p>Cómo crear árboles con alambre y esponja teñida. Uso de aserrín para el césped.</p>
        `,
    anexos: `
        <h1>Anexos</h1>
        <p>Relación de alumnos del Instituto Tecnológico participantes (2004-2010).</p>
        <table border="1" style="width:100%; border-collapse:collapse;">
            <tr style="background:#eee"><th>Carrera</th><th>Siglas</th></tr>
            <tr><td>Sistemas Computacionales</td><td>ISC</td></tr>
            <tr><td>Ing. Bioquímica</td><td>IBQ</td></tr>
        </table>`,
    referencias: `
        <h1>Referencias Bibliográficas</h1>
        <ul>
            <li>Maquetas de Arquitectura - Wolfgang Knoll.</li>
            <li>Proyectos Arquitectónicos - Alfonso Ceballos.</li>
        </ul>`,
    biografia: `
        <h1>Biografía del Autor</h1>
        <p><strong>Ignacio López Torres</strong>: Artista con más de 1000 obras expuestas. Director de RL & Asociados Proyectos y Construcción.</p>
        <div class="img-placeholder">[Foto del Autor]</div>`
};

function loadContent(id) {
    document.getElementById('book-content').innerHTML = bookData[id];
    window.scrollTo(0, 0);
}

// Cargar portada por defecto
loadContent('portada');
