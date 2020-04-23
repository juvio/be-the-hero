import React from 'react';
import {Feather} from '@expo/vector-icons';
import {View, Image, Text, TouchableOpacity, Linking} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

import logo from '../../assets/logo.png';
import styles from './styles';

export default function Detail(){

    const navigation = useNavigation();
    const message = 'Olá ONG, estou entrando em contato pois gostaria de ajudar no caso CASO com o valor de VALOR.'

    function navigateBack(){
        navigation.goBack();
    }

    function sendEmail(){
        MailComposer.composeAsync({
            subject: 'Herói do caso: CASO',
            recipients: ['julianavieirao.ppg@live.com'],
            body: message,
        })
    }

    function sendWpp(){
        Linking.openURL(`whatsapp://send?phone=5521969184694&text=${message}`);
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>

                <Image source={logo}/>

                <TouchableOpacity onPress={navigateBack}>
                    <Feather name={"arrow-left"} size={28} color={"#e02041"}/>
                </TouchableOpacity>

            </View>

            <View style={styles.incident}>

                <Text style={[styles.incidentProperty, {marginTop: 0}]}>ONG</Text>
                <Text style={styles.incidentValue}>APAD</Text>

                <Text style={styles.incidentProperty}>CASO</Text>
                <Text style={styles.incidentValue}>Caso um</Text>

                <Text style={styles.incidentProperty}>VALOR</Text>
                <Text style={styles.incidentValue}>R$ 100,00</Text>

            </View>

            <View style={styles.contactBox}>

                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

                <Text style={styles.heroDescription}>Entre em contato:</Text>

                <View style={styles.actions}>

                    <TouchableOpacity style={styles.action} onPress={sendWpp}>
                        <Text style={styles.actionText}>WhatsApp</Text>                       
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendEmail}>
                        <Text style={styles.actionText}>E-mail</Text>                       
                    </TouchableOpacity>
                </View>


            </View>

        </View>
    );
}