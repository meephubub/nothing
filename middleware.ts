import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ['en', 'es'];
const defaultLocale = 'en';

function getLocale(request: NextRequest) {
    const acceptLanguage = request.headers.get('accept-language');
    // Simple check: if 'es' is preferred, return 'es', otherwise default 'en'
    if (acceptLanguage && /es/i.test(acceptLanguage)) {
        return 'es';
    }
    return defaultLocale;
}

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Check if there is any supported locale in the pathname
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) return;

    // Redirect if there is no locale
    const locale = getLocale(request);
    request.nextUrl.pathname = `/${locale}${pathname}`;
    // e.g. incoming request is /products
    // The new URL is now /en/products
    return NextResponse.redirect(request.nextUrl);
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)',
    ],
};
