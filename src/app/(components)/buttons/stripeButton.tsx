"use client";

import BuyCursButton from './buyCurs';
import { EColorButton } from './buyCurs';

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
    // Показываем сообщение, что оплата отключена
    alert('Оплата временно отключена');
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
