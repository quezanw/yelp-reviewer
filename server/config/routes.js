const controller = require('../controller/restaurants');
const path = require('path');

module.exports = function(app) {
    app.get('/api', controller.home);
    app.get('/api/:id', controller.view);
    app.post('/api', controller.create);
    app.put('/api/:id', controller.update);
    app.put('/api/review/:id', controller.createReview);
    app.delete('/api/:id', controller.delete);

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("../public/dist/public/index.html"))
    });
}