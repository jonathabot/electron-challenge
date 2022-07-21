import { app, BrowserWindow, ipcMain } from "electron"
import isDev from "electron-is-dev"
import path from "path"
import url from "url"
const mongoose = require('mongoose')

const productionUrl = path.resolve(__dirname, "../renderer/index.html")

const appUrl = isDev
  ? "http://localhost:3000"
  : url.format({
    pathname: productionUrl,
    protocol: "file:",
    slashes: true
  })


async function run() {
  mongoose.connect('mongodb://localhost:27017/electronchallenge')
  const Produto = mongoose.model('Produto', { 
    nome: String,
    id: Number,
    obs: String,
    valor: String, 
  })

  ipcMain.on('novoNomeProduto', async (e, args) => {
    const produto = new Produto({ 
      nome: args.nome, 
      id: args.id, 
      obs: args.obs, 
      valor: args.valor,
    })
    produto.save();
    const produtoCriado = await Produto(args);
    e.reply('novo-produto-criado', JSON.stringify(produtoCriado));
    console.log(produtoCriado);
  })

  ipcMain.on('mostrarProdutos', async (e, args) => {
    const produtos = await Produto.find();
    e.reply('mostrarProdutos', JSON.stringify(produtos))
  })

  const mainWindow = new BrowserWindow({
    width: 800,
    maxWidth: 800,
    minWidth: 800,
    height: 500,
    maxHeight: 500,
    minHeight: 500,
    autoHideMenuBar: false,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true
    }
  })
  await mainWindow.loadURL(appUrl)
  mainWindow.show()
}

app.whenReady().then(run)