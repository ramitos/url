# url

## install

```bash
npm install [--save/--save-dev] ramitos/url
```

## example

```js
var url = require('url')

console.log(JSON.stringify(url.parse('192.168.1.2:4324'), null, 2))
```

```json
{
  "protocol": null,
  "slashes": true,
  "auth": null,
  "host": "192.168.1.2:4324",
  "port": "4324",
  "hostname": "192.168.1.2",
  "hash": null,
  "search": null,
  "query": null,
  "pathname": "/",
  "path": "/",
  "href": "192.168.1.2:4324/"
}
```

## license

MIT