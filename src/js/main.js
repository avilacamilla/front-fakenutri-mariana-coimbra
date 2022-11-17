const calculate = document.getElementById('calculate');


function bmi () {
    const name = document.getElementById('name').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const result = document.getElementById('result');

    if (name !== '' && height !== '' && weight !== '') {

        const valueBMI = (weight / (height * height)).toFixed(1);

        let riskRating = '';

        if (valueBMI < 18.5){
            riskRating = 'abaixo do peso. Agende uma consulta!';
        }else if (valueBMI < 25) {
            riskRating = 'com o peso ideal. Parabéns!';
        }else if (valueBMI < 30){
            riskRating = 'levemente acima do peso. Fique atento!';
        }else if (valueBMI < 35){
            riskRating = 'com obesidade grau I. Agende uma consulta!';
        }else if (valueBMI < 40){
            riskRating = 'com obesidade grau II. Agende uma consulta!';
        }else {
            riskRating = 'com obesidade grau III. Agende uma consulta!';
        }

        result.textContent = `${name}, seu IMC é ${valueBMI}. Você está ${riskRating}`;
        
    }else {
        result.textContent = '***Preencha todos os campos.';
    }

}

calculate.addEventListener('click', bmi);