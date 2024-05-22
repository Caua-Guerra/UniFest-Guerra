import { useState } from "react";
import { Button, Text, TextInput } from "react-native-paper";
import AlignedLogin from "../../components/AlignedLogin";
import { width } from "../../constants/measures";
import { StyleSheet, View } from "react-native";
import { signInWithEmail } from "../../lib/supabase/auth";

interface Props {
  navigation: any;
}

export default function Login(props: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function tryLogin(email: string, password: string) {
    const error = await signInWithEmail(email, password);
    
    if (error) {
      console.log("Error", error.message);
      return;
    }

    props.navigation.navigate("Home");
  }

  return (
    <AlignedLogin>
      <View style={styles.title}>
        <Text style={styles.title}>Log in</Text>
        <TextInput 
          value={email}
          onChangeText={setEmail}
          style={styles.generic}
          label="Email"
        />
        <TextInput 
          value={password}
          onChangeText={setPassword}
          style={styles.generic}
          label="Password"
          />
        <Button 
         style={styles.generic} 
         mode="contained"
         onPress={()=>tryLogin(email, password)}
        >
          Log in
        </Button>
        <Button
          style={styles.generic}
          mode="contained-tonal"
          onPress={() => props.navigation.navigate("Register")}
        >
          Sign up
        </Button>
      </View>
    </AlignedLogin>
  );
}

const styles = StyleSheet.create({
  generic: {
    width: width * 0.8,
    marginBottom: 12,
  },
  form: {
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 32,
    marginBottom: 16,
  },
});
