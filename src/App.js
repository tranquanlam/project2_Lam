import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";

import Contact from './component/common/contact/contact'
import Headers from './component/common/header/header'
import RouterPage from './component/page/router/routerpage'


function App() {
  return (
    <Router>
      <Contact></Contact>
      <Headers></Headers>
      <RouterPage/>
    </Router>
  );
}

export default App;
