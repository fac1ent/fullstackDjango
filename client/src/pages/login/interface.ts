import React, {memo} from "react";

export interface State {
  email: string;
  password: string;
}

export interface Action {
  type: string;
  field: string;
  value: string;
}
