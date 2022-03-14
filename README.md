# Postman Collection for the FreeAgent API

Please refer to the official FreeAgent API docs:
https://dev.freeagent.com/docs

> **IMPORTANT:** postman is available as a web application (https://www.postman.com/) or a desktop application running on Windows, Mac etc. The web application has a different OAuth 2.0 redirect URI to the desktop application. 

### Get Started

1. Create an application using your [FreeAgent Developer Dashboard](https://dev.freeagent.com/). Ensure the following **OAuth redirect URIs** are listed (add them if missing). They can be listed in any order.
- https://developers.google.com/oauthplayground
- https://oauth.pstmn.io/v1/browser-callback
- https://www.getpostman.com/oauth2/callback

    The google URI is not required for this postman collection but if you want to use your application with the [Google OAuth Playground](https://developers.google.com/oauthplayground/) - as described in the [FreeAgent Developer Quick Start](https://dev.freeagent.com/docs/quick_start) - then you need it.

    The `oauth.pstmn.io` URL is required for the postman web application. The last one is required for the postman desktop application. Listing all 3 means you are good for any scenario.

2. Import the FreeAgent collection

3. Import the environment file(s) for sandbox and/or production and/or development (but see [Common Postman Gotchas](#common-postman-gotchas) below). Fill in the environment variables for `client_id`
and `client_secret` from your app (which you created in step 1).

4. Generate access and refresh tokens by:
- right-clicking on the collection > Edit > `Authorization`
- click `Get New Access Token`, signing in with an account for the appropriate environment, then click `Proceed`
- and finally `Use Token`.

#### Common Gotchas
If your attempt to obtain an access token fails with the `"HTTP Basic: Access denied."` error, check your environment file and ensure the `client_id` and `client_secret` are entered correctly and don't contain any trailing whitespace/newline characters.

- FreeAgent App Signup for Production:
  - https://signup.freeagent.com

- FreeAgent App Signup for Sandbox:
  - https://signup.sandbox.freeagent.com

#### Common Postman Gotchas

The web and desktop applications work slightly differently e.g. you right-click items in the desktop app but in the web app you single-click icons.

I think the web application is more usable as it caches the username & password you enter when filling out the application authorization web form, so saving typing. You also get browser developr tools for free!

##### Environment Variables Not Working Correctly

There is an outstanding postman bug where environment variables are not resolved when sending requests:
[Environment variable not being resolved when sending request #6001](https://github.com/postmanlabs/postman-app-support/issues/6001)

There are a number of work-arounds. The simplest is to:
- Import the environment as described above (so you know what variables are defined)
- Create a new environment manually; define the required variables in the new environment
- Delete the imported environment

##### Environment Is INACTIVE By Default

You need to tick the checkbox next to the environment to mark it as **active** so that its variables will be resolved by the Postman collection.


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
