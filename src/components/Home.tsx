import React from "react";
import { Button, View } from "react-native";
import { Produto } from "../models/Produto";

export let database : Produto[] = [{
    nomeProduto: 'Sem Registro'} ]

interface Input{
    navigation : any
}

const Home = ({navigation} : Input) =>{
    return(
        <View>
            <Button
            title = "Adicionar"
                onPress ={() =>{
                    navigation.navigate("Adicionar");
                }} />
            <Button
            title = "Editar"
                onPress ={() =>{
                    navigation.navigate("Editar");
                }} />
                <Button
            title = "Listar"
                onPress ={() =>{
                    navigation.navigate("Listar");
                }} />


        </View>
    );
};

export default Home;