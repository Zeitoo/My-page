import Transition from "./Transition";

function Projects() {
    return (
        <main className="pb-5">
            <div  className="title w-[100%] flex flex-col items-center mt-10 mb-[100px]">
                <h1 className="font-bold text-[2em] my-5 "> <span className="green">/</span>Projectos</h1>
                <p>Alguns dos trabalhos que fiz no passado.</p>
            </div>
        </main>
    );
}

export default Transition(Projects)