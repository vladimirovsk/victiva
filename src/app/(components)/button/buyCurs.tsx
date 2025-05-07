import { Button } from "@mui/material";
import React from "react";

interface BuyCursButtonProps {
  onClick?: () => void;
}

export default function BuyCursButton({ onClick }: BuyCursButtonProps) {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      style={{
        backgroundColor: '#FFD700',
        color: '#000',
        fontWeight: 'bold',
        margin: '40px',
        fontSize: '1.2rem'
      }}
      sx={{ textTransform: 'none' }}
    >
      Купить курс
    </Button>
  );
}
