export interface State {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface Action {
  type: string;
  field: string;
  value: string;
}

