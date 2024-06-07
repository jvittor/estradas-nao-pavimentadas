import React from 'react'
import "@/styles/about.css"
import { Footer } from '@/components/Footer'

const Dashboard = () => {
    return (
        <>

            <div className='gap-10 flex-row'>
                <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 gap-10'>
                    <img style={{ width: '50%', height: '500px', backgroundSize: 'cover' }} src='https://iili.io/JpWUIDl.md.png' />
                    <div className='space-y-3 flex-col items-center space-x-3 gap-5 text-4xl '>
                        <div className='decoration-orange underline first-letter:text-bold px-3'>
                            <h1>
                                Formulário para
                                <br />Coleta de Desagregação
                            </h1>
                        </div>
                        <div className="flex gap-5 flex-col">
                            <p className='font-light z-10 text-2xl inline-block w-full max-w-md bg-primary'>
                                Nosso projeto visa melhorar as estradas não
                                pavimentadas do estado da Bahia. Avaliaremos e compararemos técnicas
                                para reforçar e estabilizar essas estradas, visando melhorar seu desempenho e vida útil.
                                Nosso objetivo é contribuir para uma infraestrutura de transporte mais sustentável.

                            </p>
                            <div className='relative right-3'>
                                <a target="_blank" rel="noreferrer" href="https://survey123.arcgis.com/share/c248ad2ef0db45719fbcd30db963c1cd?portalUrl=https://ufrbgeo.maps.arcgis.com">
                                    <button className=" text-xl button-87">
                                        Ver formulário
                                    </button>
                                </a>
                            </div>
                        </div>

                    </div>



                </div>
                <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
                    <div className='space-y-3 flex-col items-center space-x-3 text-4xl '>
                        <div className='decoration-orange underline first-letter:text-bold px-3'>
                            <h1>
                                Dashboard
                            </h1>
                        </div>
                        <p className='font-light z-10 text-2xl inline-block w-full max-w-md bg-primary'>
                            Gráficos da média de desagregação de monitoramento das estradas pavimentadas
                        </p>
                    </div>

                    <iframe style={{ width: '700px', height: '500px' }} src='https://www.arcgis.com/apps/dashboards/64c053caa790429391fdc39588a9bdba' />

                </div>
                <div className='max-w-screen-xl mx-auto p-4 flex flex-col items-center justify-center'>

                    <iframe className='w-full' style={{ height: '500px' }} src='https://www.arcgis.com/apps/dashboards/b539b211906f46cc9429d61947179e87' />

                    <div className='text-center space-y-3 mt-4'>
                        <div className='decoration-orange underline first-letter:text-bold text-3xl px-3'>
                            <h1>
                                Mapa das estradas pavimentadas pelo projeto.
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </>

    )
}

export default Dashboard