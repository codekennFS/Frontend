import AvailableTaskers from "@/components/features/Landing-Page/AvailableTaskers";
import Blog from "@/components/features/Landing-Page/Blog";
import CompletedTasks from "@/components/features/Landing-Page/CompletedTasks";
import EarnAsATasker from "@/components/features/Landing-Page/EarnAsATasker";
import Hero from "@/components/features/Landing-Page/Hero";
import NewJobAlert from "@/components/features/Landing-Page/NewJobAlert";
import RequestHelp from "@/components/features/Landing-Page/RequestHelp";
import Footer from "@/components/features/Shared/Footer/Footer";
import Header from "@/components/features/Shared/Navbar/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full min-h-screen">
        <Hero />
        <NewJobAlert />
        <AvailableTaskers />
        <EarnAsATasker />
        <CompletedTasks />
        <Blog />
        <RequestHelp />
      </main>
      <Footer />
    </>
  );
}
