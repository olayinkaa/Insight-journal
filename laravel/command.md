#
```sh
laravel new appName
php artisan make:migration
php artisan migrate
php artisan tinker
php artisan help make:model
# model and migration
php artisan make:model Post -m
# model, migration, factory
php artisan make:model Post -mf

App\Models\User::factory(100)->create();
App\Models\User::factory()->unverified()->create();

php artisan vendor:publish
```

```sh
php artisan make:factory JobFactory
php artisan make:factory JobListingFactory --model=JobListing
App\Models\Job::factory(100)->create();
```

# Code Sample
```php
$jobs = Job::with('employer')->latest()->simplePaginate(3);
$jobs = Job::with('employer')->get()
```

# Lazy Loading
Refers to the delay of a SQL query until the last possible moment


# Packages
```sh
composer require barryvdh/laravel-debugbar --dev
```

# Research
- difference between lazy loading and eager loading
- Eloquent relationship
- Pivot table