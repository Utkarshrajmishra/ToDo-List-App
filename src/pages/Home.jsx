import Container from "../components/Container/Container";

const Home=()=>{
    return (
      <>
        <div className="relative min-h-[100vh] flex justify-center items-center">
          <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
          <Container/>
        </div>
      </>
    );
}

export default Home;