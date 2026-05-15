# TUTORIAL
```shell
# help list
php -h
php -S localhost:8888
```
```php
<?= $message ?>
<?php echo $message; ?>

<ul>
    <?php foreach($books as $book){
        echo "<li>$book</li>";
    }
    ?>
</ul>

```

```php
$url = parse_url($urlPath)
$filteredBook = array_filter($books, function($book){
    return $book["releaseYear"] >= 2005
})

<ol>
	<?php foreach ($books as $book) : ?>
			<li> <?= $book ?> </li>
	<?php endforeach; ?>
</ol>

// 
function dd($val){
    echo "<pre";
    var_dump($val);
    echo "</pre";
    die();
}

var_dump($_SERVER["REQUEST_URI"]);

dd($_SERVER);

var_dump($book)
// ternary operator
<?php echo $_SERVER["REQUEST_URI"] ? "bg-red-500" : "bg-green-500" ?>
```

# lambda function
```php
$filterByAuthor = function($books, $author){
    $filteredBooks = [];
    foreach($books as $book){
        $filteredBooks = $book;
    }
    return $filteredBooks;
}

$filteredBooks = $filterByAuthor($books, "Ibrahim Olayinka")
```

```php

require 'partials/head.php'
require 'function.php'

$uri = parse_url($_SERVER['REQUEST_URI']['path']);

$routes = [
    '/' => 'controllers/index.php',
    '/about' => 'controllers/about.php',
    '/contact' => 'controllers/contact.php',
];

function abort($code = 404){
    http_response_code($code)
    require("view/{$code}.php")
    die()
}

if(array_key_exists($uri)){
    require $route[$uri]
} else {
    abort()
}

require 'partials/footer.php'

```

```php
// PHP Data Object
class Person {

    public $name;
    public $age;

    public function breathe(){
        return $this->name. "is breathing"
    }
}

$person = new Person();
$person->name = "Ibrahim Olayinka"
$person->breathe()
```