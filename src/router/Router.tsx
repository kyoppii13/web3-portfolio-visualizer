import { FC, memo } from "react";
import { Route, Switch } from "react-router-dom";
import { Header } from "../components/Header";
import { Home } from "../components/Home";

export const Router: FC = memo(() => {
  return (
    <Switch>
      <Route exact path="/">
        <Header />
        <Home />
      </Route>
    </Switch>
  );
});
