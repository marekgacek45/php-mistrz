---
sidebar_position: 3
---


# Typy Danych


PHP jest językiem typowanym dynamicznie co oznacza, że nie ma potrzeby określania typu zmiennej, ponieważ zostanie ona określona w czasie wykonywania.
Oprócz tego jest słabo typowany co oznacza, że typ może się zmienić w trakcie. Wystarczy przypisać do niego wartość innego typu.

Typ zmiennej możemy sprawdzić za pomocą funkcji **gettype()** gdzie jako argument przekazujemy nazwę zmiennej bądź funkcji  **var_dump()** - jako argument również podajemy nazwę zmiennej. Ta funkcja oprócz informacji o typie zwraca nam ogólnie wszystkie inforamcje jakie o niej posiada.

```jsx
$name = 'Pimpek';
echo gettype($name); //string
echo var_dump($name); // string(6) "Pimpek"
```

PHP obsługuje 8 różnych typów danych które są podzielone na trzy kategorie:

## Typy Proste:

### String
czyli ciąg znaków.

```jsx 
$dog_name = 'Pimpek';
echo gettype($dog_name); //string
```

Stringi możemy zapisywać zarówno w cudzysłowach pojedyńczych jak i podwójnych. W pojedyńczym cudzysłowie wszystko jest traktowane jako ciąg znaków, czyli jeżeli umieścisz tam nazwę zmiennej ona i tak zostanie przeczytana jako po prosu tekst a nie zmienna.

```jsx
$name = 'Pimpek';
$dog_name = 'Mój piesek ma na imię $name';
echo $dog_name; // 'Mój piesek ma na imię $name'
```

Natomiast w podwójnym możemy napisać jakąś zmienną, a PHP przeanalizuje nasz tekst i wyświetli adekwatną treść. Zmienną można po prostu napisać lub co jest nieco lepszą praktyką opakować ją w wąsy co czyni kod bardziej czytelnym.

```jsx
$name = 'Pimpek';
$dog_name = "Mój piesek ma na imię $name";
$dog_name = "Mój piesek ma na imię {$name}";
echo $dog_name; // Mój piesek ma na imię Pimpek
```

### Bollean 
czyli wartość logiczna true lub false.

```jsx
$is_admin = false;
$is_logged = true;
echo gettype($is_admin) // boolean
```

### Integer
czyli liczby całkowite zarówno dodatnie jak i ujemne

```jsx
$age = 32;
$sum = -2;
echo gettype($sum) // integer
```

### Float ( zwany również double)
czyli liczba zmiennoprzecinkowa. Pamiętajcie, że chodź nazwa jest sugestywna cześć całkowitą od dziesiętnej oddzielamy kropką.

```jsx
$total = 12.45;
echo gettype($total) // double
```

## Typy Złożone:

### Obiekty
jest to instancja klasy. Może ona zawierać właściwości oraz metody. Temat zostanie rozwinięty w późniejszym terminie.

```jsx
class dog{
    public $name;
    public $age;
    public function showInfo(){
        return "Piesek nazywa się {$this->name} i ma {$this->age}";
    }
};
$my_dog = new Dog();
echo gettype($my_dog) //object;
```

### Tablice
zmienna która może przechowywać wiele wartości, można to poniekąd nazwać zbiorem. Wartości mogą być dowolnego typu, można do nich uzyskać dostęp za pomocą indeksu bądź klucza. Ten temat również zostanie rozwinięty w późniejszym czasie.

```jsx
  $array = ['string', 2, 3.23, false, 'string'];
    echo gettype($array); //array
```

## Typy Specjalne

### Null
czyli brak wartości

```jsx
 $nullable = null;
    echo gettype($nullable); // NULL
```

### Resource 
nie jest rzeczywistym typem danych ale specjalną zmienną która służy do przechowywania odwołań do zasobów zewnętrznych. Zasoby są tworzone i używane przez specjalne funkcje. Przykładem może być zasób reprezentujący otwarte połączenie z bazą danych lub plikiem.
