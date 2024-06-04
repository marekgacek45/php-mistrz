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

Nie ma PHP bez bazy danych, a jak jakaś bazka to pierwszym wyborem jest klasyczny MySql. Jeżeli korzystacie z **XAMPP** lub **Laragon** to MySql będziecie mieli zainstalowane w pakiecie. Jednak w przypadku **Laravel Herd** opcja zarządzania bazami jest w wersji płatnej. Nie ma się jednak co martwić, instalacja jest na prawdę bardzo prosta. 

Poniżej zostawiam link do instalacji środowiska **MySql**. Odbywa się ona w identyczny sposób jak w dziesiątkach innych instalatorów. Zostawię również link do filmiku na YouTube autorstwa [Susan B](https://www.youtube.com/@codewithsusan). która w razie potrzeby przeprowadzi Cię przez ten proces.

Instalator MySql: [link](https://www.mysql.com/downloads/installator/)
Filmik prowadzący przez konfigurację: [link](https://www.youtube.com/watch?v=9qVyrVNKYhQ&t=661s&ab_channel=SusanB.)

### Table Plus

W moim mniemaniu jest to niewątpliwie najbardziej przyjazny program do zarządzania bazami danych. Jego niesamowicie przyjazny interfejs rekomenduje mi nawet potrzebę instalacji dodatkowego managera tym razem do tworzenia nowych baz. Niestety TablePlus tego nie potrafi (możliwe, że w wersji premium posiada taki bajer).

Dodanie bazy jest naprawdę prostę, załączam poniżej filmik na którym pokażę Ci jak to zrobić.

Instalator TablePlus: [link](https://tableplus.com/)

### Heidi SQL

Nie jest zbyt piękny graficznie ale swoje zadanie czyli tworzenie bazki spełnia doskonale. 

Instalator HeidiSql: [link](https://www.heidisql.com/)

Film pokazujący jak stworzyć, a następnie zarządzać bazą danych w MySql:  [link](https://www.youtube.com/watch?v=4GD44r8y9Bc&t=716s&ab_channel=MarekGacek)