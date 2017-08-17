"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
function App(props) {
    const items = props.facts.map((fact, i) => {
        return React.createElement("li", { key: i }, fact.text);
    });
    return (React.createElement("ul", null,
        " ",
        items,
        " "));
}
exports.default = App;
//# sourceMappingURL=App.js.map