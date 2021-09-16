# Fix android build related with react-native-zeroconf
![image](https://user-images.githubusercontent.com/89775457/133527590-815142eb-8504-4d16-a0a9-558194a58605.png)

> If you met above issue during build of android, go to
  node_modules/react-native-zeroconf/android/build.gradle
  and change line 46 from 'rx2dnssd', version: '0.9.13' -> '0.9.15'

### Basic testing
  1. Server running: [node server.ts]
  2. Run android/ios app

    
