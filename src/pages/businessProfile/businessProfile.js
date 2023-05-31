import React, { Component } from "react";
import ProfileSidebarPage from "../ProfileSidebar/ProfileSidebarPage";
import { MultiSelect } from 'primereact/multiselect';

class businessProfile extends Component {
  render() {
    return (
      <div>
        <section className="breadcrumbs">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <h2>Business Profile Page</h2>
              <ol>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>Business Profile Page</li>
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
                      <h3>Ketan Patel - Business Profile Page</h3>
                    </div>
                    <div className="mainBoxLogin commonBoxShadow" id="loginBox">
                      <div className="section-title-p text-center loginBox">
                        <form
                          method="post"
                          role="form"
                          className="php-email-form"
                        >
                          <p className="wid100 textLeft">Business Details</p>
                          <div className="d-flex flex-wrap signupflex">
                            <div className="form-group mb-40 wid-50">
                              <label>Company Name </label>
                              <input
                                type="text"
                                name="companyName"
                                className="form-control"
                                id="companyName"
                                placeholder="Your company Name"
                                required=""
                              />
                            </div>
                            <div className="form-group mb-40 wid-50">
                              <label>Key Contacts</label>
                              <input
                                type="text"
                                className="form-control"
                                name="keycontact"
                                id="keycontact"
                                placeholder="Your Key Contacts"
                                required=""
                              />
                            </div>
                            <div className="form-group mb-40 wid-50">
                              <label>Telephone No</label>
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
                              <label>Official Email</label>
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
                              <label>Fax</label>
                              <input
                                type="number"
                                className="form-control"
                                name="Fax"
                                id="Fax"
                                placeholder="Your Phone No"
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
                            <div className="form-group mb-40 wid-50">
                              <label>Strength of the employees</label>
                              <select
                                class="form-control customInput customInputIcon"
                                id="select1"
                                name="type"
                              >
                               <option value="0">Select Strength of the employees</option>
                                <option value="1-50">1-50</option>
                                <option value="50-100">50-100</option>
                                <option value="100-250">100-250</option>
                                <option value="250 and above">250 and above</option>
                              </select>
                            </div> 
                            <div className="form-group mb-40 wid-100">
                              <label>Industry Type</label>                            
                             <div className="indTextFlex">
                                <label><input type="checkbox" name="industype[]" class="industype" value="Services"/>Services</label>
                                <label><input type="checkbox" name="industype[]" class="industype" value="Goods"/>Goods</label>
                                <label><input type="checkbox" name="industype[]" class="industype" value="Works"/>Works</label>
                              </div>
                            </div>
                            <div className="form-group mb-40 wid-100">
                              <label>Business Area</label>
                              <textarea rows="4"  className="form-control"
                                name="areaofoperation"
                                id="areaofoperation">
                                </textarea>
                            </div>
                            <div className="form-group mb-40 wid-100">
                              <label>Establishment details</label>
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
export default businessProfile;
