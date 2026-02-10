declare module "mfeAuth/LoginScreen" {
  const LoginScreen: React.ComponentType;
  export default LoginScreen;
}

declare module "mfeAuth/RegisterScreen" {
  const RegisterScreen: React.ComponentType;
  export default RegisterScreen;
}

declare module "mfeAuth/ProfileScreen" {
  const ProfileScreen: React.ComponentType;
  export default ProfileScreen;
}

declare module "mfeAuth/AuthProvider" {
  export const AuthProvider: React.ComponentType<{ children: React.ReactNode }>;
}
