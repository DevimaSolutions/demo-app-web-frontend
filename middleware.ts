import { NextResponse, userAgent } from 'next/server';

import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const { os } = userAgent(request);

  if (os.name === 'iOS') {
    url.searchParams.set('deviceType', 'iOS');
    return NextResponse.rewrite(url);
  }
}
