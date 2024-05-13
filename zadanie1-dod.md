<b>Efekt działania aplikacji<b><br><br>
![image](https://github.com/Valentine0604/zadanie1/assets/106283972/3fa66d8b-e1a2-401b-ba24-3dbde5548847)
![image](https://github.com/Valentine0604/zadanie1/assets/106283972/3afeb92e-0012-4d40-8baa-bc009054f8d3)

Budowa obrazu kontenera z aplikacją, który będzie pracować na platformach linux/arm64 i linux amd/64
```
docker buildx build --platform linux/amd64,linux/arm64 -t nazwa_obrazu:tag ścieżka_do_katalogu_z_Dockerfile
```
![image](https://github.com/Valentine0604/zadanie1/assets/106283972/ae62dcfc-a50b-4ec5-86c4-c7c8e4bc0296)


Budowa obrazu kontenera z aplikacją wykorzystująca sterownik docker-container
```
docker buildx build --platform linux/amd64,linux/arm64 -t nazwa_obrazu:tag ścieżka_do_katalogu_z_Dockerfile
```
![image](https://github.com/Valentine0604/zadanie1/assets/106283972/d3ea8006-27ae-46fa-b47f-ef54535a848f)

Budowa obrazu kontenera wykorzystującą dane cache
```
docker buildx build --platform inux/amd64,linux/arm64 -t nazwa_obrazu:tag --push --cache-to=type=registry,ref=nazwa_registry/nazwaobrazu:tag,mode=max -f nazwa_dockerfile
```
![image](https://github.com/Valentine0604/zadanie1/assets/106283972/13b6cb05-5216-426c-9df1-844b41fceef6)

```
docker pull nazwa_obrazu --cache-from=type=registry,ref=nazwa_rejestru/folder_z_cache
```
