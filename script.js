function cekLink() {
    const link = document.getElementById("linkInput").value.toLowerCase();
    const hasil = document.getElementById("hasil");

    const kataBerbahaya = [
        "free",
        "login",
        "verify",
        "update",
        "secure",
        "account",
        "bank",
        "paypal",
        "click",
        "bonus"
    ];

    if (link === "") {
        alert("Masukkan link terlebih dahulu!");
        return;
    }

    if (link.startsWith("http://")) {
        hasil.className = "hasil waspada";
        hasil.textContent = "⚠️ LINK MENCURIGAKAN (Tidak menggunakan HTTPS)";
        hasil.style.display = "block";
        return;
    }

    for (let kata of kataBerbahaya) {
        if (link.includes(kata)) {
            hasil.className = "hasil bahaya";
            hasil.textContent = "❌ LINK BERBAHAYA (Terindikasi phishing / scam)";
            hasil.style.display = "block";
            return;
        }
    }

    hasil.className = "hasil aman";
    hasil.textContent = "✅ LINK TERLIHAT AMAN";
    hasil.style.display = "block";
}
