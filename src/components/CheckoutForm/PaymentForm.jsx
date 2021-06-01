import React from 'react'
import { Typography, Button, Divider } from "@material-ui/core";
import { Elements, CardElement, ElementsConsumer } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js"
import Review from "./Review.jsx"


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)


const PaymentForm = ({ checkoutToken, backStep,shippingData, onCaptureCheckout ,nextStep, timeout }) => {

    const handleSubmit = async (event, elements, stripe) => {
        event.preventDefault()
        if (!stripe || !elements) return;
        const cardElement = elements.getElement(CardElement)
        const { error, paymentMethod } = await stripe.createPaymentMethod({ type: "card", card: cardElement })

        if (error) {
            console.log(error)
        }
        else {
            const orderData = {
                line_items: checkoutToken.live.line_items,
                customer: { firstname: shippingData.firstName, lastname: shippingData.lastName, email: shippingData.email },
                shipping: {
                    name: "Primary Shipping", street: shippingData.address, town_city: shippingData.town_city,
                    county_state: shippingData.shippingSubdivision, postal_zip_code: shippingData.zip, county: shippingData.shippingCountry

                },
                fulfillment:{shipping_method: shippingData.shippingOption},
                payment: {gateway: "stripe",
                stipe: {
                    payment_method_id: paymentMethod.id
                }
                }
            }
            onCaptureCheckout(checkoutToken.id,orderData);
            timeout();
            nextStep();
        }
    }


    return (
        <>
            <Review checkoutToken={checkoutToken} />
            <Divider />
            <Typography variant="h5" gutterBottom style={{ margin: "20px 0" }}>Payment Method
            <Typography style={{ fontSize: "10px" }} gutterBottom> Do not add in your Card information to purchase</Typography>
                <Typography style={{ fontSize: "10px" }} gutterBottom> These items do not exist</Typography>
                <Typography style={{ fontSize: "10px" }} gutterBottom> This is a fake ECommerce Website</Typography>

            </Typography>
            <Elements stripe={stripePromise}>
                <ElementsConsumer>
                    {({ elements, stripe }) => (
                        <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
                            <CardElement />
                            <br></br>
                            <br></br>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <Button variant="outlined" onClick={backStep}>Back</Button>
                                <Button type="submit" variant="contained" disabled={!stripe} color="primary">
                                    Pay {checkoutToken.live.subtotal.formatted_with_symbol}
                                </Button>

                            </div>
                        </form>
                    )}
                </ElementsConsumer>

            </Elements>

        </>
    )
}

export default PaymentForm
