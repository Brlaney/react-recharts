import React, { ReactNode } from 'react'

export interface IReference {
  id: number;
  text: string;
}

export interface IData {
  id: number;
  State: string;
  Number: number;
  Percent: number;
}

export interface ITitle {
  id: number;
  title: string;
  type: string;
  total: number;
  percent: number;
}

class title implements ITitle {
  id!: number;
  title!: string;
  type!: string;
  total!: number;
  percent!: number;
  static title: ReactNode;
  static type: ReactNode;
}