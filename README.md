# Avila Trading Official Website

## File Structure

```
- /application
-----+ /component
----------+ component.module.js
----------+ component.controller.js
----------+ component.template.html
----------+ component.scss
----------+ component.component.js
----------+ component.config.js
----------+ component.service.js
----------+ component.factory.js
----------+ component.model.js
-----+ avila.module.js
-----+ avila.config.js
-----+ avila.scss
-----+ index.html
- /test
-----+ test.config.js
-----+ component
----------+ component.component.test.js
----------+ component.controller.test.js
----------+ component.service.test.js
----------+ component.factory.test.js
- bower.json
- gulpfile.js
- package.json
- README.md
```

## CLI

### Project Setup

- `npm install` to set up the project
- `npm run uninstall` to reset the project

### Build Application

- `npm run pack` to build the web application into `dist` folder

### Development

- `npm run pack` to package the application into `dist` folder
- `npm run clean` to delete build folders
- `npm run start` to run the application on a web browser, on localhost:8080
- `npm run test` to run unit tests
- `npm run check` to check syntax and format error
- `npm run check:fix` to automatically fix syntax error

## Documentation Reference

- [AngularJS Guide](https://docs.angularjs.org/guide)
- [AngularJS API Documentation](https://docs.angularjs.org/api)
