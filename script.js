// Cargar cuando el documento esté listo
document.addEventListener('DOMContentLoaded', function() {
    addPrintButton();
});

// Agregar botón para descargar PDF
function addPrintButton() {
    const printButton = document.createElement('div');
    printButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        display: flex;
        gap: 10px;
        z-index: 1000;
    `;
    
    // Botón Imprimir
    const printBtn = document.createElement('button');
    printBtn.innerHTML = '🖨️ Imprimir';
    printBtn.style.cssText = `
        padding: 10px 18px;
        background-color: #2d5016;
        color: white;
        border: none;
        border-radius: 25px;
        cursor: pointer;
        font-size: 0.9em;
        font-weight: 600;
        box-shadow: 0 4px 15px rgba(45, 80, 22, 0.3);
        transition: all 0.3s ease;
    `;
    
    printBtn.onmouseover = () => {
        printBtn.style.transform = 'translateY(-2px)';
        printBtn.style.boxShadow = '0 6px 20px rgba(45, 80, 22, 0.4)';
    };
    
    printBtn.onmouseout = () => {
        printBtn.style.transform = 'translateY(0)';
        printBtn.style.boxShadow = '0 4px 15px rgba(45, 80, 22, 0.3)';
    };
    
    printBtn.onclick = () => {
        window.print();
    };
    
    // Botón Descargar PDF
    const pdfBtn = document.createElement('button');
    pdfBtn.innerHTML = '📥 PDF';
    pdfBtn.style.cssText = `
        padding: 10px 18px;
        background-color: #8b4513;
        color: white;
        border: none;
        border-radius: 25px;
        cursor: pointer;
        font-size: 0.9em;
        font-weight: 600;
        box-shadow: 0 4px 15px rgba(139, 69, 19, 0.3);
        transition: all 0.3s ease;
    `;
    
    pdfBtn.onmouseover = () => {
        pdfBtn.style.transform = 'translateY(-2px)';
        pdfBtn.style.boxShadow = '0 6px 20px rgba(139, 69, 19, 0.4)';
    };
    
    pdfBtn.onmouseout = () => {
        pdfBtn.style.transform = 'translateY(0)';
        pdfBtn.style.boxShadow = '0 4px 15px rgba(139, 69, 19, 0.3)';
    };
    
    pdfBtn.onclick = () => {
        // Usar la función de impresión del navegador (Ctrl+P) y guardar como PDF
        const printWindow = window.open('', '', 'height=700,width=900');
        printWindow.document.write(document.querySelector('.container').outerHTML);
        printWindow.document.write('<link rel="stylesheet" href="styles.css">');
        printWindow.document.close();
        
        // Esperar a que se cargue y luego imprimir
        setTimeout(() => {
            printWindow.print();
            printWindow.close();
        }, 250);
    };
    
    printButton.appendChild(printBtn);
    printButton.appendChild(pdfBtn);
    document.body.appendChild(printButton);
}

// Ocultar botones en móvil
function checkScreenSize() {
    const printButton = document.querySelector('div[style*="position: fixed"]');
    if (window.innerWidth < 768) {
        if (printButton) printButton.style.display = 'none';
    } else {
        if (printButton) printButton.style.display = 'flex';
    }
}

window.addEventListener('resize', checkScreenSize);
checkScreenSize();

console.log('CV cargado correctamente');