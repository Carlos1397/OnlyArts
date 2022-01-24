import { Link } from 'react-router-dom'

function RecoveryPass(props) {
  return (
    <section className="tw-h-full tw-flex tw-items-center tw-justify-center tw-flex-col tw-bg-gray-200">
      <div className="tw-border tw-border-black tw-flex tw-flex-col tw-items-center tw-bg-white  tw-py-16 tw-px-20 tw-gap-8 tw-shadow-lg">
        <div className="tw-flex tw-items-center tw-flex-col">
          <img
            src="/resources/img/logo.png"
            alt="recovery pass"
            className="tw-rotate-[30deg]"
          />
          <h4>Restablece tu contraseña</h4>
        </div>
        <div className="tw-w-full tw-flex tw-flex-col tw-gap-4">
          <input
            placeholder="Ingrese su correo electrónico"
            className="tw-w-full tw-shadow tw-appearance-none tw-border tw-border-black tw-py-2 tw-px-3 tw-text-gray-700 tw-leading-tight tw-focus:outline-none tw-focus:shadow-outline"
            type="email"
          />
          <button className="btn-blue tw-mx-4">Restablecer contraseña</button>
        </div>
        <div className="tw-flex tw-flex-col tw-gap-2">
          <div className="tw-flex tw-flex-row tw-gap-4">
            <p>¿Recuerdas tu contraseña?</p>
            <Link to="/auth/login" className="tw-text-center">
              Iniciar sesión
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RecoveryPass
