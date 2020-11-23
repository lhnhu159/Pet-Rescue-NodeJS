const stripe = require('stripe')('sk_test_51HHmDmGPGP9AJh1XTjiEkrl36Pu0LkfugHZ4zMRLUrgjwdDh5NAMQmaxX2tOuuwR55fn1Nj5RbWiz5gZRHuR18am000Pbfduxm');
exports.stripeCreate = async(request, response, next) => {
        var money = Math.round(Math.round(request.body.money, 2) * 100);
        stripe.charges.create({
            amount: money,
            currency: 'USD',
            description: request.body.mota,
            source: request.body.token
        }, (error, charge) => {
            if (error) {
                next(error);
            }
            response.json({ success: true, message: "Thanh toan thanh cong" })
        })
        console.log(request.body);
    }
    //var money = Math.round(Math.round(request.body.money, 2) * 100);