//Componentes podem ser criados baseados em Funções ou Classes
//Lembrando, em JavaScript, toda classe, ao final vira uma functions ao ser tranpilada
//Para criar qualquer arquivo com codigo react, é preciso importar o módulo
import React from 'react'

//Para criar um componente, é preciso colocar o export, pois caso contrário não é possível importá-la


//Utilizando Arrow Funcctions
//Não precisa de retorno e se utiliza parenteses apra identificar o que será retornado

//Toda a função/componente react tem propriedades --> "props", e para definir estas propriedades, basta defini-las 
//na tag que a criou passando parâmetros
export default (props) => <h1>{props.value}</h1>
