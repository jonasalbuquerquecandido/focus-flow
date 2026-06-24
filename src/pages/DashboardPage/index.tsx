import { Summary } from "lucide-react";
import { Focus } from "../../components/Focus";
import { RecentSeassions } from "../../components/RecentSessions";
import { Habits } from "../../components/Habits";
import { NewTask } from "../../components/NewTask";
import { Header } from "../../components/Header";

export function Dashboard() {
  return (
    <>

    <Header />
    
    <main>
      <Focus />

      <Summary />

      <Habits />

      <RecentSeassions />

      <NewTask />

    </main>
    </>
  );
}