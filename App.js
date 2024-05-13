const http = require('http');
const os = require('os');

const PORT = 3000;
const authorName = "Ewelina Salata";

const server = http.createServer((req, res) => {
    // Pobieranie informacji o adresie IP klienta
    const clientIP = req.socket.remoteAddress;
    
    // Pobieranie daty i godziny w strefie czasowej klienta
    const currentTime = new Date().toLocaleString('pl-PL', {timeZone: 'Europe/Warsaw'});
    
    // Pobieranie daty i czasu uruchomienia serwera
    const serverStartTime = new Date().toLocaleString('pl-PL', {timeZone: 'Europe/Warsaw'});
    
    // Pobieranie adresu serwera
    const serverAddress = os.hostname();
    
    // Zapisywanie informacji w logach serwera
    console.log(`Serwer uruchomiony przez: ${authorName} na porcie: ${PORT}`);
    console.log(`Adres IP klienta: ${clientIP}`);
    console.log(`Data i godzina w strefie czasowej klienta: ${currentTime}`);
    console.log(`Data i godzina uruchomienia serwera: ${serverStartTime}`);
    console.log(`Adres serwera: ${serverAddress}`);
    
    // Tworzenie treści strony dla klienta
    const responseBody = `
        <html>
            <head>
                <title>Informacje o kliencie</title>
            </head>
            <body>
                <h1>Informacje o kliencie</h1>
                <p>Adres IP klienta: ${clientIP}</p>
                <p>Data i godzina w twojej strefie czasowej: ${currentTime}</p>
                
                <h1>Informacje o serwerze</h1>
                <ul>
                  <li>Autor serwera: ${authorName}</li>
                  <li>Port serwera: ${PORT}</li>
                  <li>Data i godzina uruchomienia serwera: ${serverStartTime}</li>
                  <li>Adres serwera: ${serverAddress}</li>
                </ul>
            </body>
        </html>
    `;
    
    // Ustawienie nagłówków odpowiedzi HTTP
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    // Wysłanie odpowiedzi do klienta
    res.end(responseBody);
});

server.on('error', (err) => {
    console.error('Wystąpił błąd serwera:', err.message);
});

server.listen(PORT, () => {
    // Wyświetlanie informacji o uruchomieniu serwera
    console.log(`Serwer uruchomiony na porcie ${PORT} przez ${authorName} o godzinie ${new Date().toLocaleString('pl-PL', {timeZone: 'Europe/Warsaw'})}`);
});
