import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {

    const nama = "Injilio Dumanauw";
    const greeting = <Text style={styles.textStyle}>Nama {nama}!</Text>;
    return (
        <View>
            {greeting}
            <Text>Selamat Datang</Text>
            <Text>App Mobileku</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 26,
        color: 'red'
    }
});

export default Header;
