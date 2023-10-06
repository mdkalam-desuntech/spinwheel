import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  Animated,
  Easing,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import Svg, { Circle, Path } from "react-native-svg";

const SpinWheelGame = () => {
  const wheelValue = useRef(new Animated.Value(0)).current;
  const [isSpinning, setIsSpinning] = useState(false);
  const segments = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  const values = [252, 216, 180, 144, 108, 72, 36, 0, 324, 288];
  const [result, setResult] = useState(null);
  const [resultShow, setResultShow] = useState("");

  useEffect(() => {
    if (result) {
      setTimeout(() => {
        setResult(null);
      }, 9000);
    }
  }, [result]);

  const spinWheel = () => {
    if (!isSpinning) {
      setIsSpinning(true);
      wheelValue.setValue(0);

      // Generate a random number between 0 and 9
      const randomNumber = Math.floor(Math.random() * segments.length);

      // Calculate the angle to stop at the selected number
      const degreesPerSegment = 360 / segments.length;
      const stopAngle = degreesPerSegment * randomNumber;

      Animated.timing(wheelValue, {
        toValue: 1080 + stopAngle,
        duration: 8000,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start(() => {
        val = values.indexOf(stopAngle);
        setResult(val);
        setResultShow(val);
        setIsSpinning(false);
      });
    }
  };

  const wheelRotation = wheelValue.interpolate({
    inputRange: [0, 1080],
    outputRange: ["0deg", "1080deg"],
  });

  const segmentAngle = (2 * Math.PI) / segments.length;

  return (
    <View style={[styles.container]}>
      {result != null ? (
        <>
          <Image
            source={require("../assets/imgpsh_fullsize_anim2.gif")}
            style={{
              width: 250,
              height: 250,
              position: "absolute",
              top: "10%",
              right: "5%",
              zIndex: -999,
            }}
          />
          <Image
            source={require("../assets/imgpsh_fullsize_anim2.gif")}
            style={{
              width: 80,
              height: 80,
              position: "absolute",
              top: "8%",
              left: "1%",
              zIndex: 999,
            }}
          />
          <Image
            source={require("../assets/imgpsh_fullsize_anim2.gif")}
            style={{
              width: 50,
              height: 50,
              position: "absolute",
              top: "5%",
              right: "1%",
              zIndex: 999,
            }}
          />
        </>
      ) : null}
      <View style={styles.indicatorContainer}>
        <View style={styles.indicator}>
          <View style={styles.triangle} />
        </View>
      </View>
      <Animated.View
        style={{
          width: 310,
          height: 310,
          borderRadius: 155,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FF8C00",
          shadowOffset: { width: 5, height: 5 },
          shadowOpacity: 8,
          elevation: 7,
          shadowColor: "black",
        }}
      >
        <>
          {segments.map((index) => (
            <Image
              key={index}
              source={require("../assets/imgpsh_fullsize_anim.gif")}
              style={{
                width: 12,
                height: 12,
                position: "absolute",
                top: 156 + 148 * Math.sin(index * segmentAngle) - 7,
                left: 158 + 148 * Math.cos(index * segmentAngle) - 9,
                zIndex: 999,
              }}
            />
          ))}

          <Animated.View
            style={{
              transform: [{ rotate: wheelRotation }],
            }}
          >
            <Svg width="300" height="300">
              <Circle cx="150" cy="150" r="140" fill="yellow" />
              {segments.map((segment, index) => (
                <Path
                  key={index}
                  d={`
                    M150,150
                    L${150 + 130 * Math.cos(index * segmentAngle)} 
                    ${150 + 130 * Math.sin(index * segmentAngle)}
                    A130,130 0 0,1 
                    ${150 + 130 * Math.cos((index + 1) * segmentAngle)}
                    ${150 + 130 * Math.sin((index + 1) * segmentAngle)}
                    Z
                   `}
                  fill={`hsl(${(index * 760) / segments.length}, 90%, 50%)`}
                />
              ))}
              <Animated.View>
                <Text
                  style={{
                    position: "absolute",
                    top: 172 + 100 * Math.sin(0 * segmentAngle) - 10,
                    left: 147 + 100 * Math.cos(0 * segmentAngle) - 10,
                    fontSize: 26,
                    color: "white",
                    position: "absolute",
                    transform: [{ rotate: "108deg" }],
                  }}
                >
                  {segments[0]}
                </Text>
              </Animated.View>

              {/* 1 */}
              <Animated.View>
                <Text
                  style={{
                    position: "absolute",
                    top: 165 + 100 * Math.sin(1 * segmentAngle) - 10,
                    left: 130 + 100 * Math.cos(1 * segmentAngle) - 10,
                    fontSize: 26,
                    color: "white",
                    position: "absolute",
                    transform: [{ rotate: "144deg" }],
                  }}
                >
                  {segments[1]}
                </Text>
              </Animated.View>

              {/* 2 */}
              <Animated.View>
                <Text
                  style={{
                    position: "absolute",
                    top: 147 + 100 * Math.sin(2 * segmentAngle) - 10,
                    left: 122 + 100 * Math.cos(2 * segmentAngle) - 10,
                    fontSize: 26,
                    color: "white",
                    position: "absolute",
                    transform: [{ rotate: "180deg" }],
                  }}
                >
                  {segments[2]}
                </Text>
              </Animated.View>

              {/* 3*/}
              <Animated.View>
                <Text
                  style={{
                    position: "absolute",
                    top: 128 + 100 * Math.sin(3 * segmentAngle) - 10,
                    left: 125 + 100 * Math.cos(3 * segmentAngle) - 10,
                    fontSize: 26,
                    color: "white",
                    position: "absolute",
                    transform: [{ rotate: "216deg" }],
                  }}
                >
                  {segments[3]}
                </Text>
              </Animated.View>

              {/* 4*/}
              <Animated.View>
                <Text
                  style={{
                    position: "absolute",
                    top: 116 + 100 * Math.sin(4 * segmentAngle) - 10,
                    left: 140 + 100 * Math.cos(4 * segmentAngle) - 10,
                    fontSize: 26,
                    color: "white",
                    position: "absolute",
                    transform: [{ rotate: "252deg" }],
                  }}
                >
                  {segments[4]}
                </Text>
              </Animated.View>

              {/* 5*/}
              <Animated.View>
                <Text
                  style={{
                    position: "absolute",
                    top: 112 + 100 * Math.sin(5 * segmentAngle) - 10,
                    left: 160 + 100 * Math.cos(5 * segmentAngle) - 10,
                    fontSize: 26,
                    color: "white",
                    position: "absolute",
                    transform: [{ rotate: "288deg" }],
                  }}
                >
                  {segments[5]}
                </Text>
              </Animated.View>

              {/* 6*/}
              <Animated.View>
                <Text
                  style={{
                    position: "absolute",
                    top: 122 + 100 * Math.sin(6 * segmentAngle) - 10,
                    left: 175 + 100 * Math.cos(6 * segmentAngle) - 10,
                    fontSize: 26,
                    color: "white",
                    position: "absolute",
                    transform: [{ rotate: "324deg" }],
                  }}
                >
                  {segments[6]}
                </Text>
              </Animated.View>

              {/* 7*/}
              <Animated.View>
                <Text
                  style={{
                    position: "absolute",
                    top: 140 + 100 * Math.sin(7 * segmentAngle) - 10,
                    left: 182 + 100 * Math.cos(7 * segmentAngle) - 10,
                    fontSize: 26,
                    color: "white",
                    position: "absolute",
                    transform: [{ rotate: "350deg" }],
                  }}
                >
                  {segments[7]}
                </Text>
              </Animated.View>

              {/* 8*/}
              <Animated.View>
                <Text
                  style={{
                    position: "absolute",
                    top: 158 + 100 * Math.sin(8 * segmentAngle) - 10,
                    left: 180 + 100 * Math.cos(8 * segmentAngle) - 10,
                    fontSize: 26,
                    color: "white",
                    position: "absolute",
                    transform: [{ rotate: "396deg" }],
                  }}
                >
                  {segments[8]}
                </Text>
              </Animated.View>

              {/* 9 */}
              <Animated.View>
                <Text
                  style={{
                    position: "absolute",
                    top: 170 + 100 * Math.sin(9 * segmentAngle) - 10,
                    left: 165 + 100 * Math.cos(9 * segmentAngle) - 10,
                    fontSize: 26,
                    color: "white",
                    position: "absolute",
                    transform: [{ rotate: "436deg" }],
                  }}
                >
                  {segments[9]}
                </Text>
              </Animated.View>
            </Svg>
          </Animated.View>
        </>
      </Animated.View>
      <Animated.View style={styles.winnigBox}>
        {!isSpinning && resultShow !== "" && (
          <View style={{ alignItems: "center" }}>
            <Text style={styles.WiningText}>Congratulations</Text>
            <Text style={styles.resultText}>Your Lucky Number Is</Text>
            <Text style={styles.resultNumber}> {resultShow}</Text>
          </View>
        )}
      </Animated.View>

      <TouchableOpacity
        style={styles.spin}
        onPress={spinWheel}
        disabled={isSpinning}
      >
        <Text style={styles.spinText}>SPIN</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  indicatorContainer: {
    position: "absolute",
    top: 210,
    alignItems: "center",
  },
  indicator: {
    width: 20,
    height: 20,
    backgroundColor: "red",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  button: {
    backgroundColor: "green",
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  winnigBox: {
    position: "absolute",
    top: "75%",
    left: "17%",
    // borderWidth:1,
    // borderColor:"white"
  },
  resultText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "600",
    color: "white",
  },
  WiningText: {
    fontSize: 26,
    fontWeight: "bold",
    color: "yellow",
  },
  resultNumber: {
    color: "lightgreen",
    fontSize: 36,
    fontWeight: "900",
    marginTop: 10,
  },
  indicatorContainer: {
    position: "absolute",
    top: "32.8%",
    left: 147,
    alignItems: "center",
    zIndex: 9999,
  },
  indicator: {
    width: 15,
    height: 30,
    alignItems: "center",
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderTopWidth: 20,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "transparent",
    borderTopColor: "yellow",
  },
  spin: {
    position: "absolute",
    top: "45%",
    left: "33%",
    width: 70,
    height: 70,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    shadowOffset: { width: 52, height: 52 },
    shadowOpacity: 8,
    elevation: 7,
    shadowColor: "black",
  },
  spinText: {
    fontSize: 18,
    fontWeight: "800",
  },
});

export default SpinWheelGame;
