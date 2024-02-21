import Layout from "../components/Layout";
import Pagination from "../components/Pagination";
import UserList from "../components/users/UserList";

export default function (): JSX.Element {
  return (
    <Layout title={"Uzytkownicy"}>
      <div className="bg-[#ffffff] p-5 rounded-md">
        <UserList />
        <Pagination total={10} current={2} />
      </div>
    </Layout>
  );
}
