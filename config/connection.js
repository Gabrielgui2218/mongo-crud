const mongoose = require('mongoose')

mongoose.set("strictQuery", false)
mongoose.connect('mongodb+srv://Test:tjFNcUzy81pGx38w@cluster0.zo0u04a.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    console.log('Connected to mongoDB;');
}).catch((err) => {
    console.log(err);
})

module.exports = mongoose