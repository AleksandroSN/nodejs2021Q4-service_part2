# Task 3. Simple CRUD API
## Description https://github.com/rolling-scopes-school/basic-nodejs-course/blob/master/descriptions/simple-crud-api.md

## To work with the command line you must :

1. Have NodeJS version 15+
2. git clone
3. git checkout dev
4. npm i
## Build

1. For dev mod use
```bash
npm run start:dev
```
2. For prod mode use
```bash
npm run start:prod
```
## Usage example:

For check work use Postman or something else.<br>
URL: 
```bash
localhost:6464
```
![](https://i.ibb.co/sCKpJ3x/nodeCrud.png)
Endpoints:
1. "/" - root level, methods GET. A welcome message will be sent
2. "/person" , methods GET, POST.
3. "/person/:id", methods GET, PUT, DELETE - for :id use only uuid format
4. "/delete", methods DELETE. Clear inmemory db;
## Tests:
For tests use the build command above.
Then run tests with next commands :

1. View test coverage percentage 
```bash
npm run coverage
```

2. Test individual file
```bash
npm run test server.js
```