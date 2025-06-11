if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("sw.js")
        .then(() => console.log("Serice Worker registrado com sucesso!"))
        .catch(err => console.error("Erro ao registrar Service Worker: " + err));
} else {
    console.log("Service Worker não é suportado neste navegador.");
}