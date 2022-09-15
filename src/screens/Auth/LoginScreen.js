import React, { useState } from "react";
import {
  Keyboard,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Alert,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { Ionicons } from "@expo/vector-icons";
import LottieView from "lottie-react-native";

import { AppTextInput, AuthButton, Screen } from "../../components";
import { colors, fonts } from "../../constants";
import { useAuthContext } from "../../contexts/AuthProvider";
import helloAnimation from "../../../assets/animations/login-hello.json";

export default function LoginScreen({ navigation }) {
  const { login } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);
  const [isRememberMeChecked, setIsRememberMeChecked] = useState(true);

  const validationSchema = Yup.object().shape({
    email: Yup.string().min(3).max(255).email().required().label("Email"),
    password: Yup.string().min(6).max(255).required().label("Password"),
  });

  const handleSubmit = async (values) => {
    try {
      setIsLoading(true);
      await login(values.email, values.password);
    } catch (err) {
      setIsLoading(false);
      console.log(err.message);
      Alert.alert("Something went wrong!", err.message);
    }
  };

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Screen paddingT>
          <View style={styles.animationContainer}>
            <LottieView
              autoPlay
              loop={false}
              style={styles.animation}
              source={helloAnimation}
            />
          </View>

          <View style={styles.header}>
            <Text style={styles.title}>Hi, Welcome Back!👋</Text>
            <Text style={styles.subtitle}>
              You&apos;ve been missed. Please login!
            </Text>
          </View>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {({ handleChange, errors, handleSubmit, values }) => (
              <>
                <View style={styles.form}>
                  <View style={styles.inputContainer}>
                    <AppTextInput
                      label="Email address"
                      placeholder="Email Address"
                      keyboardType="email-address"
                      autoCapitalize="none"
                      value={values.email}
                      onChangeText={handleChange("email")}
                      error={errors.email}
                    />
                  </View>

                  <View style={styles.inputContainer}>
                    <AppTextInput
                      label="Password"
                      placeholder="Enter your password"
                      secureTextEntry
                      value={values.password}
                      icon="eye-off"
                      autoCapitalize="none"
                      onChangeText={handleChange("password")}
                      error={errors.password}
                    />
                  </View>

                  <View style={styles.forgotPasswordContainer}>
                    <Pressable
                      style={styles.forgotPasswordCheckBox}
                      onPress={() => setIsRememberMeChecked((prev) => !prev)}
                    >
                      <Ionicons
                        name={
                          isRememberMeChecked ? "checkbox" : "checkbox-outline"
                        }
                        size={24}
                        color={colors.green}
                      />
                      <Text style={styles.remeberMeText}>Remember me</Text>
                    </Pressable>
                    <TouchableOpacity>
                      <Text style={styles.forgotPasswordText}>
                        Forgot password
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.bottom}>
                  <AuthButton
                    title="Log in"
                    isLoading={isLoading}
                    onPress={handleSubmit}
                    full
                  />
                  <TouchableOpacity
                    style={styles.bottomTextContainer}
                    onPress={() => navigation.navigate("Signup")}
                  >
                    <Text style={styles.bottomText}>
                      Don’t have an account?{" "}
                      <Text style={styles.bottomTextLink}>Create one</Text>
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </Screen>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: fonts.weight.semiBold,
  },
  subtitle: {
    fontWeight:
      Platform.OS === "ios" ? fonts.weight.medium : fonts.weight.semiBold,
    color: colors.dark,
    opacity: 0.5,
  },
  animationContainer: {
    alignItems: "center",
  },
  animation: {
    width: 180,
    height: 180,
  },
  form: {
    marginVertical: 50,
  },
  inputContainer: {
    marginBottom: 24,
  },
  forgotPasswordContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  forgotPasswordCheckBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  remeberMeText: {
    marginLeft: 4,
  },
  forgotPasswordText: {
    color: colors.red,
    fontWeight: fonts.weight.bold,
  },
  bottom: {
    alignItems: "center",
    paddingBottom: 16,
  },
  bottomTextContainer: {
    alignSelf: "center",
  },
  bottomText: {
    marginTop: 10,
    fontSize: fonts.size.m,
    fontWeight: fonts.weight.semiBold,
    color: colors.dark,
  },
  bottomTextLink: {
    color: colors.green,
    fontWeight: fonts.weight.bold,
  },
});
