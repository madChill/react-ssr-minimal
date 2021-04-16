# minimal react server side rendering

## Quick Overview

This is a minimal project for server side rendering with React js.

### Server Rendering

React component is rendered before sending to client in HTML for the first time.

### Stack & How they work

We use Express js for serve and route the server effect before fill up those data to React Component on server side

## Usage

clone the repository then:

`npm install` or `yarn install`

`npm run dev` (to start the server development mode)

`npm run build` (to build the code)

`npm run prod` (to run the code production after build)

## Explanation

For development mode we get run is `bin/dev.js` and then initiates 'server.js' in /src folder

## Routing and Server side effect before render.

For server side, to server side effect we use express router, middleware.
After get context Data from express middleware, we'll create init store and provide to React App.
We use React router dom to client side and render content server side after express middleware is done.

If you want to create a side effect like a get data from third party api or from data base,
it just create new server middleware in folder /helpers/server/[name]

in /helpers/server/getListUsers.js

```javascript
export default (req, res, next) => {
    return axios.get(api + '/todo').then((resp) => {
        req.SSRData = {
            error: null,
            data: resp.data
        };
        next();
    });
};
```

add above middleware to route you want to ssr. /helpers/server/index.js

```javascript
router.use(route.USERS, getListUsers);
```

or

```javascript
router.use('/home', getListUsers);
```

We'll bind those data to redux Store or you can use Content api to bind to component React.
in there we chose redux store.

in src/appStore.js

```javascript
return createStore(
    // all reducers
    combineReducers({
        [key.HOME]: homeReducer
    }),
    { [key.HOME]: SSRData }
);
```

in component React, connect to redux store.

```javascript
const Home = (props) => {
    const homeData = props[key.HOME];
    return (
        <div>
            <ul>
                {homeData.data &&
                    homeData.data.map((e) => <li key={e.name}>{e.name}</li>)}
            </ul>
        </div>
    );
};
export const mapStateToProps = (state) => {
    return {
        [key.HOME]: state[key.HOME]
    };
};

const withConnect = connect(mapStateToProps);
export default withConnect(Home);
```
