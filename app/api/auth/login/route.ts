import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // Mock authentication - replace with real database
    if (email && password) {
      return NextResponse.json(
        {
          success: true,
          message: 'Login successful',
          user: {
            id: '1',
            name: 'کاربر آزمایشی',
            email: email,
            role: 'admin',
          },
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { success: false, message: 'Invalid credentials' },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
}
