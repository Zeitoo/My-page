export default function About() {
    return (
        <main>
            <article>
                <h1 className="font-bold my-10 text-[2em]">
                    <span className="green">/</span>Sobre mim
                </h1>
                <div className="text-content">
                    <p className="block my-5">
                        Olá, meu nome é José Zeito, também conhecido como
                        Jozeito. Nos últimos dois anos, tenho me dedicado ao
                        estudo do mundo da Engenharia de Software e programação,
                        explorando desde conceitos básicos de Python até tópicos
                        avançados como:
                    </p>

                    <ul className="ms-10 my-5 flex flex-col gap-2">
                        <li>
                            Criação de páginas usando{" "}
                            <span className="green">HTML</span>.
                        </li>
                        <li>
                            Estilização de páginas usando{" "}
                            <span className="green">CSS</span>.
                        </li>
                        <li>
                            Criação de aplicações Web usando{" "}
                            <span className="green">React</span> e{" "}
                            <span className="green">Angular</span>.
                        </li>
                        <li>
                            Estilização de páginas usando CSS frameworks como{" "}
                            <span className="green">Tailwind</span> e{" "}
                            <span className="green">Bootstrap</span>.
                        </li>
                        <li>
                            Criação de scripts usando{" "}
                            <span className="green">JavaScript</span>,{" "}
                            <span className="green">Python</span> e{" "}
                            <span className="green">TypeScript</span>.
                        </li>
                        <li>
                            Controle de versão usando{" "}
                            <span className="green">Git</span>.
                        </li>
                    </ul>

                    <p className="my-5">
                        Ao longo da minha jornada como desenvolvedor Front-end,
                        mergulhei de cabeça na arte da codificação, aprimorando
                        constantemente minhas habilidades em HTML, CSS e
                        JavaScript.
                    </p>

                    <p className="my-5">
                        Estou entusiasmado para compartilhar algumas das minhas
                        criações mais recentes. Se você procura um desenvolvedor
                        Front-end dedicado e criativo para colaborar em seu
                        próximo projeto, estou pronto para fazer parte da sua
                        equipe e transformar sua visão em uma realidade digital
                        impressionante.
                    </p>
                </div>

                <div className="my-10 flex flex-col gap-5">
                    <h2 className="text-[1.8em] font-semibold">Contato</h2>
                    <hr />
                    <ul className="flex flex-col gap-2">
                        <li className="flex items-center">
                            <a
                                href="https://github.com/Zeitoo"
                                aria-label="Link para GitHub de José Zeito"
                            >
                                GitHub
                            </a>
                        </li>
                        <li className="flex items-center">
                            <a
                                href="#"
                                aria-label="Link para o Twitter de José Zeito"
                            >
                                Twitter
                            </a>
                        </li>
                        <li className="flex items-center">
                            Email:{" "}
                            <a
                                className="mx-2"
                                href="mailto:josezeito@outlook.com"
                                aria-label="Enviar email para josezeito@outlook.com"
                            >
                                josezeito@outlook.com
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="my-10 flex flex-col gap-5">
                    <h2 className="text-[1.8em] font-semibold">
                        O que estou fazendo agora
                    </h2>
                    <hr />
                    <ul className="flex flex-col gap-2">
                        <p>
                            Atualizado em{" "}
                            <span className="green">Agosto de 2024</span>.
                        </p>

                        <li>
                            Estudando sobre modelagem de base de dados
                            relacionais.
                        </li>
                        <li>Trabalhando neste site.</li>
                    </ul>
                </div>
            </article>
        </main>
    );
}
