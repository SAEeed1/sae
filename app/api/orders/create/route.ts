import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, email, phone, company, productCategory, description, budget, timeline } = body;

    // Validate required fields
    if (!fullName || !email || !productCategory) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Mock order creation - replace with database
    const order = {
      id: Math.random().toString(36).substr(2, 9),
      customerName: fullName,
      customerEmail: email,
      customerPhone: phone,
      company: company,
      productCategory: productCategory,
      description: description,
      budget: budget,
      timeline: timeline,
      status: 'pending',
      createdAt: new Date(),
    };

    // Here you would save to database and send confirmation email
    console.log('New Order:', order);

    return NextResponse.json(
      {
        success: true,
        message: 'Order created successfully',
        order: order,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
}
