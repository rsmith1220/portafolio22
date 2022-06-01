import React from 'react';
import ReactDOM from 'react-dom';
import '../components/intro.css'
import SISOY from'../img/Becca.png'

const Intro = () =>{

    return(
        <div className='i'>
            <div className='i-left'>
                <div className='i-left-wrapper'>
                    <h2 className='i-intro'>Mi nombre es</h2>
                    <h2 className='i-name'>Rebecca</h2>
                    <div className='i-title'>
                        <div className='i-title-wrapper'>
                            <div className='i-title-item'>Junior developer</div>
                            <div className='i-title-item'>web: Javascript, HTML, CSS, React</div>
                            <div className='i-title-item'>Python</div>
                            <div className='i-title-item'>Java</div>
                        </div>
                    </div>
                    <div className='i-desc'>
                        Cursando tercer año en Ingeniería en ciencias de la computación y tecnologías de la información en la Universidad del Valle de Guatemala
                    </div>
                </div>
            </div>
            <div className='i-right'>
                <div className='i-bg'></div>
                <img src={SISOY} alt='Becca' className='i-img'></img>
            </div>
        </div>
    )
    
}

export default Intro