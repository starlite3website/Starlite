const ws = new require('ws');
const wss = new ws.Server({noServer: true});
const clients = new Set();
http.createServer((req, res) => {
  wss.handleUpgrade(req, req.socket, Buffer.alloc(0), onSocketConnect);
});
ws.onopen = function() {
  ws.send('HI!');
  setTimeout(t, 10000);
}
function t() {
  ws.send("hi");
}
