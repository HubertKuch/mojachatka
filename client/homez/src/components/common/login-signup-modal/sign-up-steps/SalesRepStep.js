export default function SalesRepStep({ register }) {
  return (
    <div>
      <div>
        <label htmlFor="salesRepFirstName">Imie przedstawiciela</label>
        <input
          {...register("salesRepFirstName", { required: true })}
          className="form-control"
        />
      </div>
      <div>
        <label htmlFor={"salesRepLastName"}>Nazwisko przedstawiciela</label>
        <input
          {...register("salesRepLastName", { required: true })}
          className="form-control"
        />
      </div>
      <div>
        <label htmlFor="salesRepTelephone">
          Numer telefonu przedstawiciela
        </label>
        <input
          {...register("salesRepTelephone", { required: true })}
          className="form-control"
        />
      </div>
      <div>
        <label htmlFor="salesRepAltTelephone">
          Alternatywny numer telefonu przedstawiciela
        </label>
        <input
          {...register("salesRepAltTelephone", { required: true })}
          className="form-control"
        />
      </div>
    </div>
  );
}
