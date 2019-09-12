﻿import * as fs from "fs";
import * as http from "http";
import * as path from "path";

export default class Content {

    public content(req: http.IncomingMessage, res: http.ServerResponse): void {
        // favicon.ico kérés kiszolgálása:
        if (req.url === "/favicon.ico") {
            res.writeHead(200, { "Content-Type": "image/x-icon" });
            fs.createReadStream("favicon.ico").pipe(res);
            return;
        }

        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<!DOCTYPE html>");
        res.write("<html lang = 'hu'>");
        res.write("<head>");
        res.write("<title>TeglalapTK</title>");

        const a: number = 5; // 64 bites lebegőpontos
        const b: number = 5;

        res.write("</head>");


        res.write("<body>");
        res.write("<h1>Téglalap területe és kerülete</h1>");
        res.write(`<h2>a=${a}</h2>`);

        res.write("</body>");

        res.write("</html>");

    }
}
