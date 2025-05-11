"use client";

import { Button } from "@mui/material";
import React from "react";

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
    <Button
      variant="contained"
      onClick={onClick}
      style={{
        backgroundColor: bgColor,
        color: fontColor,
        fontWeight: 'bold',
        margin: '40px',
        fontSize: '1.3rem'
      }}
      sx={{ textTransform: 'none' }}
    >
        {caption}
    </Button>
  );
}
