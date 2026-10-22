// Vrací aktuální údaje formuláře odběru z www.paulus.yoga/novinky (Podia),
// aby formuláře na cz.paulus.yoga vždy posílaly platný token a štítky.
export async function onRequestGet() {
  try {
    const r = await fetch("https://www.paulus.yoga/novinky", {
      headers: { "User-Agent": "cz.paulus.yoga odber" },
      cf: { cacheTtl: 600, cacheEverything: true },
    });
    const html = (await r.text()).replace(/&quot;/g, '"');
    // Podia vkládá data formulářů jako JSON; bereme první formulář na stránce (hlavní sekce /novinky).
    const m = html.match(/"emailSignupFormId":"([^"]+)","emailSignupFormToken":"([^"]+)","action":"(\/email_lists\/\d+\/subscriptions)"/);
    if (!m) throw new Error("form");
    const out = { action: "https://www.paulus.yoga" + m[3], id: m[1], token: m[2] };
    if (!out.id || !out.token) throw new Error("token");
    return new Response(JSON.stringify(out), {
      headers: { "content-type": "application/json", "cache-control": "public, max-age=600" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ chyba: String(e) }), {
      status: 502, headers: { "content-type": "application/json", "cache-control": "no-store" },
    });
  }
}
