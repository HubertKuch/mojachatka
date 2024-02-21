import Layout from "../components/Layout";
import Statistics from "../components/dashboard/Statistics";

export default function (): JSX.Element {
  return (
    <Layout title={"Panel"}>
      <div className="bg-[#ffffff] p-5 rounded-md">
        <Statistics />
      </div>
    </Layout>
  );
}
