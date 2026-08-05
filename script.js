async function nactiClanek(soubor) {
    const odpoved = await fetch(soubor);
    const html = await odpoved.text();
    document.getElementById("hlavni-obsah").innerHTML = html;
}
