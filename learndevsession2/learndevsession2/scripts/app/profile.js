// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ProfileDetails = (function (_super) {
    __extends(ProfileDetails, _super);
    function ProfileDetails() {
        _super.apply(this, arguments);
    }
    ProfileDetails.prototype.render = function () {
        var inputClass = " hidden";
        var pClass = "";
        if (!this.props.isReadOnly) {
            inputClass = "";
            pClass = " hidden";
        }
        return (React.createElement("div", null, React.createElement("div", null, React.createElement("label", null, "Courses"), React.createElement("p", {"className": "form-control-static" + pClass}, this.props.coursesCount), React.createElement("input", {"type": "text", "className": "form-control" + inputClass, "defaultValue": this.props.coursesCount.toString(), "onChange": this.props.coursesOnChange})), React.createElement("div", null, React.createElement("label", null, "Articles"), React.createElement("p", {"className": "form-control-static" + pClass}, this.props.articlesCount), React.createElement("input", {"type": "text", "className": "form-control" + inputClass, "defaultValue": this.props.articlesCount.toString(), "onChange": this.props.articlesOnChange}))));
    };
    return ProfileDetails;
})(React.Component);
var ProfileButtons = (function (_super) {
    __extends(ProfileButtons, _super);
    function ProfileButtons() {
        _super.apply(this, arguments);
    }
    ProfileButtons.prototype.render = function () {
        var editClass = "";
        var saveCancelClass = " hidden";
        if (!this.props.isReadOnly) {
            editClass = " hidden";
            saveCancelClass = "";
        }
        return (React.createElement("div", {"className": "row profile-buttons"}, React.createElement("div", {"className": "col-md-6"}), React.createElement("div", {"className": "col-md-6"}, React.createElement("button", {"className": "btn btn-block btn-primary" + editClass, "onClick": this.props.editClick}, "Edit")), React.createElement("div", {"className": "col-md-6"}, React.createElement("button", {"className": "btn btn-block btn-danger" + saveCancelClass, "onClick": this.props.cancelClick}, "Cancel")), React.createElement("div", {"className": "col-md-6"}, React.createElement("button", {"className": "btn btn-block btn-primary" + saveCancelClass, "onClick": this.props.saveClick}, "Save"))));
    };
    return ProfileButtons;
})(React.Component);
var Profile = (function (_super) {
    __extends(Profile, _super);
    function Profile() {
        _super.apply(this, arguments);
        this.state = {
            isReadOnly: true,
            coursesCount: this.props.initialCoursesCount,
            articlesCount: this.props.initialArticlesCount
        };
    }
    Profile.prototype.editClickHandler = function (e) {
        this.setState({
            isReadOnly: false
        });
    };
    Profile.prototype.saveClickHandler = function (e) {
        this.setState({
            isReadOnly: true,
            articlesCount: this.intermArticlesCount,
            coursesCount: this.intermCoursesCount
        });
    };
    Profile.prototype.cancelClickHandler = function (e) {
        this.setState({
            isReadOnly: true,
            articlesCount: this.state.articlesCount,
            coursesCount: this.state.coursesCount
        });
    };
    Profile.prototype.articlesOnChangeHandler = function (e) {
        var detailInput = e.target;
        this.intermArticlesCount = parseInt(detailInput.value);
    };
    Profile.prototype.coursesOnChangeHandler = function (e) {
        var detailInput = e.target;
        this.intermCoursesCount = parseInt(detailInput.value);
    };
    Profile.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", {"className": "profile-details"}, React.createElement(ProfileDetails, {"coursesCount": this.state.coursesCount, "articlesCount": this.state.articlesCount, "isReadOnly": this.state.isReadOnly, "articlesOnChange": function (e) { return _this.articlesOnChangeHandler(e); }, "coursesOnChange": function (e) { return _this.coursesOnChangeHandler(e); }}), React.createElement(ProfileButtons, {"isReadOnly": this.state.isReadOnly, "editClick": this.editClickHandler.bind(this), "saveClick": function (e) { return _this.saveClickHandler(e); }, "cancelClick": function (e) { return _this.cancelClickHandler(e); }})));
    };
    return Profile;
})(React.Component);
ReactDOM.render(React.createElement(Profile, {"initialArticlesCount": 10, "initialCoursesCount": 20}), document.getElementById("profileNode"));
//# sourceMappingURL=profile.js.map