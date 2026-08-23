/* ==========================================================================
   Miguel Inácio — Portfolio
   JavaScript mínimo: menu mobile, navbar state, scroll reveal.
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
       Navbar state ao rolar
       ---------------------------------------------------------------- */
    var navbar = document.getElementById("navbar");
    if (navbar) {
        var onScroll = function () {
            navbar.classList.toggle("is-scrolled", window.scrollY > 12);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
    }

    /* ----------------------------------------------------------------
       Scroll reveal (sem depender de IntersectionObserver se não houver)
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
})();