/* ==========================================================================
   Miguel Inácio — main.js
   JS mínimo: menu mobile, nav ativa, fetch de repositórios do GitHub.
   ========================================================================== */

(function () {
    "use strict";

    var USER = "Mkkkz";

    /* ----------------------------------------------------------------------
       Menu mobile
       ---------------------------------------------------------------------- */
    var toggle = document.getElementById("menuToggle");
    var menu = document.getElementById("menu");

    if (toggle && menu) {
        toggle.addEventListener("click", function () {
            var open = menu.classList.toggle("is-open");
            toggle.setAttribute("aria-expanded", open ? "true" : "false");
            toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
        });

        // Fecha o menu ao clicar em qualquer link
        menu.addEventListener("click", function (e) {
            if (e.target.tagName === "A") {
                menu.classList.remove("is-open");
                toggle.setAttribute("aria-expanded", "false");
                toggle.setAttribute("aria-label", "Abrir menu");
            }
        });
    }

    /* ----------------------------------------------------------------------
       Navbar: realça o link da seção visível
       ---------------------------------------------------------------------- */
    var sections = document.querySelectorAll("section[id]");
    var navLinks = document.querySelectorAll(".navbar__link");

    function onScroll() {
        var pos = window.scrollY + 120;
        var current = null;

        sections.forEach(function (section) {
            if (section.offsetTop <= pos) {
                current = section.id;
            }
        });

        navLinks.forEach(function (link) {
            var href = link.getAttribute("href").slice(1);
            link.classList.toggle("is-active", href === current);
        });
    }

    window.addEventListener("scroll", onScroll, { passive: true });

    /* ----------------------------------------------------------------------
       Repositórios públicos do GitHub (API pública, sem backend)
       ---------------------------------------------------------------------- */
    var reposEl = document.getElementById("repos");

    function formatDate(iso) {
        if (!iso) return "";
        var d = new Date(iso);
        var year = d.getFullYear();
        var month = String(d.getMonth() + 1).padStart(2, "0");
        var day = String(d.getDate()).padStart(2, "0");
        return year + "-" + month + "-" + day;
    }

    function starLabel(n) {
        return n + " " + (n === 1 ? "estrela" : "estrelas");
    }

    function buildCard(repo) {
        var lang = repo.language ? repo.language : "—";
        var desc = repo.description
            ? repo.description
            : "Sem descrição disponível.";

        var card = document.createElement("article");
        card.className = "repo";

        card.innerHTML =
            '<div class="repo__header">' +
            '<a class="repo__name" href="' + repo.html_url + '" target="_blank" rel="noopener">' +
            repo.name + "</a>" +
            '<span class="repo__lang">' + lang + "</span>" +
            "</div>" +
            '<p class="repo__description"></p>' +
            '<div class="repo__meta">' +
            '<span class="star">' + starLabel(repo.stargazers_count) + "</span>" +
            '<span class="update">' + formatDate(repo.updated_at) + "</span>" +
            "</div>";

        card.querySelector(".repo__description").textContent = desc;
        return card;
    }

    function loadRepos() {
        if (!reposEl) return;

        reposEl.textContent = "Carregando repositórios…";

        var url =
            "https://api.github.com/users/" +
            USER +
            "/repos?sort=updated&per_page=6";

        fetch(url, { headers: { Accept: "application/vnd.github+json" } })
            .then(function (res) {
                if (!res.ok) throw new Error("HTTP " + res.status);
                return res.json();
            })
            .then(function (repos) {
                if (!Array.isArray(repos) || repos.length === 0) {
                    reposEl.textContent = "Nenhum repositório público no momento.";
                    return;
                }
                // Ignora o repositório de perfil (README) do usuário
                var list = repos.filter(function (repo) {
                    return repo.name !== USER;
                });
                if (list.length === 0) {
                    reposEl.textContent = "Nenhum repositório público no momento.";
                    return;
                }
                reposEl.textContent = "";
                list.forEach(function (repo) {
                    reposEl.appendChild(buildCard(repo));
                });
            })
            .catch(function () {
                reposEl.textContent =
                    "Não foi possível carregar os repositórios. Veja em " +
                    "github.com/" + USER + ".";
            });
    }

    loadRepos();
})();
