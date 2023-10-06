import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Main = () => {
    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <View style={styles.wheel}>
                    <View>
                        <View style={[styles.span, styles.span1]}>
                            <Text style={styles.value}>1</Text>

                        </View>
                        {/* <View style={[styles.span, styles.span2]}>
                            <Text style={styles.value}>2</Text>

                        </View> */}

                    </View>
                    <TouchableOpacity
                        style={styles.spin}
                        onPress={() => alert("press")}
                    >

                        <Text style={styles.spinText}>SPIN</Text>

                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Main;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    main: {
        position: 'relative',
        width: 200, // Adjust width as needed
        height: 200, // Adjust height as needed
    },
    wheel: {
        width: '100%',
        height: '100%',
        position: 'relative',
        borderRadius: 100, // Use half of the width/height for a circle
        borderWidth: 4,
        borderColor: 'blue', // Add a border color
    },
    span: {
        width: "50%",
        height: "50%",
        position: "relative",
        borderWidth: 2,
        borderColor: "red"
    },
    span1: {
        backgroundColor: 'yellow',
        width: '50%',
        height: '50%',
        position: "relative",
        top: 120,
        left: 0,
        transform: [{ skewY: '-60deg' }],
        // clipPath: 'polygon(0 92%, 100% 50%, 0 8%)',
        // overflow:"hidden"

    },
    span2: {
        backgroundColor: 'red',
        width: '50%',
        height: '50%',
        position: "relative",
        top: 120,
        right: 0,
        // clipPath: 'polygon(0 92%, 100% 50%, 0 8%)',

    },







    // value: {
    //     width: 65,
    //     height: 65,
    //     fontSize: 60,
    //     textAlign: "center",
    //     position: "absolute",
    //     top: ' 50%',
    //     left: " 50%",
    //     // transform: translate(-50%, -50%);
    // },

    spin: {
        position: "absolute",
        top: "30%",
        left: "30%",
        width: 75,
        height: 75,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: "#f2ff",
        color: "#fff",
        alignItems: 'center',
        justifyContent: "center",

    }
    ,
    spinText: {
        color: "white",
        fontSize: 24,
        fontWeight: "800"
    }
});
