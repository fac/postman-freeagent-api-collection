# Postman Collection for the FreeAgent API

Please refer to the official FreeAgent API docs:
https://dev.freeagent.com/docs

### Get Started
Import the FreeAgent collection, then import the environments.

Fill in the environment variables for `client_id` and `client_secret` from your app, which you can create via our Developer Dashboard:


- Developer Dashboard for Production & Sandbox: 
  - Make sure to set the OAuth Redirect URI to: `https://www.getpostman.com/oauth2/callback`
  - https://dev.freeagent.com


Then authorise by
- going to a request, for example `Company Details`
- clicking the `Auth` tab, the link to the authorization helper `FreeAgent`
- Ensure `OAuth 2.0` is selected as the type
- then `Get New Access Token`, and fill in this information:
```
Token Name: Your Token Name
Grant Type: Authorization Code
Callback URL: https://www.getpostman.com/oauth2/callback
Auth URL: {{url}}/v2/approve_app
Access Token URL: {{url}}/v2/token_endpoint
Client ID: {{client_id}}
Client Secret: {{client_secret}}
Scope: -
State: -
Client Authentication: Send as Basic Auth Header
````

- and finally `Request Token`, signing in with an account for the appropriate environment.


- FreeAgent App Signup for Production:
  - https://signup.freeagent.com

- FreeAgent App Signup for Sandbox:
  - https://signup.sandbox.freeagent.com

----
##### If you'd like to contribute back to the Collection - please clone the repo, import the collection, make any changes, and export the collection back into the repo folder as 'Collection v2.1'. Then branch off master, push to GitHub and create a Pull Request.
