// Autor: Marco Antonio Botello Barrera

function Saludo(props) {
  return (
    <div>
      <p>Buenos {props.tipo} {props.nombre}</p>
    </div>
  )
}

export default Saludo