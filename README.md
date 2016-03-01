# hexo-test-url_for

test hexo helper [url_for](https://hexo.io/docs/helpers.html#url-for).

## issue

hexo version 3.2.0

when config.root = "/a/b/c/";

then url_for("/archives") ==> "/a/b/c/archives"


## file version

* url_for.3.2.0.js <=> [hexo 3.2.0](https://github.com/hexojs/hexo/blob/3.2.0/lib/plugins/helper/url_for.js)
* url_for.js <=> fix version


## how to test

### clone

``` sh
$ git clone https://github.com/samwhelp/hexo-test-url_for.git
```

### change dir

``` sh
$ cd hexo-test-url_for
```

### prepare

``` sh
$ npm install
```

### test

``` sh
$ ./app.js
```
or

``` sh
$ node app.js
```

or

``` sh
$ npm start
```
