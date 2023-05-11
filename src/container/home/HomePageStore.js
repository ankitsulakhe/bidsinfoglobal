import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import api from "../../store/cms/cmsApis";
// import { getCmsRecords } from "../../store/cms/cmsSlice-";

const mapStateToProps = (state) => {
    return {
        home_page: api.endpoints.getHomePageData.select({ type: "home_page" })(state),
        auth_record: api.endpoints.getAuthRecord.select({ type: "auth_record" })(state),
    }
}

const mapDispatch = {
    getHomePageData: api.endpoints.getHomePageData.initiate,
    getAuthRecord: api.endpoints.getAuthRecord.initiate,
};

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(mapDispatch, dispatch);

const Store = (Container) =>
    connect(mapStateToProps, mapDispatchToProps)(Container);

export default Store;