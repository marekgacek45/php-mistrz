---
sidebar_position: 2
---


# Instalacja

Podać linki do filmików YT

### Laravel Herd

Do używania PHP na lokalnym komputerze potrzebujemy środowiska programistycznego, które umożliwia tworzenie lokalnych serwerów. Na rynku dostępnych jest kilka takich produktów, w tym [Laravel Herd](https://herd.laravel.com/windows), który wybrałem. 

Popularne są także kultowy [XAMPP](https://www.apachefriends.org/pl/index.html) czy też [Laragon](https://www.apachefriends.org/pl/index.html).

Instalacja **Laravel Herd** to kaszka z mleczkiem. Wystarczy zainstalować go jak większość programów.

Ważne jest aby wskazać Herdowi ścieżkę do naszych projektów. Można to zrobić w miejscu pokazanym na poniższym screenie. 

![laravel herd i wskazanie ścieżki do projektów](/img/php/herd.webp)

### Live Server VSC

Odświeżanie strony za każdym razem gdy dodajemy jakąś nową zawartość lub po prostu chcemy coś przetestować portafi rozgroryczyć nawet świętych. Na szczęście można sobie z tym łatwo poradzić dzięki duetowi **Live Server** - czyli wtyczki zarówno do Visual Studio Code jak i do przeglądarki.

Jeżeli chodzi o instalację w VSC to jedynym naszym zadaniem jest zainstalowanie jej.

Tutaj link do interesującego nas rozszerzenia:[Live Server Extension]( https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

### Live Server Chrome

Kolejnym krokiem jest instalacja wtyczki o tej samej nazwie do przeglądarki. Ja używam **Chrome** ale nic nie stoi na przeszkodzie aby użyć innych wariantów również opartych na siliku Chrominium jak Edge, Brave czy Opera. Istnieje również wersja dla Firefoxa.

Link do wtyczki: [Live Server Chrome Extension]( https://chromewebstore.google.com/detail/live-server-web-extension/fiegdmejfepffgpnejdinekhfieaogmj?pli=1)

Po instalacji musimy wskazać wtyczke adresy serwerów które ma obsługiwać.

W moim przypadku będzie to http://example.test, ale nie jest to oczywiście regułą. Jeżeli Wasz projekt będzie się nazywał 'shop' to wpisujecie adres http://shop.test itd.

![konfiguracja Live Server Chrome Extension](/img/php/lse.webp)

Następnie należy podać Live Server Adress. Domyślnie jest to: http://127.0.0.1:5500/

Następnie odświeżamy przeglądarkę i wszystko powinno śmigać pierwszorzędnie!

![pomyślny test Live Server'a](/img/php/ls.gif)

### MySQL
### Table Plus
### Heidi SQL
