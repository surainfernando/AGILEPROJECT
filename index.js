const express = require('express')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
//const parseJson = require('parse-json');
var userlist=[]// list of registerd usrs




var user1=JSON.parse('{"firstname":"Lio","lastname":"siva","id":"200234567V","address":"AZ","email":"lio@ss.mm","password":"passLio"}')//hardcode registerd user
userlist.push(user1) //hardcode registerd user
app.get('/', (req, res) => {

  var x=userlist[0]

  console.log(x.firstname)

  res.send('Hello NIBM AXIS boyz22!')

})

app.get('/display', (req, res) => { // when http://localhost:3000/display enterd in browser browser display list of registerd users 
  console.log("00000000000000000000000000000000000000000000000000000000000000000000000000000000000000")
  var i = 0;;
  var len = userlist.length;
for (; i < len; ) {
  console.log("---------------------------------------------------------------")
  var x=userlist[i]
  console.log(x.firstname)
  console.log(x.lastname)
  console.log(x.email)
  console.log(x.address)
  console.log(x.id)
  console.log(x.password)


  i++;
} 
res.send(userlist)

})


app.post('/register', (req, res) => {

  const firstname=req.body.firstname
  const lastname=req.body.lastname
  var obj2=JSON.parse('{ "lastname":"lastname","email":"email","password":"password","id":"id","address":"address"}'); 
  obj2.firstname=firstname
  obj2.lastname=lastname
  obj2.email=req.body.email
  obj2.address=req.body.address
  obj2.id=req.body.id
  obj2.password=req.body.password
  
  userlist.push(obj2)
    res.send('Registered!')
  })

  app.post('/login', (req, res) => {
    const email=req.body.email
    console.log(email)
    const password=req.body.password
    console.log(password)
    var i = 0;;
    var len = userlist.length;
  for (; i < len; ) {
    var x=userlist[i]
    if(x.email===email)
    { x.status="success"
      if(x.password===password)
      { res.send(x)}
      else{res.send({"status":"fail","reason":"passwordwrong"})}
      
    }
    console.log("fno email")
    i++
  }

    
      res.send({"status":"fail","reason":"emailwrong"})
    })
  
  
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})




//useless
// var x=['a','b']
// var obj = JSON.parse('{ "name":"John", "age":30, "city":"New York"}');  
// var obj2=JSON.parse('{ "name":"John2", "age":302, "city":"New York2"}'); 
// obj2.name="peteryuo"

// var objarray=[]
// objarray.push(obj)
// objarray.push(obj2)