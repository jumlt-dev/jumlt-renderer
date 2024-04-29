"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = __importStar(require("vscode"));
function activate(context) {
    console.log('Active');
    context.subscriptions.push(vscode.commands.registerCommand('jumlt-renderer.newuml', () => {
        try {
            const panel = vscode.window.createWebviewPanel("jumlt-renderer", "Jumlt Editor", vscode.ViewColumn.One, {});
            panel.webview.html = require("./webview.html");
        }
        catch (e) {
            console.log(e.message);
            const panel = vscode.window.createWebviewPanel("jumlt-renderer", "Jumlt Editor", vscode.ViewColumn.One, {});
            panel.webview.html = errorwebview();
        }
    }));
    /*
    context.subscriptions.push(vscode.commands.registerCommand('jumlt-renderer.importuml', () => {

    }));
    */
}
exports.activate = activate;
function errorwebview() {
    return `<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Jumlt Editor</title>
	</head>
	<body>
		<img src="https://http.cat/images/500.jpg">
	</body>
	</html>`;
}
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map