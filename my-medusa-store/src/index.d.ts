export declare module "@medusajs/medusa/dist/models/store" {
  declare interface Store {
    members?: User[];
  }
}

export declare module "@medusajs/medusa/dist/models/user" {
  declare interface User {
    store_id?: string;
    store?: Store;
  }
}
