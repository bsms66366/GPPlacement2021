import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { Button } from 'react-native';

WebBrowser.maybeCompleteAuthSession();

// Endpoint
const discovery = {
  authorizationEndpoint: 'http://192.168.1.59:8000/nova/login',
  tokenEndpoint: 'http://192.168.1.59:8000/api/sanctum/token',
  revocationEndpoint: 'https://login.uber.com/oauth/v2/revoke',
};

export default function App() {
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: 'CLIENT_ID',
      scopes: ['profile', 'delivery', 'email', 'offline_access'],
      redirectUri: makeRedirectUri({
        scheme: 'http://192.168.1.59:8000/nova/login'
        }),
    },
    discovery
  );

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { code } = response.params;
      }
  }, [response]);

  return (
    <Button
      disabled={!request}
      title="Login"
      onPress={() => {
        promptAsync();
        }}
    />
  );
}
