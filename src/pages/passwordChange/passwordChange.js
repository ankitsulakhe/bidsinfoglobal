import React, { Component } from "react";
import ProfileSidebarPage from "../ProfileSidebar/ProfileSidebarPage";
class passwordChange extends Component {
  render() {
    return (
      <div>
        <section className="breadcrumbs">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <h2>Password</h2>
              <ol>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>Password</li>
              </ol>
            </div>
          </div>
        </section>
        <main className="bodyMain">
          <section className="profileInner">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-8 signupPagePadding">
                  <div className="homeLoginMain">
                    <div className="section-title pb-0">
                      <h3>Ketan Patel - Password</h3>
                    </div>
                    <div className="mainBoxLogin commonBoxShadow" id="loginBox">
                      <div className="section-title-p text-center loginBox">
                        <form
                          method="post"
                          role="form"
                          className="php-email-form"
                        >
                          <p className="wid100 textLeft">Password Reset</p>
                          <div className="d-flex flex-wrap signupflex">
                            <div className="form-group mb-40 wid-50">
                              <label>Old Password </label>
                              <input
                                 type="text"
                                 className="form-control"
                                 name="text"
                                 id="text"
                                 placeholder="Your Old Password"
                                 required=""
                              />
                            </div>
                            <div className="form-group mb-40 wid-50">
                              <label>New Password</label>
                              <input
                                type="text"
                                className="form-control"
                                name="text"
                                id="text"
                                placeholder="Your New Password"
                                required=""
                              />
                            </div>
                          </div>                         
                          <div className="flex_Btn_div">
                          <div className="text-center">
                              <button className="commonBtn resetBtn">
                                Cancel
                              </button>
                            </div>
                            <div className="text-center">
                              <button className="commonBtn loginBtn">
                                Submit
                              </button>
                            </div>                         
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 bg-grey">
                  <ProfileSidebarPage></ProfileSidebarPage>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}
export default passwordChange;
