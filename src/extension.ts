import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('Active');

	context.subscriptions.push(vscode.commands.registerCommand('jumlt-renderer.newuml', () => {
		const panel = vscode.window.createWebviewPanel(
			"jumlt-renderer",
			"Jumlt Editor",
			vscode.ViewColumn.One,
			{}
		);

		panel.webview.html = require("./webview.html")
	}));

	/*
	context.subscriptions.push(vscode.commands.registerCommand('jumlt-renderer.importuml', () => {

	}));
	*/
}

export function deactivate() {}
