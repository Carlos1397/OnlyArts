import { Link } from 'react-router-dom'

function RecoveryPass(props) {
  return (
    <section className="tw-h-full">
      <nav className="bg-white p-2 h-14 flex items-center shadow-lg">
        <p>EduTECH</p>
      </nav>
      <section className="tw-h-full tw-flex tw-items-center tw-justify-center tw-flex-col tw-bg-gray-300">
        <div className="tw-border tw-border-black tw-flex tw-flex-col tw-items-center tw-bg-white tw-rounded-3xl tw-py-12 tw-px-12 tw-gap-8 tw-shadow-lg">
          <div>
            <h1>LOGIN</h1>
          </div>
          <div className="tw-flex tw-flex-col tw-gap-4">
            <input
              placeholder="email"
              className="tw-shadow tw-appearance-none tw-border tw-border-black tw-rounded-lg tw-w-full tw-py-2 tw-px-3 tw-text-gray-700 tw-leading-tight tw-focus:outline-none tw-focus:shadow-outline"
              type="email"
            />
            <input
              placeholder="contraseña"
              className="tw-shadow tw-appearance-none tw-border tw-border-black tw-rounded-lg tw-w-full tw-py-2 px-3 tw-text-gray-700 tw-leading-tight tw-focus:outline-none tw-focus:shadow-outline"
              type="password"
            />
          </div>
          <div className="tw-flex tw-flex-col tw-gap-2">
            <button className="tw-btnPrincipal">Iniciar Sesión</button>
            <Link to="" className="tw-text-center">
              <u>Olvide mi contraseña</u>
            </Link>
            <Link to="" className="tw-text-center">
              <u>¿Aún no tienes cuenta?</u>
            </Link>
          </div>
        </div>
      </section>
    </section>
  )
}

export default RecoveryPass
