async function nactiClanek(soubor) {
    const odpoved = await fetch(soubor);
    if (!odpoved.ok) {
        document.getElementById("hlavni-obsah").innerHTML =
            "<h1>Chyba</h1><p>Článek se nepodařilo načíst.</p>";
        return;
    }

    const text = await odpoved.text();

    // Rozparsuje HTML článku a vezme jen obsah <body>
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, "text/html");
    const telo = doc.body ? doc.body.innerHTML : text;

    document.getElementById("hlavni-obsah").innerHTML = telo;
}
