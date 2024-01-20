export default function CompanyDetailsStep({ register }) {
  return (
    <div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          {...register("email", { required: true })}
          className="form-control"
        />
      </div>
      <div>
        <label htmlFor="companyName">Nazwa firmy</label>
        <input
          {...register("companyName", { required: true })}
          className="form-control"
        />
      </div>
      <div>
        <label htmlFor="license">Numer licencji (Jeśli posiadasz):</label>
        <input
          {...register("license", { required: true })}
          className="form-control"
        />
      </div>
      <div>
        <label htmlFor="regon">REGON</label>
        <input
          {...register("regon", { required: true })}
          className="form-control"
        />
      </div>
      <div>
        <label htmlFor="nip">NIP</label>
        <input
          {...register("nip", { required: true })}
          className="form-control"
        />
      </div>
      <div>
        <label htmlFor="address">Ulica</label>
        <input
          {...register("address", { required: true })}
          className="form-control"
        />
      </div>
      <div>
        <label htmlFor="house">Nr domu / mieszkania</label>
        <input
          {...register("house", { required: true })}
          className="form-control"
        />
      </div>
      <div>
        <label htmlFor="zipCode">Kod pocztowy</label>
        <input
          {...register("zipCode", { required: true })}
          className="form-control"
        />
      </div>
      <div>
        <label htmlFor="city">Miejscowość</label>
        <input
          {...register("city", { required: true })}
          className="form-control"
        />
      </div>
    </div>
  );
}
