import { NextRequest, NextResponse } from "next/server";
import { DASHBOARD_PAGES } from "./config/pages-url.config";
import { EnumTokens } from "./service/auth.service";

export async function middleware(request: NextRequest, response: NextResponse) {
	const { url, cookies } = request;

	const refreshToken = cookies.get(EnumTokens.REFRESH_TOKEN)?.value;

	const isDashboardPage = url.includes("/i");

	const isMainPage = "/";

	const isAuthorizationPage = url.includes("/authorization");

	const isRegistrationPage = url.includes("/registration");

	if (isRegistrationPage && refreshToken)
		return NextResponse.redirect(new URL(DASHBOARD_PAGES.PROFILE, url));

	if (isAuthorizationPage) return NextResponse.next();

	if (!refreshToken)
		return NextResponse.redirect(new URL(DASHBOARD_PAGES.AUTHORIZATION, url));
}

export const config = {
	matcher: ["/i/:path", "/authorization/:path"],
};
