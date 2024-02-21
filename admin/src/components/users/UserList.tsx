import useUsers from "../../hooks/useUsers";
import { User } from "../../types/user";

export default function UserList(): JSX.Element {
  const users: User[] = useUsers();

  return (
    <div className="overflow-x-auto">
      <table className="table table-lg">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Imie</th>
            <th>Nazwisko</th>
            <th>Ilosc ogloszen</th>
            <th>Lista podbic</th>
            <th>Ostatnie logowanie</th>
            <th>Data utworzenia konta</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>{user.firstName}</td>
              <td>{user.lastname}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
