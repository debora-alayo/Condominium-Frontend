import { BrowserRouter as Router, HashRouter, Route } from 'react-router-dom';

import Home from "../pages/Home";


function Routes() {
  return (
    <HashRouter>
      <Route exact path="/" component={Home} />
    </HashRouter>
  );
}

export default Routes();
