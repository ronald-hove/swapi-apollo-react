# React + GraphQL

<h3>This is a demo react and apollo graphql full stack app that consumes the swapi</h3>


- Front-end demo: https://swapi-react.web.app/


# React App Installation & Usage
- The react app is already pointing to a backend deployed to heroku so no config is required 
- clone repo and run

```txt
   cd swapi-react-client
```
- then

```txt
    npm i && npm run start
```

# Server 

- The server is written in express using typescript (check tsconfig)
- ensure nodejs >=10 is installed
- .env is included in repo, it does not have any sensitive information
- clone repo and run 
```txt
    npm i 
```
- then
```txt
    npm run dev
```
- to build and transpile ts to js run
```txt
    npm run build 
```
- output dir is dist
- navigate to http://localhost:3000/graphql

# Sample GraphQl query

```ts
query GetPeople ($url: String) {
    people (url: $url) {
        count
        next
        previous
        results {
            name
            height
            mass
            gender
            homeworld_name
            url
        }
    }
}
```



