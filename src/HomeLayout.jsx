import { Outlet, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import themeIcon from "../public/dark_light.svg";

export default function HomeLayout() {
    useEffect(() => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
    }, []);

    const themeSwitch = () => {
        const theme = localStorage.getItem("theme");
        if (theme === "dark") {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
    };

    return (
        <>
            <header className="my-10 flex items-center justify-between">
                <nav role="navigation" aria-label="Main Navigation">
                    <ul className="flex gap-2 text-sm font-semibold">
                        <li>
                            <NavLink tabIndex={0} to="./">
                                Início
                            </NavLink>
                        </li>
                        <li>
                            <NavLink tabIndex={0} to="./about">
                                Sobre
                            </NavLink>
                        </li>
                        <li>
                            <NavLink tabIndex={0} to="./projects">
                                Projetos
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <button
                    tabIndex={0}
                    onClick={() => {
                        themeSwitch();
                    }}
                    className="theme-toggler w-[25px] dark:invert transition-[filter] duration-1000"
                    aria-label="Switch Theme"
                ></button>
            </header>

            <div className="content my-10">
                <Outlet />
            </div>

            <footer className="text-sm">
                <div>
                    <address>
                        <ul className="flex gap-10">
                            <li>
                                <a
                                    href="https://www.instagram.com/tech__wrld/"
                                    aria-label="Instagram"
                                >
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/Zeitoo"
                                    aria-label="Github"
                                >
                                    Github
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:josezeito@outlook.com"
                                    aria-label="Email Jose"
                                >
                                    josezeito@outlook.com
                                </a>
                            </li>
                        </ul>
                    </address>
                </div>
            </footer>
        </>
    );
}
