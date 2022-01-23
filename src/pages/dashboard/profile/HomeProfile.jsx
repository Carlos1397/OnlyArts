function HomeProfile(params) {
  return (
    <section className="tw-flex tw-flex-col tw-gap-8 tw-py-2">
      <div className="tw-flex tw-flex-col tw-items-center">
        <img
          src="https://i.pinimg.com/474x/52/59/82/5259825510b691c9c04f5ec6b6e6547a--type-pokemon-pokemon-stuff.jpg"
          alt="profile"
          className="tw-object-cover tw-border-solid tw-border-2 tw-border-black  tw-rounded-[50%]"
        />
        <h3>Jose Cueva Celis</h3>
      </div>

      <div className="tw-px-8 tw-flex tw-flex-col tw-items-center">
        <h4 className="[display:none]">Información</h4>
        <form className="tw-flex tw-flex-col tw-gap-4">
          <div className="tw-flex tw-flex-col">
            <label for="name">Nombre completo</label>
            <input
              type="text"
              id="name"
              name="name"
              className="tw-w-60"
              defaultValue="José Alexander Cueva Celis"
            />
          </div>
          <div className="tw-flex tw-flex-col">
            <label for="email">Correo Electrónico</label>
            <input
              type="text"
              id="email"
              name="email"
              className="tw-w-60"
              defaultValue="cuevacelis@hotmail.com"
            />
          </div>
          <div className="tw-flex tw-flex-col">
            <label for="phone">Teléfono</label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="tw-w-60"
              defaultValue="957161948"
            />
          </div>
          <input
            type="submit"
            value="Guardar cambios"
            className="btn-red tw-text-center"
          />
        </form>
      </div>
    </section>
  )
}

export default HomeProfile
