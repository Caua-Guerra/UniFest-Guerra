import { View, StyleSheet } from "react-native";
import AlignedLogin from "../../components/AlignedLogin";
import { Button, Text, TextInput } from "react-native-paper";
import { width } from "../../constants/measures";
import { signUpWithEmail } from "../../lib/supabase/auth";
import { useState } from "react";
import User from "../../types/User";
import LoginError from "../../types/LoginError";

interface Props {
  navigation: any
}

export default function Register(props: Props) {
  const [user, setUser] = useState<User>({
    email: "",
    password: "",
    fullName: "",
    age: 0,
    phone: "",
    cpf: "",
  });

  const [error, setError] = useState<{
    hasError: boolean, 
    errorType: LoginError
  }>()

  console.log(user)

  async function tryRegister(userData: User) {

    




    const result = await signUpWithEmail(userData)
    console.log(result)

    if (result.error) {
      console.log('ERROR DE XYZ', result.error)
      return
    }  

    console.log("DEU BOM")
    props.navigation.navigate("Login")
  }
  return (
    <AlignedLogin>
      <View style={styles.title}>
        <Text style={styles.title}>Sign up</Text>
        <TextInput 
          maxLength={70} 
          style={styles.generic} 
          label="Email" 
          value={user.email}
          keyboardType="email-address"
          onChangeText={(text) => setUser({...user, email: text})}
        />
        <TextInput 
          maxLength={16} 
          style={styles.generic} 
          label="Password" 
          value={user.password}
          onChangeText={(text) => setUser({...user, password: text})}
        />
        <TextInput
          maxLength={70}
          style={styles.generic}
          label="Nome Completo"
          value={user.fullName}
          onChangeText={(text) => setUser({...user, fullName: text})}
        />
        <TextInput 
          maxLength={3} 
          style={styles.generic} 
          label="Age"
          value={user.age.toString()}
          keyboardType="numeric"
          onChangeText={(text) => setUser({...user, age: Number(text)})}
        />
        <TextInput 
          maxLength={11} 
          style={styles.generic} 
          label="Phone" 
          value={user.phone}
          keyboardType="phone-pad"
          onChangeText={(text) => setUser({...user, phone: text})}
        />
        <TextInput 
          maxLength={14} 
          style={styles.generic} 
          label="CPF" 
          value={user.cpf}
          onChangeText={(text) => setUser({...user, cpf: text})}
        />
        <Button style={styles.generic} mode="contained" onPress={() => tryRegister(user)}>
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
