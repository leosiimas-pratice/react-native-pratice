import React from 'react'
import {Text,View} from 'react-native'
import Padrao from '../estilos/Padrao'

export default props =>
    <View>
        <Text style={Padrao.ex}>{props.texto}</Text>
    </View>
    