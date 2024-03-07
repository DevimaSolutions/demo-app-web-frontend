export enum UserRole {
  User = 'user',
  Admin = 'admin',
}

export enum AuthAccessLevel {
  Public,
  Authorized,
  Unauthorized,
}

export enum UserStatus {
  Pending = 'pending',
  Active = 'active',
  Blocked = 'blocked',
}
