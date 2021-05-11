import React from 'react'
import {Typography, Button, Divider} from "@material-ui/core";
import{ Elements, CardElement, ElementsConsumer} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js"
import Review from "./Review.jsx"


const stripePromise = loadStripe("...")


const PaymentForm = ({checkoutToken, backStep}) => {
    return (
        <>
            <Review  checkoutToken={checkoutToken}/>
            <Divider/>
            <Typography variant ="h5" gutterBottom style ={{margin: "20px 0"}}>Payment Method
            <Typography style ={{fontSize: "10px"}} gutterBottom> Do not add in your Card information to purchase</Typography>
            <Typography style ={{fontSize: "10px"}} gutterBottom> These items do not exist</Typography>
            <Typography style ={{fontSize: "10px"}} gutterBottom> This is a fake ECommerce Website</Typography>

            </Typography>
            <Elements stripe={stripePromise}>
            <ElementsConsumer>
                {({elements,stripe}) => ( 
                        <form>
                           <CardElement/> 
                           <br></br>
                           <br></br>
                           <div style={{display: "flex" ,justifyContent: "space-between"}}>
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
