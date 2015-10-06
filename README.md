#ES6 Webpack React Boilerplate
A little example how to use and build ES6 and React
Common ideas:
* write JavaScript code in ES6 syntax
* store JavaScript files in *.es6 
* convert es6>es5 via babel
* provide development server with hot code reloading
* provide build tools

##Installation and running in dev mode
1. Install dependencies
	```sh
	$ npm install
	```
3. Observe via browser
	```sh
	$ npm run devServer
	```
	then visit localhost:8086
	
##Creating build artifact
	```sh
	$ npm run build
	```
	then You can find 'build' folder with just created application. 
	You can check it, just make it available for web server 
	```sh
	$ cd build
	$ python -m SimpleHTTPServer 8082
	```
	then visit localhost:8082 to see build of Your application. 