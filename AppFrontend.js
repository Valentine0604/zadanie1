import React from 'react';

function App() {
  const ver = process.env.REACT_APP_VERSION;

  // Pobieranie adresu IP klienta
  const clientIP = window.location.hostname;

  // Pobieranie daty i godziny w strefie czasowej klienta
  const currentTime = new Date().toLocaleString('pl-PL', {timeZone: 'Europe/Warsaw'});

  // Pobieranie daty i czasu uruchomienia serwera
  const serverStartTime = new Date().toLocaleString('pl-PL', {timeZone: 'Europe/Warsaw'});

  // Adres serwera
  const serverAddress = window.location.origin;

  //imię i nazwisko
  const authorName = "Ewelina Salata";

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {"Imię i nazwisko: " + authorName}
          {"Adres IP klienta: " + clientIP}
          <br />
          {"Adres serwera: " + serverAddress}
          <br />
          {"Data i godzina w twojej strefie czasowej: " + currentTime}
          <br />
          {"Data i godzina uruchomienia serwera: " + serverStartTime}
        </div>
      </header>
    </div>
  );
}

export default App;
