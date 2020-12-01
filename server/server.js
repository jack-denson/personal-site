const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"))

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
  console.log("Page served")
});

app.listen(8080, () => {
  console.log('Listening on 8080')
})
