"use client";

import { loadStripe } from '@stripe/stripe-js';
import BuyCursButton from './buyCurs';
import { EColorButton } from './buyCurs';

// Initialize Stripe on the client side
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

interface StripeButtonProps {
  value: number;
  caption?: string;
  bgColor?: EColorButton;
  fontColor?: EColorButton;
}

export default function StripeButton({
  value,
  caption = 'Купить курс',
  bgColor = EColorButton.gold,
  fontColor = EColorButton.black
}: StripeButtonProps) {

  const handleStripeCheckout = async () => {
    const stripe = await stripePromise;
    const response = await fetch('/api/checkout_sessions', {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify({ 
        value
      })
    });
    const checkoutSession = await response.json();
    console.log('checkoutSession', checkoutSession);
    if (stripe) {
      await stripe.redirectToCheckout({ sessionId: checkoutSession.id })
    }

  };

  return (
    <BuyCursButton 
      onClick={handleStripeCheckout}
      caption={caption}
      bgColor={bgColor}
      fontColor={fontColor}
    />
  );
}
