// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
    var Item = (function (_super) {
        __extends(Item, _super);
        function Item() {
            _super.apply(this, arguments);
        }
        Item.prototype.getRating = function () {
            if (this.props.rating === 0)
                return "n/a";
            else
                return this.props.rating.toFixed(1);
        };
        Item.prototype.render = function () {
            return (React.createElement("div", {"className": "record"}, React.createElement("div", {"className": "record-details"}, React.createElement("a", {"href": "{this.props.href}", "className": "record-title"}, this.props.title), React.createElement("div", {"className": "record-comment"}, this.props.description)), React.createElement("div", {"className": "record-rating"}, this.getRating())));
        };
        return Item;
    })(React.Component);
    exports.Item = Item;
    var Items = (function (_super) {
        __extends(Items, _super);
        function Items() {
            _super.apply(this, arguments);
            this.state = {
                data: []
            };
        }
        Items.prototype.updateData = function (updatedData) {
            this.setState({
                data: updatedData
            });
        };
        Items.prototype.render = function () {
            var itemsList = [];
            this.state.data.forEach(function (item, idx) {
                itemsList.push(React.createElement(Item, {"key": item.id, "title": item.title, "description": item.description, "rating": item.rating, "href": item.href}));
            });
            return (React.createElement("div", null, itemsList));
        };
        return Items;
    })(React.Component);
    exports.Items = Items;
});
//# sourceMappingURL=items.js.map