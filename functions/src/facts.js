"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fetch_ = require("isomorphic-fetch");
// This is needed for rollup
let fetch = fetch_;
function getFacts() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch("https://non-ssr-react.firebaseio.com/facts.json");
        return res.json();
    });
}
exports.default = getFacts;
//# sourceMappingURL=facts.js.map