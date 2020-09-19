const express = require('express')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
const parseJson = require('parse-json');
var userlist=[]


var x=['a','b']
var obj = JSON.parse('{ "name":"John", "age":30, "city":"New York"}');  
var obj2=JSON.parse('{ "name":"John2", "age":302, "city":"New York2"}'); 
obj2.name="peteryuo"

var objarray=[]
objarray.push(obj)
objarray.push(obj2)
app.get('/', (req, res) => {

  var x=userlist[0]

  console.log(x.firstname)

  res.send('Hello NIBM AXIS boyz22!')

})

app.get('/display', (req, res) => {
  console.log("00000000000000000000000000000000000000000000000000000000000000000000000000000000000000")
  var i = 0;;
  var len = userlist.length;
for (; i < len; ) {
  var x=userlist[i]
  console.log(x.firstname)

  i++;
} 
res.send('Hello Display!')

})


app.post('/register', (req, res) => {
  console.log("req recieved")
  console.log(req.body.name)
  x.push(req.body.firstname)
  const firstname=req.body.firstname
  const lastname=req.body.lastname
  var obj2=JSON.parse('{ "name":"firstname","lastname":"lastname"}'); 
  obj2.firstname=firstname
  obj2.lastname=lastname
  userlist.push(obj2)
    res.send('Registered!')
  })
  
  
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})