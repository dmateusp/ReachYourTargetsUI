# reach-your-targets ViewsDX React app

This is reach-your-targets running on viewsdx.com React app.

## 🤓 Pre-requisites
### NodeJS

If you're on Linux or Mac. Run the following in your terminal:
```
# install "n" to manage node versions
curl -0 -L https://npmjs.com/install.sh | sudo sh

# install the latest node
n latest
```

If you're on Windows, download the latest installer from https://nodejs.org/en and run it.
[Here's an amazing guide if you run into
trouble](http://blog.teamtreehouse.com/install-node-js-npm-windows).

### Install your app's dependencies

Go to your app's main directory and run:

```
npm
```

That will install all it needs to run. It may take a bit the first time. Be patient 🙃 .

## ⛏ Running your app

```
npm start
```

## 🎨 Developing your app

The file `src/index.js` has everything you need to get started.

While you're running `viewsdx`, your Views will be automatically synced to `src/views`.
You can use them like: `import MyView from 'views/MyView.js'`.
We've also imported the props tab as a JSON file for your convenience. Use it like `import
myViewData from 'views/MyView.json'`.

## 🎉 Deploying your app

Deploying is an important part of building for your app!
We want to help you deploy as often as possible, so you can get out there and share your results.
For that, we've included an integration with https://now.sh, which has a free tier to deploy your
apps in a very easy way. Just run:

```
npm run deploy
```

and watch it happen ;).

We aren't affiliated to them in any way, we just think it's a cool service and wanted to share it
with you.
Of course you aren't tied to it by any means. Running `npm run build` creates a `build` folder
with your latest app that would work on any web server.

## Help ⁉️ 
Have any questions? Join us on https://slack.viewsdx.com. @tom and @dario are there to help 👋 .

Made with 💚 at viewsdx.com.
