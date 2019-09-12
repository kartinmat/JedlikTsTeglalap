"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
class Content {
    content(req, res) {
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
        9;
        res.write("</head>");
        res.write("<body>");
        res.write("<h1>Téglalap területe és kerülete</h1>");
        res.write("</body>");
        res.write("</html>");
    }
}
exports.default = Content;
//# sourceMappingURL=content.js.map