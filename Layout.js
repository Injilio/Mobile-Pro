import React from 'react';
import { StyleSheet, Text, StyleSheet } from 'react-native';

const Layout = () => {
  return {
    <View style={styles.countainer}>
		<View style={styles.box1}></View>
		<Text style={styles.text1}>App Penghitung</Text>
		<View style={styles.box2}></View>
		<Text style={styles.text2}>Jumlah Kasus</Text> 
		<View style={styles.box3}></View> 
		<Text style={styles.text3}>Virus Corona</Text> 		   
    </View>
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column'
		justifyContent: 'space-around'
		alignItem: 'stretch'
	},
	box1: {
		width: 50,
		height: 50,
		backgroundColor: 'pink'
	},
	text1: {
	fontSize: 22,
	fontWeight: 'bold',
	Color: 'red'
	},
	box2: {
		width: 50,
		height: 50,
		backgroundColor: 'aqua'
	},
	text2: {
	fontSize: 22,
	fontWeight: 'bold',
	Color: 'blue'
	box3: {
		width: 50,
		height: 50,
		backgroundColor: 'orange'
	},
	text3: {
	fontSize: 22,
	fontWeight: 'bold',
	Color: 'yellow'
})
export default Layout;