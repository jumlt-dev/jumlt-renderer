import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';


export function activate(context: vscode.ExtensionContext) {
	console.log('Active');

	context.subscriptions.push(vscode.commands.registerCommand('jumlt-renderer.newuml', () => {
		try {
			const panel = vscode.window.createWebviewPanel(
				"jumlt-renderer",
				"Jumlt Editor",
				vscode.ViewColumn.One,
				{}
			);

		//ty ViníciusPJ (https://stackoverflow.com/users/2180607/vin%c3%adciuspj)
		const filePath: vscode.Uri = vscode.Uri.file(path.join(context.extensionPath, 'src', 'webview.html'));
		panel.webview.html = fs.readFileSync(filePath.fsPath, 'utf8');

		} catch(e) {
			console.log((e as Error).message)
			const panel = vscode.window.createWebviewPanel(
				"jumlt-renderer",
				"Jumlt Editor",
				vscode.ViewColumn.One,
				{}
			);

			panel.webview.html = errorwebview()
		}
	}));

	/*
	context.subscriptions.push(vscode.commands.registerCommand('jumlt-renderer.importuml', () => {

	}));
	*/
}

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
	</html>`
}

export function deactivate() {}


