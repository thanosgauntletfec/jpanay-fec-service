const express = require('express');
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
const mysql = require('mysql');
const faker = require('faker')

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'fec'
});

connection.connect();

// app.use(express.static('../public'))

app.use('/', express.static(path.join(__dirname, '../public')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '../public/index.html'));
})



app.get('/dbseed', (req, res) => {
  // listingInfo: listingId, liked, address, price, beds, bath
  // listingImages: listingId, imageUrl
  let dropInfoTable = 'DROP TABLE IF EXISTS listingInfo;'
  let dropImageTable = 'DROP TABLE IF EXISTS listingImages;'
  connection.query(dropInfoTable, (error, results, fields) => {
    if (error) throw error;
    // console.log('Results: ', results);
  });
  connection.query(dropImageTable, (error, results, fields) => {
    if (error) throw error;
    // console.log('Results: ', results);
  });
  let listingInfoTable = 'CREATE TABLE listingInfo (listingId VARCHAR(120), liked INT(10), address VARCHAR(120), price VARCHAR(120), beds VARCHAR(120), bath VARCHAR(120));'
  let listingImages = 'CREATE TABLE listingImages (listingId VARCHAR(120), ordered INT(10), imgUrl VARCHAR(120));'
  connection.query(listingInfoTable, (error, results, fields) => {
    if (error) throw error;
    // console.log('Results: ', results);
  });
  connection.query(listingImages, (error, results, fields) => {
    if (error) throw error;
    // console.log('Results: ', results);
  });

  for (let i = 0; i < 100; i++) {
    // LISTING INFO
    let info = {
      listingId: faker.random.alphaNumeric(10),
      liked: faker.random.number(1),
      address: faker.address.streetAddress(),
      price: faker.random.number(4000000),
      beds: faker.random.number(8),
      bath: faker.random.number(4)
    }
    let insertInfo = `INSERT INTO listingInfo (listingId, liked, address, price, beds, bath) VALUES ("${info.listingId}", "${info.liked}", "${info.address}", "${info.price}", "${info.beds}", "${info.bath}")`
    connection.query(insertInfo, (error, results, fields) => {
      if (error) throw error;
      // console.log('Results: ', results);
    });

    // LISTING IMAGES
    let randomNum = Math.random() * (20 - 10) + 10;
    for (let u = 0; u < randomNum; u++) {
      let image = {
        listingId: info.listingId,
        order: u,
        imgUrl: faker.image.animals()
      }
      let insertImage = `INSERT INTO listingImages (listingId, ordered, imgUrl) VALUES ("${image.listingId}", "${image.order}", "${image.imgUrl}");`
      connection.query(insertImage, (error, results, fields) => {
        if (error) throw error;
        // console.log('Results: ', results);
      });
    }
  }
})


app.get('/homes/:id', (req, res) => {
  let id = 'b7jve7muos'
  let data = {}
  let infoQuery = `SELECT * FROM listingInfo WHERE listingId = "${id}"`
  let imageQuery = `SELECT * FROM listingImages WHERE listingId = "${id}"`
  new Promise((resolve, reject) => {
    connection.query(infoQuery, (error, infoResults, fields) => {
      if (error) reject(error);
      data = infoResults[0]
      connection.query(imageQuery, (error, imageResults, fields) => {
        if (error) reject(error);
        data.images = imageResults
        resolve(data)
      });
    });
  })
    .then((data) => { res.send(data) })
    .catch((err) => { res.send(err) })
})


const port =  3000
app.listen(port, () =>  {
  console.log(`Listening on PORT: ${port}`)
})