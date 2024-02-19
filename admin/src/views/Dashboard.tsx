import Layout from "../components/Layout";
import Statistics from "../components/dashboard/Statistics";

export default function (): JSX.Element {
  return (
    <Layout title={"Panel"}>
      <div className="bg-[#f3f4f6] p-5 rounded-md">
        <h2 className="text-2xl">Statystyki</h2>
        <Statistics />
      </div>
    </Layout>
  );
}
