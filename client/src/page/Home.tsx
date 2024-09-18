import MarktingForm from "../components/common/form";

function Home() {
    return (
        <section className="flex flex-col justify-center items-center w-full h-screen">
            <h1 className="font-bold text-blue-500">GPT Generate</h1>
            <MarktingForm />
        </section>
    )
}
export default Home;