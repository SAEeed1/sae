import { NextRequest, NextResponse } from 'next/server';

const mockProducts = [
  {
    id: '1',
    name: 'اجنت بیلینگ هوشمند',
    category: 'اجنت',
    description: 'اجنت هوشمند برای مدیریت و پیگیری صورت‌حساب‌ها',
    price: 499,
    icon: '🤖',
    admin: 'Admin 1',
  },
  {
    id: '2',
    name: 'چت‌بات پشتیبانی 24/7',
    category: 'چت‌بات',
    description: 'چت‌بات تخصصی برای پاسخ به سؤالات مشتریان',
    price: 299,
    icon: '💬',
    admin: 'Admin 2',
  },
  {
    id: '3',
    name: 'خدمات اتوماسیون RPA',
    category: 'اتوماسیون',
    description: 'خدمات اتوماسیون فرآیندهای تجاری پیشرفته',
    price: 799,
    icon: '⚙️',
    admin: 'Admin 1',
  },
];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const search = searchParams.get('search');

    let products = mockProducts;

    // Filter by category
    if (category && category !== 'همه') {
      products = products.filter((p) => p.category === category);
    }

    // Filter by search
    if (search) {
      products = products.filter(
        (p) =>
          p.name.includes(search) ||
          p.description.includes(search) ||
          p.category.includes(search)
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: products,
        count: products.length,
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
