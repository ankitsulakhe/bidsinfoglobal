import React, { Component } from "react";
import ProfileSidebarPage from "../ProfileSidebar/ProfileSidebarPage";
class ProfilePage extends Component {
  render() {
    return (
      <div>
        <section className="breadcrumbs">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <h2>Profile Page</h2>
              <ol>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>Profile Page</li>
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
                      <h3>Ketan Patel - Profile View</h3>
                    </div>
                    <div className="mainBoxLogin commonBoxShadow" id="loginBox">
                      <div className="section-title-p text-center loginBox">
                        <form
                          method="post"
                          role="form"
                          className="php-email-form"
                        >
                          <p className="wid100 textLeft">Personal Details</p>
                          <div className="d-flex flex-wrap signupflex">
                            <div className="form-group mb-40 wid-50">
                              <label>Name </label>
                              <input
                                type="text"
                                name="name"
                                className="form-control"
                                id="name"
                                placeholder="Your Name"
                                required=""
                              />
                            </div>
                            <div className="form-group mb-40 wid-50">
                              <label>Email ID</label>
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Your Email"
                                required=""
                              />
                            </div>
                            <div className="form-group mb-40 wid-50">
                              <label>Phone No</label>
                              <input
                                type="number"
                                className="form-control"
                                name="number"
                                id="number"
                                placeholder="Your Phone No"
                                required=""
                              />
                            </div>
                            <div className="form-group mb-40 wid-50">
                              <label>Email</label>
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Your Email"
                                required=""
                              />
                            </div>
                          </div>
                          <p className="wid100 textLeft">Organization Details</p>
                          <div className="d-flex flex-wrap signupflex">
                            <div className="form-group mb-40 wid-50">
                              <label>Organization name*</label>
                              <input
                                type="text"
                                className="form-control"
                                name="organizationName"
                                id="organizationName"
                                placeholder="Your Organization name"
                                required=""
                              />
                            </div>
                            <div className="form-group mb-40 wid-50">
                              <label>Address*</label>
                              <input
                                type="text"
                                className="form-control"
                                name="organizationAddress"
                                id="organizationAddress"
                                placeholder="Your Organization Address"
                                required=""
                              />
                            </div>
                            <div className="form-group mb-40 wid-50">
                              <label>City*</label>
                              <input
                                type="text"
                                className="form-control"
                                name="city"
                                id="city"
                                placeholder="Your Organization Address"
                                required=""
                              />
                            </div>
                            <div className="form-group mb-40 wid-50">
                              <label>Location*</label>
                              <input
                                type="text"
                                className="form-control"
                                name="Location"
                                id="Location"
                                placeholder="Your Organization Address"
                                required=""
                              />
                            </div>
                            <div className="form-group mb-40 wid-50">
                              <label>Pin / Zip Code</label>
                              <input
                                type="url"
                                className="form-control"
                                name="websiteUrl"
                                id="websiteUrl"
                                placeholder="Your website url"
                                required=""
                              />
                            </div>
                            <div className="form-group mb-40 wid-50">
                              <label>Country</label>
                              <select
                                class="form-control customInput customInputIcon"
                                id="select1"
                                name="type"
                              >
                                <option value="" selected disabled>
                                  Country
                                </option>
                                <option value="Africa">Africa </option>
                                <option value="UAE">UAE</option>
                                <option value="India">India</option>
                              </select>
                            </div>                            
                            <div className="form-group mb-40 wid-50">
                              <label>Telephone No</label>
                              <input
                                type="url"
                                className="form-control"
                                name="TelephoneNo"
                                id="TelephoneNo"
                                placeholder="Your website url"
                                required=""
                              />
                            </div>
                            <div className="form-group mb-40 wid-50">
                              <label>Website url</label>
                              <input
                                type="url"
                                className="form-control"
                                name="websiteUrl"
                                id="websiteUrl"
                                placeholder="Your website url"
                                required=""
                              />
                            </div>
                            <div className="form-group mb-40 wid-100">
                              <label>Product & Services</label>
                              <textarea rows="4"  className="form-control"
                                name="productServices"
                                id="productServices">
                                </textarea>
                            </div>
                            <div className="form-group mb-40 wid-100">
                              <label>Area of Operation:(City, State, Country from where Business Opportunities and infomation is required)*</label>
                              <textarea rows="4"  className="form-control"
                                name="areaofoperation"
                                id="areaofoperation">
                                </textarea>
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
export default ProfilePage;
