var mysql = require('mysql'); //调用MySQL模块
//数据库名
const DATABASE_NAME = 'chatroom';

//创建连接池
var pool = mysql.createPool({
	host: '127.0.0.1', //主机
	user: 'root', //MySQL认证用户名
	password: 'root', //MySQL认证用户密码
	port: '3306', //端口号
	//debug: true,
	database: DATABASE_NAME,
	waitForConnections: true, //当连接池没有连接或超出最大限制时，设置为true且会把连接放入队列，设置为false会返回error
	connectionLimit: 10
});


exports.getRecords = function(handle) {
	var records = [];　　
	console.log('getRecords');
	pool.query('SELECT * from chatrecord', function(err, rows, fields) {
		if (err) throw err;
		for (var i in rows) {
			records.push(rows[i]);
		}
		handle(records);
	});

};
//插入
exports.insertRecord = function(record, handle) {
	console.log('insertRecord');
	pool.query('INSERT INTO chatrecord(nickname, saytime, content, remark) values( ?,?,?,? )',
			 [record.nickname, record.saytime, record.content,  record.remark ], 
			 function(err, rows, fields) {
		if (err) throw err;
		handle();
	});

};
