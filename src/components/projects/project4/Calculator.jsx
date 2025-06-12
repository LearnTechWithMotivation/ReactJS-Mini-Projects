import Header from "../../Header";
import Footer from "../../Footer";
import CaclBody from "./CaclBody";

export default function Calculator() {
  return (
    <main 
    style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1746468658999-30f6a7a8518d?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
    }}
    className="min-h-[100vh] flex justify-between items-center relative flex-col">
        <div className="absolute inset-0 bg-black/50 z-1">

        </div>
      <Header name={"Calculator"} />
      <CaclBody/>
      <Footer />
    </main>
  );
}
