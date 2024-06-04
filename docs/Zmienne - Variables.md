---
sidebar_position: 3
---

# Zmienne - variables



# Deklaracja zmiennych

Często są one postrzegane jako pudełko do którego wrzucamy jaką wartość, a etykietą na tym pudełku jest nazwa właśnie tej zmiennej. W PHP zmienną tworzymy umieszczając jej nazwę przed znakiem `$` po czym przypisujemy do niej jakąś wartość bądź też pozostawiamy ją pustą.


	```
$name;
$dog = 'Pimpek';
```

# Nazewnictwo zmiennych

Nazwa zmiennej musi się zaczynać od litery  lub znaku podkreślenia (podłogi). Nazwa może zawierać litery(bez polskich znaków), cyfry oraz znak podkreślenia(podłogi). Wielkość liter ma znaczenie czyli `$name` to nie to samo co `$NAME`


	```
//poprawne zmienne
$sum = 12;
$_username = "Ricky";
$user_email_2 = "ricky@baraki.pl";

//niepoprawne zmienne
$123test;
$pieseł;
$^niedobre;
```

Ważna uwaga, nazwy zmiennych piszemy po angielsku. Chodź może to być kuszące, proszę nie róbmy tego w naszym rodzimym języku.

#Zmiana wartości zmiennej

W PHP nic nie stoi na przeszkodzie aby do stworzonej już zmiennej przypisać nową wartość jednocześnie zamieniając tą starą. Chociaż początkowo jest to duża zaleta gdyż tego typu podejście wiele wybacza to w późniejszym okresie potrafi uprzykrzyć życie i warto mieć to zawsze na uwadze. Oprócz tego można nawet zmienić typ zmiennej, ten temat poruszę za chwilkę.


```
{<?php
$var = "Pimpek";
echo $var; // Pimpek
$var = 'Paździoch';
echo $var; //Paździoch
$var = 4;
echo $var; // 4
?>}
```


# STAŁE

Jest to specjalny rodzaj zmiennych które raz zdefiniowane nie mogą zmienić swojej wartości. Często są wykorzystywane do przechowywania danych konfiguracyjnych.

Deklarujemy je za pomocą słowa kluczowego const lub funkcji define() która jako parametry przyjmuje nazwę stałej i jej wartość. Postępując z ogólnie przyjętymi zasadami nazwę stałej dekralujemy za pomocą wielkich liter, aby na pierwszy rzut oka wiedzieć z czym mamy do czynienia.


	```
define("API_KEY",123456789);
const APP_LOCALE = 'pl';`
```
