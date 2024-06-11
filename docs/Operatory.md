---
sidebar_position: 5
---

# Operatory

Wiele typów operatorów poznaliśmy już chociażby w szkole podstawowej, co może być dla niektórych zaskoczeniem. Jest to naprawdę prostę i warto je zapamiętać gdyż przydadzą się niejednokrotnie podczas programistycznych wojaży.

## Operatory Porównania

### = Operator Przypisania

Po prostu przypisuje jakąś wartość do zmiennej.

```jsx
$sport = 'hockey'
```

### == Operator równości

Sprawdza czy dwie wartości są sobie równe po konwersji typów. Oznacza to że 2 i "2" czyli number i string będą sobie równe.

```jsx
if(2 == '2') {
    echo 'To prawda';
}
```

### === Operator ścisłej równości

Oprócz porównania wartości sprawdza również typy.

```jsx
if(2 == '2') {
    echo 'To prawda'; //nic sie nie wypisze gdyż mają inne typy
}
```

## !== Operator nierówności

Sprawdza czy obie wartości są różne po konwersji typów.

```jsx
if(2 == '2') {
    echo 'To prawda'; //nic sie nie wypisze gdyż mają inne typy
}
```

## !== Operator ścisłej nierówności

Również sprawdza czy wartości są różne lub czy są różnych typów.

```jsx
if(2 == '2') {
    echo 'To prawda'; //nic sie nie wypisze gdyż mają inne typy
}
```

## Operatory Matematyczne

### + Operator dodawania

```jsx

$a = 1;
    $b = 2;
    $result = $a + $b;
    echo $result
```

### - Operator odejmowania

```jsx

 $a = 1;
    $b = 2;
    $result = $a - $b;
    echo $result
```

### * Operator mnożenia

```jsx

 $a = 5;
     $b = 2;
     $result = $a * $b;
     echo $result
```

### / Operator dzielenia

```jsx

 $a = 5;
     $b = 2;
     $result = $a * $b;
     echo $result
```

### % Operator dzielenia

```jsx
$a = 10;
    $b = 3;
    $result = $a % $b;
    echo $result
```

##  Operatory specjalne

###  Operator inkrementacji oraz dekrementacji


W tym miejscu opowiem jeszcze o dwóch specjalnych operatorach które mają dużo wspólnego z matematyką ale jednak nie można ich zaliczyć do tej kategorii. Są to operatory **inkrementacji** oraz **dekrementacji**. Dzięki nim zwiększamy bądź zwiększamy wartość zmiennej o 1. Ważne do zapamiętania jest również to, że występują one w wariantach **pre** i **post**. Preinkrementacja oznacza, że wartość zostanie zwiększona w tej samej linii kodu, natomiast postinkrementacja zwiększy wartość dopiero w następnej lini.


```jsx
 $a = 1;
    $b = 2;
   $a++;
   $a--;
   ++$b;
   --$b;
```


##  Operatory logiczne

Bardzo często będziemy się z nimi spotykać w przypadku instrukcji warunkowych.


###  && operator and

Jeżeli dodamy ten operator pomiędzy dwie zmienne wtedy obie muszą być true aby warunek się wykonał. W przypadku gdy pierwsza zmienna czy też warunek jest false wtedy ten drugi nawet nie jest sprawdzany.


```jsx
  $console = 'PlayStation 4';
    $game = 'God of War:Ragnarok';

    if ($console === 'PlayStation 4' && $game === 'God of War:Ragnarok') {
        echo 'Możesz zagrać w tę wspaniałą grę';
    }
```

###  || operator or

W tym wypadku tylko jedna strona musi być true aby warunek się wykonał.


```jsx
  $console = 'PlayStation 4';
     $game = 'God of War:Ragnarok';
 
     if ($console === 'PlayStation 4' || $console === 'Play Station 5') {
         echo 'Jeżeli masz którąś z tych konsol możesz zagrać w God of War:Ragnarock';
     }
 
```

###  ! operator negacji

Początkowo był dla mnie ciężki do ogarnięcia jednak najłatwiej zapamiętać go w ten sposób, że po prostu tworzy lustrzane odbicie. Coś co jest true ma być false i na odwrót.

```jsx
$bollean = false;

    if (!$bollean) {
 echo 'Wyświeli się obrócone o 180 stopni false czyli true';
    }
 
```