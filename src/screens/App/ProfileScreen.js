import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";

import { colors, fonts } from "../../constants";
import { useAuthContext } from "../../contexts/AuthProvider";

export default function ProfileScreen() {
  const { currentUser, logout } = useAuthContext();

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.userInfoContainer}>
          <TouchableOpacity onPress={logout}>
            <View style={styles.userImage}>
              <Ionicons name="person-outline" size={65} color="#a1a1a1" />
              <TouchableOpacity style={styles.editIcon}>
                <MaterialCommunityIcons
                  name="pencil-outline"
                  size={20}
                  color={colors.white}
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          <Text style={styles.userName}>{currentUser.displayName}</Text>
        </View>

        <View style={styles.settingsContainer}>
          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingIconContainer}>
              <MaterialCommunityIcons
                name="lock-outline"
                size={24}
                color="black"
              />
            </View>
            <Text style={styles.settingtext}>Change Login password</Text>

            <MaterialCommunityIcons
              name="chevron-right"
              size={28}
              color={colors.darkGrey}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingIconContainer}>
              <MaterialCommunityIcons
                name="lock-outline"
                size={24}
                color="black"
              />
            </View>
            <Text style={styles.settingtext}>Support</Text>

            <MaterialCommunityIcons
              name="chevron-right"
              size={28}
              color={colors.darkGrey}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingIconContainer}>
              <MaterialCommunityIcons
                name="lock-outline"
                size={24}
                color="black"
              />
            </View>
            <Text style={styles.settingtext}>Privacy and Security</Text>

            <MaterialCommunityIcons
              name="chevron-right"
              size={28}
              color={colors.darkGrey}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingIconContainer}>
              <MaterialCommunityIcons
                name="lock-outline"
                size={24}
                color="black"
              />
            </View>
            <Text style={[styles.settingtext, styles.logoutText]}>Log out</Text>

            <MaterialCommunityIcons
              name="chevron-right"
              size={28}
              color={colors.darkGrey}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grey,
  },
  userInfoContainer: {
    height: 270,
    alignItems: "center",
    paddingVertical: 25,
    justifyContent: "center",
  },
  userImage: {
    backgroundColor: colors.white,
    width: 120,
    height: 120,
    borderRadius: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  editIcon: {
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: colors.green,
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  userName: {
    fontSize: fonts.size.l,
    fontWeight: fonts.weight.semiBold,
    color: colors.secondary,
    marginTop: 20,
  },
  settingsContainer: {
    backgroundColor: colors.white,
    flex: 1,
    borderTopRightRadius: 36,
    borderTopLeftRadius: 36,
    paddingTop: 60,
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 30,
    paddingVertical: 15,
    borderColor: colors.lightGreyPlus,
    borderTopWidth: 1,
  },
  settingIconContainer: {
    width: 60,
    height: 60,
    backgroundColyor: colors.grey,
    borderRadius: 20,
    marginRight: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  settingtext: {
    flex: 1,
    fontSize: fonts.size.ml,
    // fontWeight: fonts.weight.medium,
  },
  logoutText: {
    color: colors.red,
  },
});
