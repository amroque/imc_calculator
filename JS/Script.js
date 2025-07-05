document.getElementById('bmi-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    // Validaciones mejoradas
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0.4) {
        document.getElementById('bmi-value').textContent = '';
        document.getElementById('bmi-category').textContent = 'Por favor, ingresa valores válidos (ej: altura mayor a 0.4 m).';
        return;
    }

    const bmi = weight / (height * height);
    document.getElementById('bmi-value').textContent = bmi.toFixed(2);

    let category = '';
    if (bmi < 18.5) {
        category = 'Bajo peso';
    } else if (bmi < 25) {
        category = 'Normal';
    } else if (bmi < 30) {
        category = 'Sobrepeso';
    } else {
        category = 'Obesidad';
    }
    document.getElementById('bmi-category').textContent = `Categoría: ${category}`;
});