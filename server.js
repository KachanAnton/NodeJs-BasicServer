var port = 4080;
var server = require('./basic_server/basic_server').createServer();
server.userFavIcon('localhost', "./public/favicon.png");
server.addContainer(".*", "/l/(.*)$", require('./redirector', {}));
server.docroot('localhost', "/", "./views");
require('./http_sniffer').sniffOn(server);
server.listen(port);
