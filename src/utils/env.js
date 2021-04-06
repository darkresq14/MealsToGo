import { Platform } from "react-native";

const liveHost = "https://us-central1-mealstogo-e6763.cloudfunctions.net";
const localHost = "http://127.0.0.1:5001/mealstogo-e6763/us-central1";

export const isAndroid = Platform.OS === "android";

export const isDevelopment = process.env.NODE_ENV === "development";

export const host = !isDevelopment || isAndroid ? liveHost : localHost;

export const isMock = false;
