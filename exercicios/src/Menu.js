import React from 'react'
import {createDrawerNavigator} from 'react-navigation'

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import {Inverter, MegaSena} from './componentes/Multi'
import Contador from './componentes/Contador'
import ValidarProps from './componentes/ValidarProps'
import Eventos from './componentes/Eventos'
import {Avo} from './componentes/ComunicacaoDireta'
import {TextoSincronizado} from './componentes/ComunicacaoIndireta'
import ListaFlex from './componentes/ListaFlex'
import Flex from './componentes/Flex'

export default createDrawerNavigator({

    Flex:{
        screen: Flex,
        navigationOptions: {title: 'Flex Box'}
    },
    ListaFlex:{
        screen:ListaFlex,
        navigationOptions: {title: 'Lista (Flex Box)'}
    },
    TextoSincronizado:{
        screen: TextoSincronizado,
        navigationOptions: {title: 'Texto Sincronizado'}
    },
    Avo:{
        screen: () => <Avo nome="João" sobrenome="Silva"></Avo>
    },
    Eventos:{
        screen: Eventos
    },
    Validar: {
        screen: () => <ValidarProps ano={18}/>,
        navigationOptions: {title: 'Validar'}
    },
    Contador:{
        screen: () => <Contador numeroInicial={100}/>,
        navigationOptions: {title: 'Contador'}
    },
    MegaSena:{
        screen: () => <MegaSena numero={6} />,
        navigationOptions: {title: 'Mega Sena'}
    },
    Inverter:{
        screen: () => <Inverter texto="React Nativo!" />
    },
    ParImpar:{
        screen: () => <ParImpar numero={30} />,
        navigationOptions: {title: 'Par & Impar'}
    },
    Simples:{
        screen: () => <Simples texto="Flexivel!!!!!"/>
    }
}, {drawerWith: 300})