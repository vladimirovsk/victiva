import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  // Оплата отключена, возвращаем сообщение об этом
  return NextResponse.json(
    { message: 'Оплата временно отключена' },
    { status: 200 }
  );
}
