# Spence

### Local Setup

First, cd into your project directory (wherever this is on your machine):

``` 
$ cd Sites/projects
$ git clone git@github.com:laurenpeterson/Spence.git
```
Clone the repo:

``` 
$ git clone git@github.com:laurenpeterson/Spence.git
```
cd into the new project folder: 

```$ cd spence```

Initialize the repo: 

```$ npm install```

### Building the Site

There are two main gulp tasks you can use to build the site: `$ gulp` and `$gulp dev `. The dev task (`gulp dev`), will remove the existing `target` directory, complie all SCSS and files in the `src` directory and sync all files in the `assets` directory into a new `target` directory, as well as watch the `src` directory for changes. The default `gulp` task will do the same thing once without watching. 

