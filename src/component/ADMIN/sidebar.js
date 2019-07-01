import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
class sidebar extends Component {
  render() {
    return (
      <nav id="sidebar" className="sidebar-wrapper">
        <div className="sidebar-content">
          <div className="sidebar-brand">
            <a href="/">pro sidebar</a>
            <div id="close-sidebar">
              <i className="fas fa-times" />
            </div>
          </div>
          <div className="sidebar-header">
            <div className="user-pic">
              <img className="img-responsive img-rounded" src="https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg" alt="User picture" />
            </div>
            <div className="user-info">
              <span className="user-name">Jhon
            <strong>Smith</strong>
              </span>
              <span className="user-role">Administrator</span>
              <span className="user-status">
                <i className="fa fa-circle" />
                <span>Online</span>
              </span>
            </div>
          </div>
          {/* sidebar-header  */}
          <div className="sidebar-search">
            <div>
              <div className="input-group">
                <input type="text" className="form-control search-menu" placeholder="Search..." />
                <div className="input-group-append">
                  <span className="input-group-text">
                    <i className="fa fa-search" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* sidebar-search  */}
          <div className="sidebar-menu">
            <ul>
              <li className="header-menu">
                <span>General</span>
              </li>
              <li className="sidebar-dropdown">
                <Link to="/admin/chart">
                  <i className="fa fa-tachometer-alt" />
                  <span>Biểu đồ</span>
                  <span className="badge badge-pill badge-warning">New</span>
                </Link>
                <div className="sidebar-submenu">
                  <ul>
                    <li>
                      <Link to="/admin/chart">Biểu đồ loại sản phẩm
                    <span className="badge badge-pill badge-success">Pro</span>
                      </Link>
                    </li>
                    <li>
                      <a href="/">Dashboard 2</a>
                    </li>
                    <li>
                      <a href="/">Dashboard 3</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="sidebar-dropdown">
                <Link to="/admin/table">
                  <i className="fa fa-shopping-cart" />
                  <span>Bảng</span>
                  <span className="badge badge-pill badge-danger">3</span>
                </Link>
                <div className="sidebar-submenu">
                  <ul>
                    <li>
                      <a href="/">Products
                  </a>
                    </li>
                    <li>
                      <a href="/">Orders</a>
                    </li>
                    <li>
                      <a href="/">Credit cart</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="sidebar-dropdown">
                <a href="/">
                  <i className="far fa-gem" />
                  <span>Components</span>
                </a>
                <div className="sidebar-submenu">
                  <ul>
                    <li>
                      <a href="/">General</a>
                    </li>
                    <li>
                      <a href="/">Panels</a>
                    </li>
                    <li>
                      <a href="/">Tables</a>
                    </li>
                    <li>
                      <a href="/">Icons</a>
                    </li>
                    <li>
                      <a href="/">Forms</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="sidebar-dropdown">
                <a href="/">
                  <i className="fa fa-chart-line" />
                  <span>Charts</span>
                </a>
                <div className="sidebar-submenu">
                  <ul>
                    <li>
                      <a href="/">Pie chart</a>
                    </li>
                    <li>
                      <a href="/">Line chart</a>
                    </li>
                    <li>
                      <a href="/">Bar chart</a>
                    </li>
                    <li>
                      <a href="/">Histogram</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="sidebar-dropdown">
                <a href="/">
                  <i className="fa fa-globe" />
                  <span>Maps</span>
                </a>
                <div className="sidebar-submenu">
                  <ul>
                    <li>
                      <a href="/">Google maps</a>
                    </li>
                    <li>
                      <a href="/">Open street map</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="header-menu">
                <span>Extra</span>
              </li>
              <li>
                <a href="/">
                  <i className="fa fa-book" />
                  <span>Documentation</span>
                  <span className="badge badge-pill badge-primary">Beta</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fa fa-calendar" />
                  <span>Calendar</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fa fa-folder" />
                  <span>Examples</span>
                </a>
              </li>
            </ul>
          </div>
          {/* sidebar-menu  */}
        </div>
        {/* sidebar-content  */}
        <div className="sidebar-footer">
          <a href="/">
            <i className="fa fa-bell" />
            <span className="badge badge-pill badge-warning notification">3</span>
          </a>
          <a href="/">
            <i className="fa fa-envelope" />
            <span className="badge badge-pill badge-success notification">7</span>
          </a>
          <a href="/">
            <i className="fa fa-cog" />
            <span className="badge-sonar" />
          </a>
          <a href="/">
            <i className="fa fa-power-off" />
          </a>
        </div>
      </nav>
    );
  }
}

export default sidebar;