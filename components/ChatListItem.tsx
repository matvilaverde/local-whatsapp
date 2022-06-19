import React from 'react';
import { Image, Text, View } from 'react-native';
import { ChatRoom } from '../types';
import styles from './chat-style';

export type ChatListItemProps = {
	chatRoom: ChatRoom;
}

const ChatListItem = (props: ChatListItemProps) => {
	const { chatRoom } = props;

	const user = chatRoom.users[1];

	return (
		<View style={styles.container}>
			<View style={styles.leftContainer}>
				<Image source={{ uri: user.imageUri }} style={styles.avatar} />

				<View style={styles.midContainer}>
					<View style={styles.topSection}>
						<Text numberOfLines={1} style={styles.username}>{user.name}</Text>
						<Text style={styles.time}>
							{dateFormatter('DMY', chatRoom.lastMessage.createdAt)}
						</Text>
					</View>
					<Text numberOfLines={1} style={styles.lastMessage}>{chatRoom.lastMessage.content}</Text>
				</View>
			
			</View>
		</View>
	)
};

/** Formats date according to format given and ignores depreciated Moment */
const dateFormatter = (format: string, unformatedDate: string) => {
	let formatedDate: string;
	const day = new Date(unformatedDate).getDate();
	const month = new Date(unformatedDate).getMonth() + 1;
	const year = new Date(unformatedDate).getFullYear();

	switch (format) {
		case 'DMY':
			formatedDate = (day < 10 ? '0' : '') + day + '/' + (month < 10 ? '0' : '') + month
				+ '/' + year;
			break;
			
		case 'MDY':
			formatedDate = (month < 10 ? '0' : '') + month + '/' + (day < 10 ? '0' : '') + day
				+ '/' + year;
			break;
			
		default:
			formatedDate = year + '/' + (month < 10 ? '0' : '') + month + '/' + (day < 10 ?
				'0' : '') + day;
			break;
	}
	
	return formatedDate;
}

export default ChatListItem;