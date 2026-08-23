/* ==========================================================================
   Miguel Inácio — Portfolio
   JavaScript mínimo: menu mobile, marquee, scroll reveal, copiar e-mail.
   ========================================================================== */
(function () {
    "use strict";

    /* ----------------------------------------------------------------
       Menu mobile
       ---------------------------------------------------------------- */
    var toggle = document.getElementById("menuToggle");
    var menu = document.getElementById("menu");

    function setMenu(open) {
        menu.classList.toggle("is-open", open);
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
        toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
        document.body.style.overflow = open ? "hidden" : "";
    }

    if (toggle && menu) {
        toggle.addEventListener("click", function () {
            setMenu(toggle.getAttribute("aria-expanded") !== "true");
        });

        menu.addEventListener("click", function (e) {
            if (e.target && e.target.tagName === "A") {
                setMenu(false);
            }
        });

        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
                setMenu(false);
            }
        });
    }

    /* ----------------------------------------------------------------
       Scroll reveal
       ---------------------------------------------------------------- */
    var revealEls = document.querySelectorAll("[data-reveal]");

    if ("IntersectionObserver" in window) {
        var io = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        io.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
        );
        revealEls.forEach(function (el) {
            io.observe(el);
        });
    } else {
        revealEls.forEach(function (el) {
            el.classList.add("is-visible");
        });
    }

    /* ----------------------------------------------------------------
       Copiar e-mail
       ---------------------------------------------------------------- */
    var copyBtn = document.getElementById("copyEmail");
    var emailValue = document.getElementById("emailValue");

    if (copyBtn && emailValue) {
        copyBtn.addEventListener("click", function () {
            var text = emailValue.textContent.trim();
            function done() {
                copyBtn.textContent = "Copiado!";
                setTimeout(function () {
                    copyBtn.textContent = "Copiar";
                }, 2000);
            }

            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(text).then(done).catch(function () {
                    fallbackCopy(text, done);
                });
            } else {
                fallbackCopy(text, done);
            }
        });
    }

    function fallbackCopy(text, done) {
        var ta = document.createElement("textarea");
        ta.value = text;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        try {
            document.execCommand("copy");
        } catch (e) {}
        document.body.removeChild(ta);
        done();
    }
})();