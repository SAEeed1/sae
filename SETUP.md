# AIMarket - سایت حرفه‌ای فروش محصولات هوش مصنوعی

## 🎯 ویژگی‌های اصلی

### 📱 Frontend
- ✨ UI/UX مدرن با Tailwind CSS
- 🎨 انیمیشن‌های جذاب با Framer Motion
- 📱 طراحی کاملاً Responsive
- 🌙 Dark Theme شیک
- 🔤 پشتیبانی کامل فارسی (RTL)

### 🛍️ صفحات اصلی
- **خانه**: Hero section با معلومات و آمار
- **محصولات**: لیست محصولات با فیلتر و جستجو
- **جزئیات محصول**: صفحه تفصیلی هر محصول
- **سفارش**: فرم درخواست سفارش
- **درباره ما**: معلومات شرکت و تیم
- **تماس**: فرم تماس
- **ورود**: صفحه لاگین ادمین
- **داشبورد**: پنل کنترل مدیریتی

### 👨‍💼 سیستم چند ادمینی
- هر ادمین می‌تواند محصولات خود را مدیریت کند
- داشبورد جداگانه برای ردیابی سفارش‌ها
- سیستم احراز هویت ایمن

### 📊 داشبورد ادمین
- نمایش آمار (محصولات، سفارش‌ها، درآمد)
- لیست سفارش‌های دریافت شده
- وضعیت سفارش‌ها (در انتظار، تایید‌شده، تکمیل‌شده)
- مدیریت محصولات
- مدیریت ادمین‌ها

### 🔧 محصولات
- اجنت‌های هوشمند
- چت‌بات‌های تخصصی
- خدمات اتوماسیون (RPA)
- محصولات رسانه‌ای (تولید ویدیو، تصویر)
- اسکریپ‌های تخصصی
- LLM Orchestration

### 📧 سیستم سفارش
- فرم جامع درخواست
- اعتبارسنجی فیلدها
- ارسال خودکار ایمیل تایید
- ردیابی وضعیت سفارش

## 🚀 نصب و اجرا

### نیازمندی‌ها
- Node.js 18+
- npm یا yarn

### مراحل نصب

```bash
# کلون کردن repository
git clone https://github.com/SAEeed1/sae.git
cd sae

# نصب dependencies
npm install

# ایجاد فایل .env.local
cp .env.example .env.local

# اجرای سرور توسعه
npm run dev
```

سایت در `http://localhost:3000` اجرا خواهد شد.

## 📁 ساختار پروژه

```
app/
├── api/                    # API Routes
│   ├── auth/login/
│   ├── orders/create/
│   ├── products/
│   └── admin/orders/
├── products/               # صفحات محصولات
│   ├── page.tsx
│   └── [id]/page.tsx
├── order/                  # صفحه سفارش
├── dashboard/              # داشبورد ادمین
├── about/                  # درباره ما
├── contact/                # تماس
├── login/                  # ورود
├── layout.tsx              # Layout اصلی
├── page.tsx                # صفحه خانه
└── globals.css             # استایل‌های جهانی

components/
├── Navbar.tsx              # نوار بالایی
├── Footer.tsx              # پاورقی
├── Hero.tsx                # بخش Hero
├── ProductCard.tsx         # کارت محصول
└── FilterBar.tsx           # نوار فیلتر

lib/
├── store.ts                # Zustand store
└── types.ts                # TypeScript types

public/                    # فایل‌های ایستا
```

## 🎨 رنگ‌های اصلی

- **Primary**: `#6366f1` (Indigo)
- **Secondary**: `#8b5cf6` (Violet)
- **Accent**: `#ec4899` (Pink)
- **Dark**: `#0f172a` (Navy)
- **Light**: `#f8fafc` (White)

## 🔐 احراز هویت

هم‌اکنون سیستم Mock است. برای پیاده‌سازی حقیقی:

1. NextAuth.js را نصب کنید
2. دیتابیس (MongoDB/PostgreSQL) را پیکربندی کنید
3. سیستم رمزنگاری را اضافه کنید

## 📝 فایل‌های مهم

- `package.json`: Dependencies و scripts
- `tsconfig.json`: TypeScript configuration
- `tailwind.config.js`: Tailwind CSS customization
- `next.config.js`: Next.js configuration

## 🌐 API Endpoints

### Auth
- `POST /api/auth/login` - ورود کاربر

### Products
- `GET /api/products` - دریافت لیست محصولات
- `GET /api/products?category=...` - فیلتر بر اساس دسته‌بندی
- `GET /api/products?search=...` - جستجو

### Orders
- `POST /api/orders/create` - ایجاد سفارش جدید
- `GET /api/admin/orders` - دریافت سفارش‌های ادمین
- `GET /api/admin/orders?status=...` - فیلتر بر اساس وضعیت

## 🤝 مشارکت

اگر مایل به کمک هستید:

1. Fork کنید
2. شاخه‌ی جدید بسازید (`git checkout -b feature/...`)
3. تغییرات خود را Commit کنید
4. Pull Request ارسال کنید

## 📄 مجوز

این پروژه تحت مجوز MIT منتشر شده است.

## 📞 تماس

برای سؤالات و پیشنهادات با ما تماس بگیرید:
- ایمیل: support@aimarket.com
- وبسایت: www.aimarket.com

---

**ساخته شده با ❤️ توسط تیم AIMarket**
