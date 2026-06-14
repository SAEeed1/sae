import { NextRequest, NextResponse } from 'next/server';

const mockOrders = [
  {
    id: '1',
    customerName: 'علی رضایی',
    productCategory: 'اجنت',
    status: 'pending',
    amount: 499,
    date: '1403/03/20',
  },
  {
    id: '2',
    customerName: 'فاطمه احمدی',
    productCategory: 'چت‌بات',
    status: 'approved',
    amount: 299,
    date: '1403/03/19',
  },
];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');

    let orders = mockOrders;

    if (status) {
      orders = orders.filter((o) => o.status === status);
    }

    return NextResponse.json(
      {
        success: true,
        data: orders,
        count: orders.length,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
}
