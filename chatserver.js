net = require('net');
var sockets = [];
var s = net.createServer(function(socket) {	
	sockets.push(socket);

	socket.on('data',function(data) {
		console.log(data.toString('ascii'));
		for(var i=0 ; i < sockets.length ; i++)
			sockets[i].write(data);
		});
	
	socket.on('end',function() {
		var i = sockets.indexOf(socket);
		sockets.splice(i,1);
		});
	});

	s.listen(8000);
	