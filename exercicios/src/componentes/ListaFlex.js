import React from 'react'
import {ScrollView, View, FlatList, Text} from 'react-native'

const alunos = [
    { id: 1, nome: "João1", nota: 7.9},
    { id: 2, nome: "João2", nota: 10,},
    { id: 3, nome: "João3", nota: 2},
    { id: 4, nome: "João4", nota: 5.5},
    { id: 5, nome: "João5", nota: 7.0},
    { id: 6, nome: "João6", nota: 10},
    { id: 7, nome: "João7", nota: 1.0},
    { id: 8, nome: "João8", nota: 0},
    { id: 9, nome: "João9", nota: 6.7},
    { id: 10, nome: "João10", nota: 3.5},
    { id: 11, nome: "João11", nota: 4.8},    
    { id: 12, nome: "João12", nota: 7},
    { id: 13, nome: "João13", nota: 7.8},
    { id: 14, nome: "João14", nota: 9.9},
    { id: 15, nome: "João15", nota: 1.9},
    { id: 16, nome: "João16", nota: 2.9},
    { id: 17, nome: "João17", nota: 5.9},
    { id: 18, nome: "João18", nota: 8.9},
    { id: 19, nome: "João19", nota: 2.9},
    { id: 20, nome: "João20", nota: 0.9},
    { id: 21, nome: "João21", nota: 0.9},
    { id: 22, nome: "João22", nota: 0.9},
]

const itemEstilo = {
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#222',
    
    //Flex
    //allignItems - alinhamento no cross axis
    //alignItems: 'flex-end',
    //alignItems: 'flex-start',
    alignItems: 'center',
    //justifyContent - alinhamento no main axis
    //justifyContent:'center',
    //justifyContent:'flex-end',
    //justifyContent:'flex-start',
    //justifyContent:'space-between',
    //justifyContent:'space-around',

    flexDirection: 'row', //Main axis agora é row nao mais a coluna
    justifyContent:'space-between',
}

export const Aluno = props =>
    <View style={itemEstilo}>
        <Text>Nome: {props.nome}</Text>
        <Text style={{fontWeight: 'bold'}}>Nota: {props.nota}</Text>
    </View>

export default props => {
    const renderItem = ({ item }) => {
        return <Aluno {...item}/>
    }

    return(
        <ScrollView>
            <FlatList data={alunos} renderItem={renderItem}
            keyExtractor={(_, index) => index.toString()}/>
        </ScrollView>
    )
}