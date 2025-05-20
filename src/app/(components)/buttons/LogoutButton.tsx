"use client";

import { Button } from '@mui/material';
import { signOut } from 'next-auth/react';

interface LogoutButtonProps {
  text: string;
}

export default function LogoutButton({ text }: LogoutButtonProps) {
  return (
    <Button
      variant="contained"
      onClick={() => signOut({ callbackUrl: '/' })}
      style={{
        color: 'black',
        backgroundColor: 'gold',
        fontSize: '1.1rem',
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 'bold',
        margin: '0 10px',
        borderRadius: '20px',
        padding: '6px 16px',
      }}
    >
      {text}
    </Button>
  );
}
