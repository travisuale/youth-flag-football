import { NextRequest, NextResponse } from "next/server";

function unauthorizedResponse() {
  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Protected Event Page"'
    }
  });
}

export function middleware(request: NextRequest) {
  const configuredAuth = process.env.PROTECTED_PAGE_AUTH;

  if (!configuredAuth) {
    return unauthorizedResponse();
  }

  const authorization = request.headers.get("authorization");

  if (!authorization?.startsWith("Basic ")) {
    return unauthorizedResponse();
  }

  const encodedCredentials = authorization.split(" ")[1];
  const decodedCredentials = Buffer.from(encodedCredentials, "base64").toString("utf8");

  if (decodedCredentials !== configuredAuth) {
    return unauthorizedResponse();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:eventSlug/protected/:path*"]
};
