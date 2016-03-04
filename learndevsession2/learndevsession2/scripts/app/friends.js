// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
    ///<reference path="../../typings/react/react-global.d.ts" />
    var Friend = (function (_super) {
        __extends(Friend, _super);
        function Friend() {
            _super.apply(this, arguments);
        }
        Friend.prototype.render = function () {
            return (React.createElement("div", {"className": "friend clearfix"}, React.createElement("div", {"className": "clearfix"}, React.createElement("div", {"className": "friend-initials img-circle pull-left"}, this.props.initials), React.createElement("h4", {"className": "pull-right "}, this.props.name)), React.createElement("div", {"className": "friend-details text-right"}, React.createElement("div", null, this.props.coursesCount, " courses taken"), React.createElement("div", null, this.props.articlesCount, " articles reviewed"))));
        };
        return Friend;
    })(React.Component);
    exports.Friend = Friend;
    var Friends = (function (_super) {
        __extends(Friends, _super);
        function Friends() {
            _super.apply(this, arguments);
            this.state = {
                data: this.props.data
            };
        }
        Friends.prototype.updateData = function (newData) {
            this.setState({
                data: newData
            });
        };
        Friends.prototype.render = function () {
            var friendsList = [];
            this.state.data.forEach(function (friendItem, idx) {
                friendsList.push(React.createElement(Friend, {"key": friendItem.id, "name": friendItem.name, "initials": friendItem.initials, "coursesCount": friendItem.coursesCount, "articlesCount": friendItem.articlesCount}));
            });
            return (React.createElement("div", null, friendsList));
        };
        return Friends;
    })(React.Component);
    exports.Friends = Friends;
});
//# sourceMappingURL=friends.js.map