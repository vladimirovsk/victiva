"use client";

import { Button } from "@mui/material";
import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';

export enum EColorButton {
    gold= '#FFD700',
    white = '#FFF',
    black = '#000'
}

interface BuyCursButtonProps {
  onClick?: () => void;
  caption?: string;
  bgColor?: EColorButton
  fontColor? :EColorButton
}

export default function BuyCursButton({
  onClick,
  caption='Купить курс',
  bgColor=EColorButton.gold,
  fontColor=EColorButton.black
}: BuyCursButtonProps) {
  return (
    <ScrollAnimation animateIn="animate__pulse" animateOnce={true}>
    <Button
      variant="contained"
      onClick={onClick}
      className="pulse-on-hover"
      style={{
        borderRadius: '20px',
        backgroundColor: bgColor,
        color: fontColor,
        fontWeight: 'bold',
        margin: '1rem',
        fontSize: '1.3rem'
      }}
      sx={{ textTransform: 'none' }}
    >
        {caption}
    </Button>
    </ScrollAnimation>
  );
}
