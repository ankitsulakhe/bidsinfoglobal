import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

class ProfileSidebarPage extends Component {
  render() {
    return (
      <div className="homeLoginMain" id="afterLogin">
        <div className="section-title pb-0">
          <h3>My Profile</h3>
        </div>
        <div className="profileData">
          <div className="account-login-tile">
            <h2>Account Information</h2>
          </div>
          <div className="account-login-Data">
            <div className="account-login-des">
              <i class="bi bi-people"></i> <strong>Name : </strong> Ketan Patel
              ( bts10001)
            </div>
            <div className="account-login-des">
              <i class="bi bi-clock"></i> <strong>Last Login : </strong> 30 May
              2023 10:44:12
            </div>
            <div className="account-login-des">
              <i class="bi bi-award"></i> <strong>Validty : </strong> 10 May
              2023
            </div>
          </div>
        </div>
        <div className="profileData">
          <div className="account-login-tile">
            <h2>My Dashboard</h2>
          </div>
          <div className="account-login-Data">
            <div className="account-login-des">
              <div className="account-login-des">
                <Link to="../ProfilePage" className="visitiPeofile">
                  <i class="bi bi-globe"></i> My Profile
                </Link>
              </div>
              <div className="account-login-des">
                <Link to="../businessProfile" className="visitiPeofile">
                  <i class="bi bi-globe"></i> My Business Profile
                </Link>
              </div>
              <div className="prosLink">               
                <i class="bi bi-globe"></i>
                <a className="visitiPeofile">Tender</a>
              </div>
              <div className="prosLink">               
                <i class="bi bi-globe"></i>
                <a className="visitiPeofile">Project</a>
              </div>
              <div className="prosLink">               
                <i class="bi bi-globe"></i>
                <a className="visitiPeofile">Contract Awards</a>
              </div>
              <div className="prosLink">                
                <Link to="../passwordChange" className="visitiPeofile">
                  <i class="bi bi-globe"></i> Password
                </Link>
              </div>
              <div className="prosLink">               
                <i class="bi bi-globe"></i>
                <a className="visitiPeofile">Subscription </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ProfileSidebarPage;
