# Tombola Bingo Strip Technical Test

This is a solution to the Tombola Javascript test.

## 3rd party libraries

The only runtime dependency is React.js, which is used for view rendering. I considered simply generating the markup directly, however in a real world context a library or framework such as React or Angular would be used so it seemed appropriate for this use case.

## Platform support

The app has been tested against Chrome 42 and IE 11. Additional responsive layouts have been provided for a variety of mobile devices, however testing has been restricted to device emulation in Chrome. 

## Building the code

1. Ensure that [NodeJS](http://nodejs.org/) is installed.
2. From the project folder, execute the following commannd:

```shell
npm install
```
	
3. To build a non-minified version of the app in the `build` folder: 

```shell
npm run build-dev
```
    
4. To build a minified version of the app in the `dist` folder: 
   
```shell
npm run build-prod
```
      
## Running the tests

Jasmine unit tests are provided for the core classes. To run:

```shell
npm run test
```

To run JSHint:

```shell
npm run lint
```
        