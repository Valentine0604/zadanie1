const http = require('http');
const os = require('os');

// Funkcja do uzyskiwania informacji o serwerze
function getServerInfo() {
    const authorName = "Ewelina Salata";
    const port = process.env.PORT || 3000;
    const serverStartTime = new Date().toLocaleString();
    const serverHostname = os.hostname();
    return {
        authorName,
        port,
        serverStartTime,
        serverHostname
    };
}

// Funkcja obsługująca żądania HTTP
function requestHandler(req, res) {
    // Pobranie informacji o serwerze
    const serverInfo = getServerInfo();

    // Pobranie adresu IP klienta
    const clientIp = req.connection.remoteAddress;

    // Pobranie daty i czasu w strefie czasowej klienta
    const clientDateTime = new Date().toLocaleString();

    // Wyświetlenie informacji o kliencie w konsoli serwera
    console.log(`Adres IP klienta: ${clientIp}`);

    // Wyświetlenie informacji o kliencie w przeglądarce
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`<html><head><title>Informacje o kliencie</title></head><body>`);
    res.write(`<h1>Informacje o kliencie</h1>`);
    res.write(`<p>Adres IP klienta: ${clientIp}</p>`);
    res.write(`<p>Data i czas w strefie czasowej klienta: ${clientDateTime}</p>`);
    res.write(`<p>Informacje o serwerze:</p>`);
    res.write(`<ul>`);
    res.write(`<li>Autor serwera: ${serverInfo.authorName}</li>`);
    res.write(`<li>Adres serwera: ${serverInfo.serverHostname}</li>`);
    res.write(`<li>Port serwera: ${serverInfo.port}</li>`);
    res.write(`<li>Data i czas uruchomienia serwera: ${serverInfo.serverStartTime}</li>`);
    res.write(`</ul>`);
    res.write(`</body></html>`);
    res.end();
}

// Tworzenie serwera HTTP
const server = http.createServer(requestHandler);

// Nasłuchiwanie na określonym porcie
const port = process.env.PORT || 3000;
const authorName = "Ewelina Sałata";
server.listen(port, () => {
    console.log(`Serwer uruchomiony. Port: ${port}. Autor: ${authorName}.`);
});
