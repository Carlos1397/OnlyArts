import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
function register(props) {
  return (
    <>
      <section className="tw-min-h-full tw-flex tw-items-center tw-justify-center tw-py-4 tw-bg-gray-200">
        <div className="tw-border tw-border-black tw-flex tw-flex-col tw-bg-white  tw-py-5 tw-px-20 tw-gap-8 tw-shadow-lg">
          <div className="tw-flex tw-items-center tw-flex-col">
            <img
              className="mx-auto tw-h-25 tw-items-center tw-w-auto tw-rotate-[30deg]"
              src="/resources/img/logo.png"
              alt="No se encontro"
            />
            <h2 className="tw-mt-3 tw-text-center tw-text-3xl tw-font-extrabold tw-text-gray-900">
              Regístrate en ONLYARTS
            </h2>
            <div className="tw-flex tw-flex-row tw-gap-2">
              <p className="tw-mt-2 tw-text-center tw-text-sm tw-text-gray-700">
                ¿ya tienes una Cuenta con Onlyarts?
              </p>
              <Link
                to="/auth/login"
                className="tw-font-medium tw-text-indigo-600 tw-hover:text-indigo-500"
              >
                Iniciar sesión
              </Link>
            </div>
          </div>
          <Form action="#" method="POST">
            <Form.Group className="tw-mb-5" controlId="formName">
              <Form.Control type="text" placeholder="Ingrese su nombre" />
            </Form.Group>
            <Form.Group className="tw-mb-5" controlId="formEmail">
              <Form.Control
                type="email"
                placeholder="Ingrese su correo electrónico"
              />
            </Form.Group>
            <Form.Group className="tw-mb-5" controlId="formPassword">
              <Form.Control
                type="password"
                placeholder="Ingrese su contraseña"
              />
            </Form.Group>
            <Form.Group className="tw-mb-5" controlId="formCheckbox">
              <Form.Check type="checkbox" label="Aceptas los términos y uso." />
            </Form.Group>
            <Button
              className="btn-blue tw-mx-auto d-block tw-w-full tw-relative tw-mb-5 tw-flex tw-justify-center tw-py-2 tw-px-4"
              size="lg"
              type="submit"
            >
              Registrarme
            </Button>
          </Form>
        </div>
      </section>
    </>
  )
}

export default register
