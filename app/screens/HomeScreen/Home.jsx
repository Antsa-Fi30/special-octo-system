import { StyleSheet, View } from "react-native";
import { useState } from "react";
import axios from "axios";
import { Button, Text } from "react-native-paper";

const Home = () => {
  const [simulationData, setSimulationData] = useState(null);

  const simulateCooling = async () => {
    try {
      const response = await axios.post("http://localhost:3000/simulate", {
        T_initial: 100.0,
        T_ambient: 25.0,
        k: 0.1,
        dt: 0.1,
        time_period: 10.0,
      });
      setSimulationData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Button mode="contained" onPress={simulateCooling}>
        Simuler le refroidissement
      </Button>
      {simulationData && (
        <View style={{ marginVertical: 15 }}>
          <Text>Temps (s) : {simulationData.times.join(", ")}</Text>
          <Text>
            Températures (°C) : {simulationData.temperatures.join(", ")}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
