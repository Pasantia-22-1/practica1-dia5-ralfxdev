
console.log('App Calculator');

function sumar(){
    const form = document.getElementById('form');
    let operatorA = form['operatorA'];
    let operatorB = form['operatorB'];
    let results = parseInt(operatorA.value) + parseInt(operatorB.value);
    if(isNaN(results))
        results = 'The operation does not include numbers';
    document.getElementById('results').innerHTML = `Result: ${results}`;
    console.log(`Result: ${results}`);
}

function restar(){
    const form = document.getElementById('form');
    let operatorA = form['operatorA'];
    let operatorB = form['operatorB'];
    let results = parseInt(operatorA.value) - parseInt(operatorB.value);
    if(isNaN(results))
        results = 'The operation does not include numbers';
    document.getElementById('results').innerHTML = `Result: ${results}`;
    console.log(`Result: ${results}`);
}

function reset(){
    document.getElementById('form').reset();
    document.getElementById('results').innerHTML = "";
}
