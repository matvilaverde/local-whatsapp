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
						<Text style={styles.time}>Yesterday</Text>
					</View>
					<Text numberOfLines={1} style={styles.lastMessage}>{chatRoom.lastMessage.content}</Text>
				</View>
			
			</View>

			{/* <Text>{chatRoom.lastMessage.createdAt}</Text> */}
			
		</View>
	)
};

export default ChatListItem;