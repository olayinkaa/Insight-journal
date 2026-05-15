## nginx.conf
```nginx
http  {
    <!-- types {
        text/css css
        text/html html
    }  -->

    include mime.types;

    upstream backendserver {
        server 127.0.0.1:1111
        server 127.0.0.1:2222
        server 127.0.0.1:3333
    }

    server {
        listen 8080;
        root  /Users/olayinka/Desktop/mysite;  

        location /fruits {
            root  /Users/olayinka/Desktop/mysite;  
        }
        
        location / {
            proxy_pass http://backendserver
        }

        location /carbs {
            alias  /Users/olayinka/Desktop/mysite;  
        }

        rewrite ^/number/(\w+) /count/$1;

        location ~* /count/[0-9] {
            root  /Users/olayinka/Desktop/mysite;  
            try_files /index.html=404
        }

        location /vegetables {
            root  /Users/olayinka/Desktop/mysite;  
            try_files /vegetables/veggies.html /index.html = 404
        }

        location /crops {
            return 307 /fruits
        }
    }
}
```

## nginx reload
```shell
nginx -s reload
```````