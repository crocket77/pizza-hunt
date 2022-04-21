const router = require('express').Router();
const commentRoutes = require('./comment-routes');
const pizzaRoutes = require('./pizza-routes');

router.use('/comments', commentRoutes);
// add prefix of `/pizzas` to routes created in `pizza-routes.js`
router.use('/pizzas', pizzaRoutes);

module.exports = router;


// {
//     "pizzaName": "The Demo Pizza",
//     "createdBy": "Lernantino",
//     "size": "Large",
//     "toppings": [
//         "Sausage",
//         "Pepperoni",
//         "Ricotta",
//         "Hot Peppers"
//     ]
// }

// {
//     "writtenBy": "Amiko",
//     "commentBody": "This pizza sounds great, but best pizza ever seems like a stretch."
// }