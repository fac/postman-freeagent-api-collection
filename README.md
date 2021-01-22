# Postman Collection for the FreeAgent API

Please refer to the official FreeAgent API docs:
https://dev.freeagent.com/docs

### Get Started

1. Import the FreeAgent collection

2. Import the environment file(s) for sandbox and/or production. Fill in the environment variables for `client_id`
and `client_secret` from your app, which you can create via our [Developer Dashboard](https://dev.freeagent.com).

  - Make sure to set the OAuth Redirect URI to: `https://www.getpostman.com/oauth2/callback` when creating your app
   on Dev Dashboard.

3. Then generate an access and refresh tokens by:
- right-clicking on the collection > Edit > `Authorization`
- click `Get New Access Token`, signing in with an account for the appropriate environment, then click `Proceed`
- and finally `Use Token`.

#### Common Gotchas
If your attempt to obtain an access token fails with the `"HTTP Basic: Access denied."` error, check your environment file and ensure the `client_id` and `client_secret` are entered correctly and don't contain any trailing whitespace/newline characters.

- FreeAgent App Signup for Production:
  - https://signup.freeagent.com

- FreeAgent App Signup for Sandbox:
  - https://signup.sandbox.freeagent.com

### Refreshing the Access Token Automatically

You can set up a [pre-request script](https://learning.postman.com/docs/postman/scripts/pre-request-scripts/) if you'd like to automate the process of refreshing your access token once it expires. To do this:

- In Postman's left-hand panel, under **Collections**, click on the icon with three dots next to the name of the imported FreeAgent collection
- Select **Edit**
- Open the **Pre-request Scripts** tab and paste in the contents of [auto_refresh_script.js](./auto_refresh_script.js)
- Click **Update** to save
- You'll now have to set up a few environment variables, which you can do by clicking on the eye symbol next to the
environment dropdown in the top-left corner of the Postman app. For each FreeAgent environment you have set up, ensure you have the following variables:

  - `client_id` - your app's OAuth identifier from your Developer Dashboard account
  - `client_secret` - your app's OAuth secret from your Developer Dashboard account
  - `token_url` - token endpoint for the right environment, e.g. `https://api.sandbox.freeagent.com/v2/token_endpoint`
  - `refresh_token` - a valid refresh token for that environment

- Navigate back on the FreeAgent collection **Edit** screen, go to the **Authorization** tab and enter the `{{access_token}}` variable into the **Access Token** field. Click **Update**.

From now on your access token will be refreshed automatically! 🎉

----
##### If you'd like to contribute back to the Collection - please clone the repo, import the collection, make any changes, and export the collection back into the repo folder as 'Collection v2.1'. Then branch off master, push to GitHub and create a Pull Request.
