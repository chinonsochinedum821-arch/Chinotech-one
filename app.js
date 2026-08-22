/* =========================================
   CHINOTECH1 APP / PWA CONTROLLER
   File: app.js
========================================= */

(function () {

  /* Register Service Worker */
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("./sw.js")
        .then(function () {
          console.log("CHINOTECH1 service worker installed");
        })
        .catch(function (error) {
          console.error("CHINOTECH1 service worker error:", error);
        });
    });
  }

  /* App installation */
  let installPrompt = null;

  window.addEventListener("beforeinstallprompt", function (event) {

    event.preventDefault();

    installPrompt = event;

    let button = document.getElementById(
      "chinotechInstallButton"
    );

    if (button) {
      button.style.display = "block";
    }
  });

  window.installCHINOTECH1 = async function () {

    if (!installPrompt) {

      alert(
        "To install CHINOTECH1, open your browser menu and select 'Install app' or 'Add to Home screen'."
      );

      return;
    }

    installPrompt.prompt();

    const result =
      await installPrompt.userChoice;

    console.log(
      "CHINOTECH1 installation:",
      result.outcome
    );

    installPrompt = null;

    const button =
      document.getElementById(
        "chinotechInstallButton"
      );

    if (button) {
      button.style.display = "none";
    }
  };

  /* Detect installed app */
  window.addEventListener("appinstalled", function () {

    console.log(
      "CHINOTECH1 Marketplace installed successfully."
    );

    const button =
      document.getElementById(
        "chinotechInstallButton"
      );

    if (button) {
      button.style.display = "none";
    }
  });

})();
