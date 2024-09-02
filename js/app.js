document.getElementById('reportForm').addEventListener('input', updatePreview);
document.getElementById('generatePDF').addEventListener('click', generatePDF);

function generateSection(title, content, type = 'p') {
    if (!content) return '';
    return `
        <section style="margin-bottom: 30px;">
            <h2 style="border-left: 4px solid #007bff; padding-left: 10px;">${title}</h2>
            <div class="content">
                <${type}>${content}</${type}>
            </div>
        </section>`;
}

function generateObjectiveSection(generalObjective, specificObjectives) {
    let sectionContent = '';
    if (generalObjective) {
        sectionContent += `<h3>Objetivo General</h3><p>${generalObjective}</p>`;
    }
    if (specificObjectives) {
        const objectives = specificObjectives.split('\n').map(obj => `<li>${obj}</li>`).join('');
        sectionContent += `<h3>Objetivos Específicos</h3><ul>${objectives}</ul>`;
    }
    if (!sectionContent) return '';
    return `
        <section style="margin-bottom: 30px;">
            <h2 style="border-left: 4px solid #007bff; padding-left: 10px;">Objetivos del Proyecto</h2>
            <div class="content">
                ${sectionContent}
            </div>
        </section>`;
}

function updatePreview() {
    const font = document.getElementById('fontSelect').value;
    const color = document.getElementById('colorSelect').value;

    const title = document.getElementById('projectTitle').value;
    const author = document.getElementById('authorName').value;
    const supervisor = document.getElementById('supervisorName').value;
    const department = document.getElementById('department').value;
    const deliveryDate = document.getElementById('deliveryDate').value;

    const executiveSummary = document.getElementById('executiveSummary').value;
    const indexContent = document.getElementById('indexContent').value;
    const introductionContent = document.getElementById('introductionContent').value;
    const generalObjective = document.getElementById('generalObjective').value;
    const specificObjectives = document.getElementById('specificObjectives').value;
    const problemDescription = document.getElementById('problemDescription').value;
    const literatureReview = document.getElementById('literatureReview').value;
    const projectScope = document.getElementById('projectScope').value;

    const developmentApproach = document.getElementById('developmentApproach').value;
    const projectPlanning = document.getElementById('projectPlanning').value;
    const systemDesign = document.getElementById('systemDesign').value;
    const testingValidation = document.getElementById('testingValidation').value;

    const programmingLanguages = document.getElementById('programmingLanguages').value;
    const frameworksLibraries = document.getElementById('frameworksLibraries').value;
    const developmentTools = document.getElementById('developmentTools').value;
    const deploymentPlatforms = document.getElementById('deploymentPlatforms').value;

    const codeStructure = document.getElementById('codeStructure').value;
    const moduleDescription = document.getElementById('moduleDescription').value;
    const implementedAlgorithms = document.getElementById('implementedAlgorithms').value;
    const challengesSolutions = document.getElementById('challengesSolutions').value;
    const codeDocumentation = document.getElementById('codeDocumentation').value;

    const unitTesting = document.getElementById('unitTesting').value;
    const integrationTesting = document.getElementById('integrationTesting').value;
    const userTesting = document.getElementById('userTesting').value;
    const performanceOptimization = document.getElementById('performanceOptimization').value;

    const technicalResults = document.getElementById('technicalResults').value;
    const functionalResults = document.getElementById('functionalResults').value;
    const projectImpact = document.getElementById('projectImpact').value;

    const stateOfArtComparison = document.getElementById('stateOfArtComparison').value;
    const projectLimitations = document.getElementById('projectLimitations').value;
    const lessonsLearned = document.getElementById('lessonsLearned').value;

    const conclusionsSummary = document.getElementById('conclusionsSummary').value;
    const recommendations = document.getElementById('recommendations').value;
    const futureWork = document.getElementById('futureWork').value;

    const references = document.getElementById('references').value;

    const additionalDocumentation = document.getElementById('additionalDocumentation').value;
    const sourceCode = document.getElementById('sourceCode').value;
    const tablesAndCharts = document.getElementById('tablesAndCharts').value;

    let previewContent = `
        <header style="font-family: ${font}; margin-bottom: 40px;">
            ${title ? `<h1 style="color: ${color};"><i class="fas fa-book icon"></i> ${title}</h1>` : ''}
            ${author ? `<p><strong>Autor:</strong> ${author}</p>` : ''}
            ${deliveryDate ? `<p><strong>Fecha:</strong> ${deliveryDate}</p>` : ''}
            ${supervisor ? `<p><strong>Supervisor:</strong> ${supervisor}</p>` : ''}
            ${department ? `<p><strong>Departamento:</strong> ${department}</p>` : ''}
        </header>`;

    previewContent += generateSection('Resumen Ejecutivo', executiveSummary);
    previewContent += generateSection('Índice', indexContent);
    previewContent += generateSection('Introducción', introductionContent);
    previewContent += generateObjectiveSection(generalObjective, specificObjectives);
    previewContent += generateSection('Descripción del Problema', problemDescription);
    previewContent += generateSection('Revisión de la Literatura', literatureReview);
    previewContent += generateSection('Alcance del Proyecto', projectScope);

    previewContent += generateSection('Enfoque de Desarrollo', developmentApproach);
    previewContent += generateSection('Planificación y Cronograma', projectPlanning);
    previewContent += generateSection('Diseño del Sistema', systemDesign);
    previewContent += generateSection('Pruebas y Validación', testingValidation);

    previewContent += generateSection('Lenguajes de Programación', programmingLanguages);
    previewContent += generateSection('Frameworks y Bibliotecas', frameworksLibraries);
    previewContent += generateSection('Herramientas de Desarrollo', developmentTools);
    previewContent += generateSection('Plataformas de Implementación', deploymentPlatforms);

    previewContent += generateSection('Estructura del Código', codeStructure);
    previewContent += generateSection('Descripción de Módulos o Componentes', moduleDescription);
    previewContent += generateSection('Algoritmos Implementados', implementedAlgorithms);
    previewContent += generateSection('Desafíos y Soluciones', challengesSolutions);
    previewContent += generateSection('Documentación del Código', codeDocumentation);

    previewContent += generateSection('Pruebas Unitarias', unitTesting);
    previewContent += generateSection('Pruebas de Integración', integrationTesting);
    previewContent += generateSection('Pruebas de Usuario', userTesting);
    previewContent += generateSection('Desempeño y Optimización', performanceOptimization);

    previewContent += generateSection('Resultados Técnicos', technicalResults);
    previewContent += generateSection('Resultados Funcionales', functionalResults);
    previewContent += generateSection('Impacto del Proyecto', projectImpact);

    previewContent += generateSection('Comparación con el Estado del Arte', stateOfArtComparison);
    previewContent += generateSection('Limitaciones del Proyecto', projectLimitations);
    previewContent += generateSection('Lecciones Aprendidas', lessonsLearned);

    previewContent += generateSection('Resumen de Conclusiones', conclusionsSummary);
    previewContent += generateSection('Recomendaciones', recommendations);
    previewContent += generateSection('Trabajo Futuro', futureWork);

    previewContent += generateSection('Referencias', references, 'ul');

    previewContent += generateSection('Documentación Adicional', additionalDocumentation);
    previewContent += generateSection('Código Fuente', sourceCode);
    previewContent += generateSection('Tablas y Gráficos', tablesAndCharts);

    previewContent += `
        <footer>
            <p>Reporte generado el ${new Date().toLocaleDateString()} por ${author || '[Nombre del Autor]'}</p>
        </footer>`;

    document.getElementById('reportPreview').innerHTML = previewContent;
}

function generatePDF() {
    const previewContent = document.getElementById('reportPreview');
    const options = {
        margin: 1,
        filename: 'reporte_proyecto.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(previewContent).set(options).save();
}