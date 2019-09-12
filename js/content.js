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
        res.write("<h1>Téglalap területe és kerülete</h1>");
    }
}
exports.default = Content;
//# sourceMappingURL=content.js.map