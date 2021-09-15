# Fix android build related with react-native-zeroconf

> If you met below issue during build of android, go to
  node_modules/react-native-zeroconf/android/build.gradle
  and change line 46 from 'rx2dnssd', version: '0.9.11' -> '0.9.13'

### Basic testing
  1. Server running: [node server.ts]
  2. Run android/ios app

    