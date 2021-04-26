# React Login Examples

This repository contains three different login examples (Okta-hosted, Sign-In Widget, and custom login form). Please read [A Quick Guide to React Login Options](https://developer.okta.com/blog/2020/12/16/react-login) to see how it was created.

> [Okta](https://developer.okta.com/) has Authentication and User Management APIs that reduce development time with instant-on, scalable user infrastructure. Okta's intuitive API and expert support make it easy for developers to authenticate, manage and secure users and roles in any application.

* [Getting Started](#getting-started)
* [Links](#links)
* [Help](#help)
* [License](#license)

## Getting Started

To run this example, run the following commands:

```bash
git clone https://github.com/oktadeveloper/okta-react-login-example.git
cd okta-react-login-example
```

### Create the OIDC Application in Okta

Register for a free developer account with the following simple commands using the [Okta CLI](https://github.com/okta/okta-cli), in the project root folder:

You will be prompted to select the following options:
- Type of Application: **2: SPA**
- Redirect URI: `http://localhost:3000/login/callback`
- Logout Redirect URI: `http://localhost:3000`

The application configuration will be printed to your screen:

```shell
Okta application configuration:
Issuer:    https://{okta-issuer}.okta.com/oauth2/default
Client ID: {client-id}
```

Replace the values in `src/App.js` with these values.

```js
const oktaAuth = new OktaAuth({
  issuer: 'https://{yourOktaDomain}/oauth2/default',
  clientId: '{yourClientID}',
  redirectUri: window.location.origin + '/callback'
});
```

You'll also need to update `src/OktaSignInWidget.js` with your client ID.

```js
this.oktaAuth = new OktaAuth({
  issuer: props.baseUrl,
  clientId: '{yourClientID}',
  pkce: true
});
```

Start your app and you should be able to log in.

```shell
npm start
```

This example uses Okta Auth JS and gives you full customization of your login form. The [blog post](https://developer.okta.com/blog/2020/12/16/react-login) also shows how to implement Okta-hosted login and login with the Okta Sign-In Widget.

You can find the code for those in the [`okta-hosted`](https://github.com/oktadeveloper/okta-react-login-example/tree/okta-hosted) and [`sign-in-widget`](https://github.com/oktadeveloper/okta-react-login-example/tree/sign-in-widget) branches.
