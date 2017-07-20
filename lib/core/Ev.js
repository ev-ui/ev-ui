"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    dialogs: [],
    showDialog: function showDialog(props) {
        this.dialogs.push(props);
    },
    hideDialog: function hideDialog() {}
};