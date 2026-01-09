# loop of jobs
```php
@foreach ($jobs as $job)
    <li>{{$job['title']}}</li>
@endforeach
```

# Name Slot
```blade
<x-slot:heading>
    Job Listing
</x-slot>
```