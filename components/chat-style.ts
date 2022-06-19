import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        padding: 10,
    },
    leftContainer: {
        flexDirection: 'row',
    },
    midContainer: {
        justifyContent: 'space-around',
    },
    topSection: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 50,
        marginRight: 15,
    },
    username: {
        width: '70%',
        fontWeight: "bold",
        fontSize: 16,
    },
    lastMessage: {
        width: '70%',
        fontSize: 16,
        color: 'grey',
    },
    time: {
        width: '50%',
        fontSize: 16,
        color: 'grey',
    },
});

export default styles;