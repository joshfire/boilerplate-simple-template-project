#Simple Joshfire Factory template boilerplate

This Boilerplate is intended to be used to create a simple template for the Joshfire Factory.

## What's in the boilerplate

 - the Joshfire framework
 - a commented minimal example app (with template options, splashscreen, datasources)
 - build scripts (SASS, log removal, JS minification, HTML file generation)

## How to use it

 - clone the boilerplate repository
 - execute `npm install` in the cloned folder (this will init and fetch the Joshfire Framework submodule, and perform a npm install on it)

## Limitations of this Boilerplate
- no view garbage collection and dynamic view creation ; this example is meant to treat simple cases. As such, it takes some liberties with memory management : creation of every possible views from the start and no dealocation.

## Architecture

Below is a rough diagram of the architecutre of the app and its rationale.

```
   +--------------------+                                                      +--------------------+
   |Main App Controller |                                                     +|DS Controllers      |
   |--------------------|                                                    +||--------------------|
   |- initViews         |       MAC creates and retains the n DSC            |||- onNavigate        |
   |- initControllers   +--------------------------------------------------->|||- onNavigateDetails |
   |- initRouter        |                                                    |||- getView           +
   |- showItem          |                                                    |||- getDetailsView    +
   |- showItemDetails   |                                                    |||--------------------|
   |--------------------| Creates                                    Uses    |||+ id                |
   |+ router            +--------+                                 +-------->|||+ name              |
   |+ controllers []    |        |                                 |         |||+ slug              |
   |+ staticViews {}    |        |        +----------------+       |         |||+ view              |
   +-------------+------+        |        | Router         |       |         |||+ detailsView       |
                 |               |        |----------------|       |         |||+ index             |
                 |               |        |+ setRoutes     |       |         |||+ datasource        |
                 |               |        |- navigate      |       |         ||+--------------------+
                 v               +------->|                +-------+         |+--------------------+
          +------------+                  |                |                 +--------------------+
          |            |                  |                |                    |                |
          | Layout     |                  +----------------+             +------------+   +------------+
          |            |                                                 |+------------+  |+------------+
          +-+--------+-+                                                 ||            |  ||            |
            |        |                                                   || ListViews  |  || DetailViews|
 +----------v--+   +-v----------+                                        +|            |  +|            |
 |             |   |            |                                         +-----+------+   +-----+------+
 | Toolbar     |   | CardPanel  |               Parent View                     |                |
 |             |   |            +-----------------------------------------------+----------------+
 +-------------+   +------------+
```
`Done with asciiflow.com`

The point here is to be MVC friendly. Although it is not actual MVC (What is, anyway ?), the components of the app should be separated well enough for the architecture to be extensible pretty easily.

#### Main App Controller (MAC)
This is the base object of the app ; it reprensents the app as a whole and can be seen as the "main.c" of the app. Its most significant job is to create and link all the major components of the apps.

During its initialization, it calls initViews which creates and retains all of the static views of the app (that is, views which will likely not move or change) such as the main app Layout, the Toolbar and the main CardPanel (which in turn will contain all of the dynamical views). It then sets the Toolbar and Cardpanel as children of the layout and leaves it at that for now.

Once this is done, it will attempt to create all of the DS controllers. To do this, the MAC seeks access to the Joshfire object (and should be the only one to do so) to get the datasources of the app. As of today, it expects to work with a multiple datasource. For each child datasource, the MAC will create a new DS Controller.

Finally, it also creates, retains and initializes the Router of the app.

After initialization, its only job is to ask the layout or cardpanel to update themselves (show another child view, for instance).

#### DS Controllers
The DS Controllers are key components of the app. Each of them represents a Datasource and contains (or at least should) everything that is needed to handle said datasource. They are created by the MAC and are given a DS at their creation. They are also given an a name (given by the user on the Factory) and a slug (a readable, URL-ready representation of that name). This slug is used throughout the app to identify each controller and select it. The slug is guaranteed to be session-unique.

Soon after its creation, the MAC will ask all of the DSC to create and provide their views. According to the @outputtype of each datasource, its controller can create and return different views which fit the type better. There are two such methods : getView and getDetailsView wich correspond to the "Synthesis" and "detail" states that our data usually employs. Adding other methods of the same nature should be trivial.

As we'll see it again in the Router part, each DSController is responsible for the routes associated with its datasources. The slug that we've seen previously are used as routes. For instance, let's say someone ends up on `#1-youtube` ; the router will ask the DSC which is identifiable by the very same slug to execute its `onNavigate` method as the corresponding route. If the user ends up on `#1-youtube/0`, it should execute the DSC's `onNavigateDetails` method as the route ; which should recycle the controllers' details view and display it.

