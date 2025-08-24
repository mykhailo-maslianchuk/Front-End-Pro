'use strict'
class Navigation {
    constructor({ menu, view, routes, defaultRoute = "/home" }) {
        this.menu = typeof menu === "string" ? document.querySelector(menu) : menu;
        this.view = typeof view === "string" ? document.querySelector(view) : view;
        this.routes = routes;
        this.defaultRoute = defaultRoute;

        this.links = Array.from(this.menu.querySelectorAll("a"));

        this.menu.addEventListener("click", (e) => {
            const a = e.target.closest("a");
            if (!a) return;
            const url = new URL(a.href, window.location.origin);
            if (url.origin === window.location.origin && this.isKnownRoute(url.pathname)) {
                e.preventDefault();
                this.navigate(url.pathname);
            }
        });

        window.addEventListener("popstate", () => {
            this.render(window.location.pathname);
            this.setActiveLink(window.location.pathname);
        });

        const initialPath = this.normalizePath(window.location.pathname);
        if (this.isKnownRoute(initialPath)) {
            this.replaceState(initialPath);
            this.render(initialPath);
            this.setActiveLink(initialPath);
        } else {
            this.navigate(this.defaultRoute, { replace: true });
        }
    }

    normalizePath(path) {
        if (!path) return this.defaultRoute;
        try {
            const u = new URL(path, window.location.origin);
            let p = u.pathname;
            if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);
            return p;
        } catch {
            return this.defaultRoute;
        }
    }

    isKnownRoute(path) {
        return Object.prototype.hasOwnProperty.call(this.routes, this.normalizePath(path));
    }

    setActiveLink(path) {
        const p = this.normalizePath(path);
        this.links.forEach(a => {
            const isActive = this.normalizePath(a.getAttribute("href")) === p;
            a.classList.toggle("active", isActive);
            if (isActive) a.setAttribute("aria-current", "page");
            else a.removeAttribute("aria-current");
        });
    }

    render(path) {
        const p = this.normalizePath(path);
        const view = this.routes[p];
        let html = "";
        if (typeof view === "function") html = view();
        else if (typeof view === "string") html = view;
        else html = `<h1>404</h1><p>Сторінку не знайдено.</p>`;
        this.view.innerHTML = html;
        this.view.focus({ preventScroll: false });
    }

    replaceState(path) {
        const p = this.normalizePath(path);
        if (this.isKnownRoute(p)) {
            window.history.replaceState({ path: p }, "", p);
        }
    }

    navigate(path, { replace = false } = {}) {
        const p = this.normalizePath(path);
        if (!this.isKnownRoute(p)) return this.navigate(this.defaultRoute, { replace: true });
        if (replace) window.history.replaceState({ path: p }, "", p);
        else window.history.pushState({ path: p }, "", p);
        this.render(p);
        this.setActiveLink(p);
    }
}

const routes = {
    "/home": () => `
    <h1>Вітаю вдома 👋</h1>
    <p class="muted">Це демо домашньої сторінки. Спробуй натиснути <code>About</code> або <code>Contact</code>, а потім стрілки Back/Forward у браузері.</p>
  `,
    "/about": `
    <h1>Про цей приклад</h1>
    <p>Меню керується через <code>history.pushState</code> і подію <code>popstate</code>, без перезавантаження.</p>
    <ul>
      <li>Активний пункт меню отримує клас <code>active</code> та <code>aria-current="page"</code>.</li>
      <li>URL змінюється на <code>/home</code>, <code>/about</code> або <code>/contact</code>.</li>
      <li>Невідомі шляхи перенаправляються на <code>/home</code>.</li>
    </ul>
  `,
    "/contact": () => `
    <h1>Контакти</h1>
    <p>Уявні контакти тут 🙂</p>
    <p class="muted">Можеш також напряму ввести в адресний рядок: <code>/about</code> або <code>/contact</code>.</p>
  `
};

window.addEventListener("DOMContentLoaded", () => {
    new Navigation({
        menu: "#menu",
        view: "#view",
        routes,
        defaultRoute: "/home",
    });
});

