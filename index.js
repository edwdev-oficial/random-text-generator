const divsText = document.querySelectorAll('.text');

const getRandomNumber = (min, max) => {

    return Math.floor(Math.random() * (max-min+1) + min);

};

const config = {
    paragrafos: {
        min: 20,
        max: 40
    },
    palavras: {
        min: 10,
        max: 60
    },
    letras: {
        min: 5,
        max: 10
    }
};

const generateText = paragrafos => {
    
    let text = '';
    
    for ( let i = 0; i< paragrafos; i++) {
    
        const plavras = getRandomNumber(
            config.palavras.min,
            config.palavras.max
        );
    
        text += `${i + 1}. `
        text += String.fromCharCode(getRandomNumber(65, 90));
    
        for (let i = 0; i < plavras; i++) {
        
            let string = '';
    
            const letras = getRandomNumber(
                config.letras.min,
                config.letras.max
            );
    
            for(let i = 0; i < letras; i++) {
        
                string += String.fromCharCode(getRandomNumber(97, 122));
        
            }
        
            text += string;
            if(i < plavras - 1) text += String.fromCharCode(32);
    
        };
    
        text += String.fromCharCode(46);
        text += '\n';
        
        
    };

    fetch ( 'http://127.0.0.1:3008/home/sendText', {
        method: 'POST',
        body: text
    })
    .then ( response => response.json() )
    .then ( data => {

        console.log(data);

    } );    
    
    return text;

}

Array.from(divsText).forEach( (divText, i) => {

    const h2 = document.createElement('h2');
    h2.innerHTML = `Random Text${i+1} to database`;
    divText.appendChild(h2);

    const text = generateText ( getRandomNumber (
        config.paragrafos.min, 
        config.paragrafos.max
    ) );
    
    const formattedText = text.replace(/\n/g, '<br>');
    const p = document.createElement('p');
    p.innerHTML = formattedText;
    divText.appendChild (p);

});

fetch ( 'http://127.0.0.1:3008/home/listTexts' )
.then(response => response.json())
.then(text => {

    const artile = document.querySelector('.article-top'); 
    const h2 = document.createElement('h2');
    h2.innerHTML = 'Random Text from Database';
    artile.appendChild(h2);

    const randomIndex = getRandomNumber(0, text.length - 1);
    const randomText = text[randomIndex].text;
    const randomTextFormatted = randomText.replace(/\n/g, '<br>');
    const p = document.createElement('p');
    p.innerHTML = randomTextFormatted;
    artile.appendChild(p);


});
