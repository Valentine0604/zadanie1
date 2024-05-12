<b>Efekt działania aplikacji<b><br><br>
![image](https://github.com/Valentine0604/zadanie1/assets/106283972/013056fd-cdc7-40d7-bf45-c8c53debb56d)

![image](https://github.com/Valentine0604/zadanie1/assets/106283972/731adabf-c387-4643-91ad-c60c8065d12a)

Budowanie obrazu kontenera
```
docker build -t nazwa_obrazu:tag_sciezka .
```

![image](https://github.com/Valentine0604/zadanie1/assets/106283972/f85cacf0-0faf-43d5-a597-6c6c84ac4944)

Uruchomienie kontenera na podstawie zbudowanego obrazu
```
docker run -d -p port_hosta:port_kontenera nazwa_obrazu:tag
```
![image](https://github.com/Valentine0604/zadanie1/assets/106283972/3fb46236-27c1-492d-9433-610407639036)

Dostęp do logów kontenera
```
docker logs nazwa_kontenera
```
![image](https://github.com/Valentine0604/zadanie1/assets/106283972/859ccd19-10ef-47f7-8ec6-88863d3099c6)

Sprawdzanie ilości warstw w zbudowanym obrazie
```
docker history nazwa_obrazu:tag
```

![image](https://github.com/Valentine0604/zadanie1/assets/106283972/763e827c-00e1-466e-b900-48059a908936)

Wynik docker scout<br>
![image](https://github.com/Valentine0604/zadanie1/assets/106283972/f3f141a9-ceea-4876-8c72-0c8c0c7d9755)
