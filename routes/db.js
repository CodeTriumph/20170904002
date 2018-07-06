//db.js
// 连接MySQL
var mysql = require('mysql');
var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Umph2014',
    database: 'nodejs'
});

function query(sql, callback) {
    pool.getConnection(function (err, connection) {
        // Use the connection
        connection.query(sql, function (err, rows) {
            callback(err, rows);
            connection.release();//释放链接
        });
    });
}
exports.query = query;

// CREATE TABLE `person` (
//     `id` int(11) NOT NULL AUTO_INCREMENT,
//     `name` varchar(255) DEFAULT NULL,
//     `age` int(11) DEFAULT NULL,
//     `professional` varchar(255) DEFAULT NULL,
//     PRIMARY KEY (`id`)
// ) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
//
// INSERT INTO `person` (name, age, professional) VALUES ('LiSiXing', '31', 'js77-profession');
// INSERT INTO `person` (name, age, professional) VALUES ('QianLiu', '27', 'js13-profession');
// INSERT INTO `person` (name, age, professional) VALUES ('Zhao', '24', 'js01-profession');
// INSERT INTO `person` (name, age, professional) VALUES ('ZhangJiu', '22', 'js65-profession');
// INSERT INTO `person` (name, age, professional) VALUES ('coder01', '24', 'tt32-profession');
