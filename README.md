# RNPokeBattle
A two-player Pokemon battle game implemented with React Native and Pusher

### Prerequisites

- React Native development environment or [Expo](https://expo.io/)
- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/en/)
- [Expo account](https://expo.io/)
- Expo [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en) or [iOS client app](https://itunes.apple.com/us/app/expo-client/id982107779?mt=8)
- [Pusher app instance](https://pusher.com)
- [Ngrok account](https://ngrok.com/)


## Getting Started

1. Clone the repo:

```
git clone https://github.com/anchetaWern/RNPokeBattle.git
```

2. Install the app dependencies:

```
cd RNPokeBattle
yarn install
```

3. Update Pusher config on `src/screens/TeamSelectionScreen.js` file:

```
componentDidMount() {
    this.pusher = new Pusher("YOUR PUSHER APP KEY", {
      authEndpoint: "YOUR_NGROK_URL/pusher/auth",
      cluster: "YOUR PUSHER APP CLUSTER",
      encrypted: true
    });
}
```

4. Install the server dependencies:

```
cd server
npm install
```

5. Update the `.env` file:

```
APP_ID=YOUR_PUSHER_APP_ID
APP_KEY=YOUR_PUSHER_APP_KEY
APP_SECRET=YOUR_PUSHER_APP_SECRET
APP_CLUSTER=YOUR_PUSHER_APP_CLUSTER
PORT=3000
```


6. Run the server:

```
node server.js
```

7. [Download ngrok executable file](https://dashboard.ngrok.com/get-started).

8. Expose server using ngrok:


```
./ngrok authtoken YOUR_NGROK_AUTH_TOKEN
./ngrok http 3000
```

9. Copy the ngrok https URL and update the `authEndpoint` in the `src/screens/TeamSelectionScreen.js` file.

10. Run the app and open it in your Expo client app:

```
expo start
```


## Built With

* [React Native](http://facebook.github.io/react-native/)
* [Pusher Channels](https://pusher.com)
