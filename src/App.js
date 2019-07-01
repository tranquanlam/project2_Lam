import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import RouterPage from './component/page/router/routerpage'
import { connect } from 'react-redux'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iduser: ''
    }
  }
  componentDidMount() {
    this.setState({
      iduser: this.props.dbUser.id
    })
  }
  
  render() {
    var showView = <RouterPage />;
    return (
      <Router>
        {showView}
      </Router>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    dbUser: state.AcountReducer
  }
}
export default connect(mapStateToProps)(App);
