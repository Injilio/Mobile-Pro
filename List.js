import React, { useCallback } from 'react';
import { View, Text, FlatList } from 'react-native';

class List extends React.Component {
	constructor() {
		super();
		this.state = {
			covid19: [
			{
				Country : 'World';
				Data : Global.js
			}
			{
				Country : 'Germany';
				Data: Germany.js
			},
			{
				Country : 'United States';
				Data: Usa.js
			},
			{
				Country : 'Indonesia';
				Data: Indonesia.js
			},
			{
				Country : 'China';
				Data: China.js
			},
			{
				Country : 'Spain';
				Data: Spain.js
			},
			{
				Country : 'Italy';
				Data: Italy.js
			},
			{
				Country : 'Japan';
				Data: Japan.js
			},							
			
		],
		refreshing: false
	 }

	}

	renderItem = ({item}) => (
		<View style={{ padding : 20, borderBottomWidth: 1, borderBottomColor : 'red'}}
			<Text>Nama: {item.Country}</Text>
			<Text>Fakultas: {item.Cases}</Text>
		</View>
	)


	render () {

		return (
			<View>
			    <FlatList
			    data={this.state.covid19}
			    renderItem={this.renderItem}
			    refreshing={this.state.refreshing}
			    />
			</View>

		)
	}
}

export default List;