import { useState } from "react";
import { message } from "antd";
import * as Realm from "realm-web";

const apiKey =
  "OAMMKo8c2HxLi1DzOgZHuuIGqIY2yypO9sj3eTY29mV0qGYwLiIxGNTecAs7uCDi";
const credentials = Realm.Credentials.apiKey(apiKey);
let app = null;
const useLogin = () => {
  const [realmApp, setRealmApp] = useState(app);
  if (!realmApp) {
    app = new Realm.App({ id: "start-vwuib" });
    app
      .logIn(credentials)
      .then(() => {
        setRealmApp(app);
      })
      .catch((err) => message.error(err));
  }

  return realmApp;
};

export default useLogin;
