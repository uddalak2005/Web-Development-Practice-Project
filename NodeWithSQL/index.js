const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "instagram"
})

// const q = "DESCRIBE users;";

// try{
//     connection.query(q,(err, results) => {
//         if(err) throw err;
//         console.log(results);
//     })
// }catch(err){
//     console.log(err);
// }

// const query = "INSERT INTO users(id, name, email, user_id, followers, following) VALUES (?,?,?,?,?,?)";
// const data=[
//     189,
//     faker.person.firstName(),
//     faker.internet.email(),
//     11189556,
//     202,
//     100
// ];

// try{
//     connection.query(query, data, (err,results) => {
//         if(err) throw err;
//         console.log(results);
//     });
// }catch(err){
//     console.log(err);
// }

const q1 = "select * from users;";

try {
    connection.query(q1, (err, results) => {
        if (err) throw err;
        console.log(results);
    });
} catch (err) {
    console.log(err);
}


//bulk insert

// let getRandomUser = () => {
//     return [
//         Math.floor(Math.random() * 100000) + 1,
//         faker.person.firstName(),
//         faker.internet.email(),
//         Math.floor(Math.random() * 100000) + 1,
//         Math.floor(Math.random() * 10000) + 1,
//         Math.floor(Math.random() * 10000) + 1,
//     ];
// }

// let data = [];
// for(let  i = 1; i <= 100; i++){
//     data.push(getRandomUser());
// }

// const q2 = "INSERT INTO users VALUES ?";
// try{
//     connection.query(q2, [data], (err, results) => {
//         if(err) throw err;
//         console.log(results);
//     });
// }catch(err){
//     console.log(err);
// }
connection.end();