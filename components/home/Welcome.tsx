import Banner from 'assets/banner.jpg'
import Image from "next/image";

const Welcome = () => {
    return (
        <div className="container col-md-12 mt-3">
            <div className="card shadow-lg">
                <div className="row">
                    <div className="col-md-6">
                        <Image
                            src={Banner}
                            alt="login"
                            className="img-fluid"
                        />
                    </div>
                    <div className="col-md-6 text-center">
                        <div className="mt-5 mr-5">
                            <h1>
                                Bienvenido a <strong>¡OVER APP!</strong>
                            </h1>
                            <hr />
                            <div id="welcome-text" className="justify-content mr-2">
                                Esta es una pequeña aplicación hecho por mí
                                para fortalecer mi portafolio y ser de apoyo
                                y soporte en mi experiencia tanto profesional
                                como de desarrollador. &#x1F600;<br />
                                En esta aplicación podrás crear tareas y monitorear
                                tus ingresos y salidas de la plataforma
                                <hr />
                                Si quieres conocer como esta diseñada esta plataforma lo puedes
                                consultar en su respectivo repositorio que voy dejar a continuación.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome