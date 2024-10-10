document.getElementById('criptografar').addEventListener('click', function() {
    const frase = document.getElementById('frase').value;
    const resultado = criptografar(frase);

    const fraseCriptografada = `Frase criptografada: ${resultado.fraseCriptografada}\nNúmero usado para criptografia: ${resultado.numero}`;
    document.getElementById('resultado').innerText = fraseCriptografada;

    // Copiar automaticamente a frase criptografada para o clipboard
    navigator.clipboard.writeText(resultado.fraseCriptografada).then(() => {
        document.getElementById('copiedMessage').style.display = 'block';
        
        // Esconder a mensagem de "copiado" após 2 segundos
        setTimeout(() => {
            document.getElementById('copiedMessage').style.display = 'none';
        }, 2000);
    }).catch(err => {
        console.error('Erro ao copiar para o clipboard: ', err);
    });
});

function criptografar(frase) {
    const numero = Math.floor(Math.random() * 7) + 1;
    let fraseCriptografada = "";

    for (let i = 0; i < frase.length; i++) {
        const letra = frase[i];
        if (/[a-zA-Z]/.test(letra)) {
            const codigoBase = letra === letra.toUpperCase() ? 65 : 97;
            const novaLetra = String.fromCharCode((letra.charCodeAt(0) - codigoBase + numero) % 26 + codigoBase);
            fraseCriptografada += novaLetra;
        } else {
            fraseCriptografada += letra;
        }
    }

    return { fraseCriptografada, numero };
}
