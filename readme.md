# Stencil-Ionic-Capacitor App

This is an application to demonstrate the use of the capacitor-video-player in a Stencil + Ionic + Capacitor framework

## Getting Started

To start a new project using Stencil, clone this repo to a new directory:

```bash
git clone https://github.com/jepiqueau/test-video-player.git
```

and run:

```bash
npm install
```

To build the app for production, run:

```bash
npx cap update
npm run build
npx cap copy
npx cap copy web
```

To run in IOS:

```
npx cap open ios
```

To run in Android:

```
npm cap open android
```

To run in Web browser

```
npx cap serve
```
