React Native code challenge for iOS and Android which call to a API which returns the JSON.

Build Install both watchman and node using Brew

brew install node brew install watchman Install React Native CLI

npm install -g react-native-cli Clone and run project packager.

git clone https://github.com/mobcoder-shyama/MJackson cd MJackson npm start Open another terminal window (don't close packager terminal). And run project at device (Xcode >= 8 required).

Building an app for testing at the device requires using the Release scheme in Xcode.

Product → Scheme → Edit Scheme (cmd + <), make sure you're in the Run tab from the side, and set the Build Configuration dropdown to Release

react-native run-ios

