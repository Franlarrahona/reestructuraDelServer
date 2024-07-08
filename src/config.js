import path from "path";
import { Command } from "commander";
import dotenv from 'dotenv';


const commandLine = new Command();
commandLine
    .option('--mode <mode>')
    .option('--port <port>')
    .option('--setup <number>')
commandLine.parse();

const clOptions = commandLine.opts();

dotenv.config()

const config = {
    PORT: clOptions.port || 5050,
    SERVER: 'atlas_16',
    DIRNAME: path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:\/)/, '$1')), // Win
    get UPLOAD_DIR() { return `${this.DIRNAME}/public/img` },
    MONGODB_URI: process.env.MONGODB_URI,
    SECRET: process.env.SECRET,
    PRODUCTS_PER_PAGE:10,
}

export default config;