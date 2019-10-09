import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "../HomePage/Homepage";
import ForSalePage from "../Features/ForSalePage/index";
import LazMallPage from "../Features/LazMallPage/index";

const index = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/onsale" exact component={ForSalePage} />
        <Route path="/lazmallpage" exact component={LazMallPage} />
      </Switch>
    </React.Fragment>
  );
};

export default index;
