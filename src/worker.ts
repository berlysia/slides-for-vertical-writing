export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    // まず静的アセットへ
    let res = await env.ASSETS.fetch(request);

    // HTML ナビゲーション時の 404 → /index.html フォールバック
    const accept = request.headers.get("Accept") ?? "";
    const isNav = request.method === "GET" && accept.includes("text/html");
    if (res.status === 404 && isNav) {
      const url = new URL(request.url);
      url.pathname = "/index.html";
      res = await env.ASSETS.fetch(new Request(url.toString(), request));
    }

    // キャッシュ方針とセキュリティヘッダー設定
    const h = new Headers(res.headers);
    const ct = h.get("Content-Type") ?? "";

    // 静的アセット（画像、JS、CSS）は長期キャッシュ、HTML は no-cache
    if (!ct.includes("text/html")) {
      h.set("Cache-Control", "public, max-age=31536000, immutable");
    } else {
      h.set("Cache-Control", "no-cache");
    }

    // セキュリティヘッダー
    h.set("X-Content-Type-Options", "nosniff");

    return new Response(res.body, {
      status: res.status,
      headers: h
    });
  }
};

interface Env {
  ASSETS: {
    fetch: (request: Request) => Promise<Response>;
  };
}