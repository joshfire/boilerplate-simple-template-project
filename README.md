#Simple Joshfire Factory template boilerplate

This Boilerplate is intended to be used to create a simple template for the Joshfire Factory.

## What's in the boilerplate

 - the Joshfire framework
 - a commented minimal example app (with template options, splashscreen addon, datasources)
 - build scripts (SASS, log removal, JS minification, duplication to the master branch)

## How to use it

 - clone the boilerplate repository
 - execute `npm install` in this clone folder (this will init and fetch the Joshfire Framework submodule, and perform a npm install on it)

##  Git organisation
You should use two git branches:

 - the `master` branch is the last stable build
 - the `dev` branch is were you develop and break things. When it stable, build and copy to master (there are scripts for that)

## Limitations of this Boilerplate
- no view garbage collection and dynamic view creation