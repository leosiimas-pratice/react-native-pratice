import React from 'react'
import {Text} from 'react-native'
import Padrao from '../estilos/Padrao'

// Import e export, tendo noçao de como funciona
// Export default, nao precisa de chaves no import
// Export que não for padrão precisa de chaves
// Basicamente refere ao fato de podemos exporta por default apenas uma vez
// Mas usando o export nao default podemos retornar varios componentes

export const Inverter = props => {

    const inv = props.texto.split('').reverse().join('')
    return <Text style={Padrao.ex}>{inv}</Text>
}

export const MegaSena = props => {
    const [min, max] = [1, 60]
    const numeros =  Array(props.numeros || 6).fill(0)
    for (let i = 0 ; i < numeros.length ; i++){
        let novo = 0
        while(numeros.includes(novo)){
            novo = Math.floor(Math.random() * (max - min + 1)) + min
        }
        numeros[i] = novo
    }

    numeros.sort((a,b) => a-b)
    return <Text style={Padrao.ex}>{numeros.join(', ')}</Text>
}