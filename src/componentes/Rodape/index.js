import './Rodape.css'

const Rodape = (props) => {
    return (
        <section className='rodape-site'>       
        
            <div className='redes-sociais'>
                <img src='/Imagens/fb.png'></img>
                <img src='/Imagens/tw.png'></img>
                <img src='/Imagens/ig.png'></img>
            </div>
            
            <div className='logo'>       
                <img src='/Imagens/logo.png'></img>          
            </div>                

            <div className='nossa-marca'>                    
                <h1>{props.children}</h1>                
            </div>
        </section>
    )
}

export default Rodape