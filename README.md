#Simple template boilerplate

##  Git organisation
You should use two git branches:

 - the `master` branch is the last stable build
 - the `dev` branch is were you develop and break things. When it stable, build and copy to master (there are scripts for that)

## What's in the boilerplate

 - the Joshfire framework
 - a commented minimal app
 - a commented example app (with template options, splashscreen addon, datasources)
 - build scripts (SASS, log removal, JS minification, duplication to the master branch)

## How to use it

 - create a new repository
 - copy the content of `boilerplate/` or `sample-app`.
 - replace `app/js/lib/framework` with a git submodule
 - edit `package.json`

