const express = require('express');
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
// const mysql = require('mysql');
const faker = require('faker');
const cors = require ('cors');
const tempData = require ('./tempdata');

// const connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'student',
//   password : 'student',
//   database : 'fec'
// });

// connection.connect();

app.use(cors({}));

app.use('/', express.static(path.join(__dirname, '../public')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '../public/index.html'));
})
/*
app.get('/dbseed', (req, res) => {
  // listingInfo: listingId, liked, address, price, beds, bath
  // listingImages: listingId, imageUrl
  let dropInfoTable = 'DROP TABLE IF EXISTS listingInfo;'
  let dropImageTable = 'DROP TABLE IF EXISTS listingImages;'
  connection.query(dropInfoTable, (error, results, fields) => {
    if (error) throw error;
  });
  connection.query(dropImageTable, (error, results, fields) => {
    if (error) throw error;
  });
  let listingInfoTable = 'CREATE TABLE listingInfo (listingId VARCHAR(120), liked INT(10), address VARCHAR(120), price VARCHAR(120), beds VARCHAR(120), bath VARCHAR(120));'
  let listingImages = 'CREATE TABLE listingImages (listingId VARCHAR(120), ordered INT(10), imgUrl VARCHAR(120));'
  connection.query(listingInfoTable, (error, results, fields) => {
    if (error) throw error;
  });
  connection.query(listingImages, (error, results, fields) => {
    if (error) throw error;
  });

  // https://www.trulia.com/p/ny/new-york/100-w-57th-st-11r-new-york-ny-10019--2172047819?mid=8#lil-mediaTab
  let realImgs = ['https://www.trulia.com/pictures/thumbs_6/zillowstatic/fp/3c9cbedb42b5293b20460cff1bbe2b3a-full.webp', 'https://www.trulia.com/pictures/thumbs_6/zillowstatic/fp/be94ebdea832ec9da1a141344879e85f-full.webp', 'https://www.trulia.com/pictures/thumbs_6/zillowstatic/fp/a75f74e70c459f3a9dc72bef8b2cd081-full.webp', 'https://www.trulia.com/pictures/thumbs_6/zillowstatic/fp/e664f1209b84ad5b06310c7578a17eed-full.webp', 'https://www.trulia.com/pictures/thumbs_6/zillowstatic/fp/a96194e40a652c4b1cd340d8457d39b2-full.webp', 'https://www.trulia.com/pictures/thumbs_6/zillowstatic/fp/ca238a2b1fac43ea0496ef47dc019bc8-full.webp', 'https://www.trulia.com/pictures/thumbs_6/zillowstatic/fp/c571fac97017fafee8412902e212f297-full.webp', 'https://www.trulia.com/pictures/thumbs_6/zillowstatic/fp/047614d57c1a9f3c623808e6724572e2-full.webp', 'https://www.trulia.com/pictures/thumbs_6/zillowstatic/fp/22bc425987f797986536f9de9291d5e7-full.webp']

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
    });

    // LISTING IMAGES
    let randomNum = Math.random() * (20 - 10) + 10;
    for (let u = 0; u < realImgs.length; u++) {
      let image = {
        listingId: info.listingId,
        order: u,
        imgUrl: realImgs[u]
      }
      let insertImage = `INSERT INTO listingImages (listingId, ordered, imgUrl) VALUES ("${image.listingId}", "${image.order}", "${image.imgUrl}");`
      connection.query(insertImage, (error, results, fields) => {
        if (error) throw error;
      });
    }
    if (i === 99) { res.send('Seeding Complete') }
  }
})
*/

app.get('/homes/:id', (req, res) => {
  let id = 'pfs6lipfrs'
  let data = {}
  // console.log()
  res.send(tempData.tempData)
  // let infoQuery = `SELECT * FROM listingInfo WHERE listingId = "${id}"`
  // let imageQuery = `SELECT * FROM listingImages WHERE listingId = "${id}"`
  /*
  let infoQuery = `SELECT * FROM listingInfo`
  new Promise((resolve, reject) => {
    connection.query(infoQuery, (error, infoResults, fields) => {
      if (error) reject(error);
      console.log(infoResults[0])
      data = infoResults[0]
      let imageQuery = `SELECT * FROM listingImages WHERE listingId = "${data.listingId}"`
      connection.query(imageQuery, (error, imageResults, fields) => {
        if (error) reject(error);
        console.log(imageResults)
        data.images = imageResults
        data.imageCount = data.images.length
        resolve(data)
      });
    });
  })
    .then((data) => { res.send(data) })
    .catch((err) => { res.send(err) })
  */
})

const port =  3020;
app.listen(port, () =>  {
  console.log(`Listening on PORT: ${port}`)
})