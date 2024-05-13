<b>Efekt działania aplikacji<b><br><br>
![image](https://github.com/Valentine0604/zadanie1/assets/106283972/4332c5c4-f60a-47d4-afe2-87bbb18f40cb)

Budowa obrazu kontenera z aplikacją, który będzie pracować na platformach linux/arm64 i linux amd/64
```
docker buildx build --platform linux/amd64,linux/arm64 -t nazwa_obrazu:tag ścieżka_do_katalogu_z_Dockerfile
```
![image](https://github.com/Valentine0604/zadanie1/assets/106283972/ae62dcfc-a50b-4ec5-86c4-c7c8e4bc0296)


Budowa obrazu kontenera z aplikacją wykorzystująca sterownik docker-container
```
docker buildx build --platform linux/amd64,linux/arm64 -t nazwa_obrazu:tag ścieżka_do_katalogu_z_Dockerfile
```

Budowa obrazu kontenera wykorzystująca dane cache
```
docker buildx build --platform linux/amd64,linux/arm64 \
  --cache-to=type=registry,ref=nazwa_rejestru/cache,mode=max \
  --tag nazwa_rejestru/nazwa_obrazu:tag --push .
```
```
docker pull nazwa_obrazu --cache-from=type=registry,ref=nazwa_rejestru/cache 
```
