// Refresh the Access Token if it expired
let tokenTimestamp = pm.variables.get("oauth_timestamp");
let tokenDate = Date.parse(tokenTimestamp);

if (!tokenDate) {
  tokenDate = new Date(2020, 5, 14);// set tokenDate to an arbitrary date in the past to ensure token is refreshed if the "oauth_timestamp" variable isn't set
}

let expiresInTime = pm.variables.get("expires_in");
if (!expiresInTime) {
  expiresInTime = 300000; // Set default expiration time to 5 minutes
}

if ((new Date() - tokenDate) >= expiresInTime) {
  const refreshAccessTokenRequest = {
    url: pm.variables.get("token_url"),
    method: 'POST',
    header: 'Accept:application/json',
    body: {
      mode: 'urlencoded',
      urlencoded: [
        { key: "client_id", value: pm.variables.get("client_id"), disabled: false },
        { key: "client_secret", value: pm.variables.get("client_secret"), disabled: false },
        { key: "refresh_token", value: pm.variables.get("refresh_token"), disabled: false },
        { key: "grant_type", value: 'refresh_token', disabled: false }
      ]
    }
  };
  pm.sendRequest(refreshAccessTokenRequest, function (err, res) {
    if (err) {
      console.error(err)
      return;
    }

    if (res.code == 200) {
      const response = res.json()
      pm.environment.set("access_token", response.access_token);
      pm.environment.set("refresh_token", response.refresh_token);
      pm.environment.set("expires_in", (response.expires_in * 1000));
      pm.environment.set("oauth_timestamp", new Date());
    } else {
      console.error("Ensure you have the client_id, client_secret, token_url and refresh_token set as environment variables.")
    }
  });
}
