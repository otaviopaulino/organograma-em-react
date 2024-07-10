import './SecaoSeparadora.css'

const SecaoSeparadora = (props) => {

return(
    <section className='secao-separadora'>    
      <h3>{props.children}</h3>    
    </section>   
    
    )

}

export default SecaoSeparadora