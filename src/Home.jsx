import profileImg from "/profile.jpg";

export default function Home() {
    return (
        <main>
            <article role="article">
                <div className="flex gap-10 items-end justify-between">
                    <div className="flex flex-col gap-6">
                        <div>
                            <h1 className="font-bold my-5 text-[2em]">
                                JoZeito <span className="green">.</span>dev
                            </h1>

                            <h2 className="font-bold green text-[1em]">
                                Front-end Engineer.
                            </h2>
                        </div>
                        <div>
                            <p className="block">
                                Olá, meu nome é José Zeito, também conhecido
                                como Jozeito. Nos últimos dois anos, tenho me
                                dedicado ao estudo do mundo da Engenharia de
                                Software e programação.
                            </p>
                        </div>
                    </div>
                    <img
                        className="w-[120px] rounded-lg"
                        src={profileImg}
                        alt="A picture of myself"
                    />
                </div>

                <div className="my-10 flex flex-col gap-5">
                    <p className="blobk">
                        Por mais de dois anos, tenho estudado o mundo da
                        Engenharia de Software mais concretamente Front-end
                        Development, estou comprometido em transformar conceitos
                        criativos em realidade digital, combinando design
                        impressionante com funcionalidades robustas.
                    </p>

                    <p className="block">
                        Como desenvolvedor frontend, possuo sólida experiência
                        em HTML, CSS e JavaScript, bem como em frameworks
                        modernos como React, Vue.js e Angular. Garanto layouts
                        responsivos e colaboro eficientemente em equipe.
                        Priorizo a acessibilidade e estou sempre actualizado com
                        as últimas tendências da área. Além de ser proficiente
                        em frameworks como Tailwind e Bootstrap. Também estou
                        confortável com o uso do Git e GitHub para controle de
                        versão e colaboração em projetcos.
                    </p>
                </div>
            </article>
        </main>
    );
}
