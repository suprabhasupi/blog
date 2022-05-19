---
title: Understand HTTP CORS Request
slug: /78-understand-http-cors-request
date: 2022-04-23
desc: Understand HTTP method OPTIONS which used to execute prior to GET/POST/PUT/DELETE methods.
cover:
  img: ../../../photos/78-understand-http-cors-request.png
banner: ../../banners/78-understand-http-cors-request.png
tags:
  - JS
  - Other
---

import ImgPost from '../../../src/components/imgPost'
import LinkPost from '../../../src/components/linkPost'

<p><span class='first-letter'>Y</span>ou always used HTTP methods like GET/POST/PUT/DELETE, there is one more methods called <mark>OPTIONS</mark> which used to execute prior to GET/POST/PUT/DELETE methods.</p>

## What is CORS 🤔

Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.

## What is Preflight request in CORS? 🤨

Accoridng to <LinkPost name="MDN Docs" href="https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request" />, A CORS preflight request is a CORS request that checks to see if the CORS protocol is understood and a server is aware using specific methods and headers.

It is an <LinkPost href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/OPTIONS
" name="OPTIONS" /> request, using three HTTP request headers: <LinkPost href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Request-Method" name="Access-Control-Request-Method" />, <LinkPost href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Request-Headers" name="Access-Control-Request-Headers" /> , and the <LinkPost href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin" name="Origin" /> header.

 Preflight request automatically issued by browser and frontend devs doesn’t do the options call.

OPTIONS call appears when request is qualified as "to be preflighted".

### How does the Preflight request works?

Before sending a POST request to server, you will ask the server for POST request.
<!-- <LinkPost href="" name="OPTIONS" /> -->
```jsx
OPTIONS /resource/foo
Access-Control-Request-Method: POST
Access-Control-Request-Headers: origin, x-requested-with
Origin: https://foo.bar.org
```

If the server allows it, then it will respond to the preflight request with an <LinkPost href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Methods" name="OPTIONS" /> response header, which lists `POST`:

```jsx
HTTP/1.1 204 No Content
Connection: keep-alive
Access-Control-Allow-Origin: https://foo.bar.org
Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE
Access-Control-Max-Age: 86400
```

Lets take an example, you are working on a blog webiste <LinkPost href="http://blog.suprabha.me" name="blog.suprabha.me" /> and your API is on **api.blog.suprabha.me**. It’s really nice and easy to understand to see the prefix of blog webiste is “api”.

As you can see the the API(**api.blog.suprabha.me**) and the origin( <LinkPost href="http://blog.suprabha.me" name="blog.suprabha.me" />) are different, also the hostname is different. 

<br></br>
<p><mark>Port</mark> and <mark>Protocol</mark> also follow the same logic as hostname. So if there is any differences in hostname, port, protocol request executed on the page will require a CORS request.</p>

<br></br>
If you notice the header `sec-fetch-site` is attached to any XHR request in firefox/chrome browser which will indicate whether this was a same-origin request or not.

Quick example for cross origin request headers:

> Sec-Fetch-Site: cross-site

<p><mark>cross-site</mark> tells the request initiator and the server hosting the resource have a different site.</p>

If you try to write proxy using node or use any services like Cloudfare to proxy your application, which create an alias to the api which routes **api.blog.suprabha.me** to **blog.suprabha.me/api** and moving over the JavaScript clients using the `api.` subdomain will cut your network traffic in half.

### Reference 🧐

- <LinkPost href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-Site" name="Sec-Fetch-Site" />
