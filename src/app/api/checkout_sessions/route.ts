import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.NEXT_STRIPE_SECRET_KEY as string);

export async function POST(request: NextRequest) {
  try {

    const origin = request.headers.get('origin') || 'http://localhost:3000';
    console.log('Origin:', origin);
    const body = await request.json();
    const value = Number(body.value);
    if (isNaN(value) || value <= 0) {
      console.error('Invalid value:', value);
    }
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Ваша услуга',
            },
            unit_amount: value,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${origin}/success`,
      cancel_url: `${origin}/cancel`,
    });

    console.log('Session created:', session.id);
    return NextResponse.json({ id: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json(
        { error: 'Error creating checkout session' },
        { status: 500 }
    );
  }
}
