import './Products.scss';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { DATA } from './DATA';
import { Fragment } from 'react';
const KEY = 'rzp_test_ijgl7waWIynzAU';
const IMAGE = '/fsn.png';

const Products = () => {
    const loadRazorPay = async (url) => {
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = url;

            script.onload = () => {
                resolve(true);
            }
            script.onerror = () => {
                resolve(false);
            }
            document.body.appendChild(script);
        })
    }
    const handlePayment = async (item) => {
        const res = await loadRazorPay('https://checkout.razorpay.com/v1/checkout.js');
        if (!res) {
            alert('You are offline or there might be some temporary issue.');
            return;
        }

        const options = {
            key: KEY,
            currency: "INR",
            amount: item.buttonText * 100,
            name: 'Fullstacknest Shop',
            description: item.cardTitle,
            image: IMAGE,
            handler: function (response) {
                console.log(response);
                alert("Payment Successfull. Don't worry its not deducted from your account..")
                // alert(response.razorpay_payment_id);
                // alert(response.razorpay_order_id);
                // alert(response.razorpay_signature)
            },
            prefill: {
                name: 'Customer Testing',
                email: 'customertesting@gmail.com',
                contact: '987456310'
            }
        }
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }
    return (
        <Fragment>
            <h3 className='mt-2 mb-3'>Our Available Products</h3>
            <div className='d-flex flex-wrap gap-4'>
                {DATA.map((item) => (
                    <Card className='product-card' key={item.id}>
                        <Card.Img variant="top" src={item.imageURL} />
                        <Card.Body>
                            <Card.Title>{item.cardTitle}</Card.Title>
                        </Card.Body>
                        <Card.Footer>
                            <b>Buy at just </b>
                            <Button className='pay-btn' onClick={() => handlePayment(item)} variant={item.buttonClass}>Rs. {item.buttonText}</Button>
                        </Card.Footer>
                    </Card>
                ))}
            </div>
        </Fragment>
    )
}

export default Products