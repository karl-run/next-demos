# Problemer med flere pods og statiske filer

### Standard flyt med bare èn pod

```mermaid
sequenceDiagram
    Browser->>+Pod: Document GET (text/html)
		Pod->>-Browser: 200 OK, index.html: <br/> bundle-abc.js <br/> style-abc.css
		Browser->>+Pod: GET bundle-abc.js
		Browser->>+Pod: GET style-abc.css
		Pod->>-Browser: bundle-abc.js: 200 OK, application/javascript
    Pod->>-Browser: style-abc.css: 200 OK, text/css

```

### Flyt med ny og gammel pod

```plain
Gammel pod:
/bundle-abc.js
/style-abc.js

Ny pod:
/bundle-xyz.js
/style-xyz.js
```


```mermaid
sequenceDiagram
    Browser->>+Old Pod: Document GET (text/html)
		Old Pod->>-Browser: 200 OK, index.html: <br/> bundle-abc.js <br/> style-abc.css
		Browser->>+New Pod: GET bundle-abc.js
		Browser->>+Old Pod: GET style-abc.css
		New Pod-x-Browser: bundle-abc.js: 404 Not Found
		Note over Old Pod: the request for bundle.abc.js failed because the request<br/> was routed to the new pod that only has bundle.xyz.js
    Old Pod->>-Browser: style-abc.css: 200 OK, text/css
```


### Happy path med CDN og ny og gammel pod

```plain
CDN:
/bundle-abc.js
/style-abc.js
/bundle-xyz.js
/style-xyz.js
```

```mermaid
sequenceDiagram
    participant Browser
    participant Old Pod
    participant New Pod
    participant CDN
    Browser->>+Old Pod: Document GET (text/html)
		Old Pod->>-Browser: 200 OK, index.html: <br/> bundle-abc.js <br/> style-abc.css
		Browser->>+CDN: GET bundle-abc.js
		Browser->>+CDN: GET style-abc.css
		CDN-x-Browser: bundle-abc.js: 200 OK, application/js
    CDN->>-Browser: style-abc.css: 200 OK, text/css

```
