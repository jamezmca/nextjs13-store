import { NextResponse } from "next/server";
import Stripe from "stripe"

export async function POST(request) {

    // if (request.method !== 'POST') { return res.sendStatus(405) }
    const body = await request.json()

    if (body.lineItems.length === 0) {

        return new Response('Error', {
            status: 405,
        });
    }

    try {
        const stripe = new Stripe(process.env.STRIPE_SECRET ?? '', {
            apiVersion: '2020-08-27'
        })

        const session = await stripe.checkout.sessions.create({
            success_url: 'http://localhost:3000/success',
            cancel_url: 'http://localhost:3000/cancel',
            line_items: body.lineItems,
            mode: 'payment'
        })
        return NextResponse.json({ session })
    } catch (err) {
        console.log('BROKED')
        console.log(err)
        return new Response('Error', {
            status: 405,
        });
    }
}