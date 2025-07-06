import "dotenv/config";
import { ExpoConfig, ConfigContext } from "@expo/config";

export default ({ config }: ConfigContext): ExpoConfig => {
  const ENV = process.env.ENV || "dev";

  let name = "Torneo Guillermito 2025";
  let slug = "expo-guillermito";
  let bundleIdentifier = "com.efihumboldt.guillermito_app";
  let androidPackage = "com.efihumboldt.guillermito_app";

  if (ENV === "development") {
    name = "Torneo Guillermito Dev";
    bundleIdentifier = "com.efihumboldt.guillermito_app_dev";
    androidPackage = "com.efihumboldt.guillermito_app_dev";
  } else if (ENV === "preview") {
    name = "Torneo Guillermito Preview";
    bundleIdentifier = "com.efihumboldt.guillermito_app_prev";
    androidPackage = "com.efihumboldt.guillermito_app_prev";
  } else if (ENV === "production") {
    name = "Torneo Guillermito 2025";
    bundleIdentifier = "com.efihumboldt.guillermito_app";
    androidPackage = "com.efihumboldt.guillermito_app";
  }

  return {
    ...config,
    name: name,
    slug: slug,
    ios: {
      ...config.ios,
      bundleIdentifier: bundleIdentifier,
    },
    android: {
      ...config.android,
      package: androidPackage,
    },
    plugins: [...(config.plugins || [])],
    extra: {
      ...config.extra,
      ENV,
    },
  };
};
