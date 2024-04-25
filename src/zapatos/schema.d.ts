/*
** DON'T EDIT THIS FILE **
It's been generated by Zapatos, and is liable to be overwritten

Zapatos: https://jawj.github.io/zapatos/
Copyright (C) 2020 - 2023 George MacKerron
Released under the MIT licence: see LICENCE file
*/

declare module 'zapatos/schema' {

  import type * as db from 'zapatos/db';

  // got a type error on schemaVersionCanary below? update by running `npx zapatos`
  export interface schemaVersionCanary extends db.SchemaVersionCanary { version: 104 }


  /* === schema: public === */

  /* --- enums --- */
  /* (none) */

  /* --- tables --- */

  /**
   * **posts**
   * - Table in database
   */
  export namespace posts {
    export type Table = 'posts';
    export interface Selectable {
      /**
      * **posts.content**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      content: string;
      /**
      * **posts.created_at**
      * - `timestamp` in database
      * - Nullable, default: `CURRENT_TIMESTAMP`
      */
      created_at: Date | null;
      /**
      * **posts.id**
      * - `uuid` in database
      * - `NOT NULL`, default: `uuid_generate_v4()`
      */
      id: string;
      /**
      * **posts.status**
      * - `varchar` in database
      * - Nullable, default: `'draft'::character varying`
      */
      status: string | null;
      /**
      * **posts.title**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      title: string;
      /**
      * **posts.updated_at**
      * - `timestamp` in database
      * - Nullable, default: `CURRENT_TIMESTAMP`
      */
      updated_at: Date | null;
    }
    export interface JSONSelectable {
      /**
      * **posts.content**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      content: string;
      /**
      * **posts.created_at**
      * - `timestamp` in database
      * - Nullable, default: `CURRENT_TIMESTAMP`
      */
      created_at: db.TimestampString | null;
      /**
      * **posts.id**
      * - `uuid` in database
      * - `NOT NULL`, default: `uuid_generate_v4()`
      */
      id: string;
      /**
      * **posts.status**
      * - `varchar` in database
      * - Nullable, default: `'draft'::character varying`
      */
      status: string | null;
      /**
      * **posts.title**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      title: string;
      /**
      * **posts.updated_at**
      * - `timestamp` in database
      * - Nullable, default: `CURRENT_TIMESTAMP`
      */
      updated_at: db.TimestampString | null;
    }
    export interface Whereable {
      /**
      * **posts.content**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      content?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
      /**
      * **posts.created_at**
      * - `timestamp` in database
      * - Nullable, default: `CURRENT_TIMESTAMP`
      */
      created_at?: (db.TimestampString | Date) | db.Parameter<(db.TimestampString | Date)> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, (db.TimestampString | Date) | db.Parameter<(db.TimestampString | Date)> | db.SQLFragment | db.ParentColumn>;
      /**
      * **posts.id**
      * - `uuid` in database
      * - `NOT NULL`, default: `uuid_generate_v4()`
      */
      id?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
      /**
      * **posts.status**
      * - `varchar` in database
      * - Nullable, default: `'draft'::character varying`
      */
      status?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
      /**
      * **posts.title**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      title?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
      /**
      * **posts.updated_at**
      * - `timestamp` in database
      * - Nullable, default: `CURRENT_TIMESTAMP`
      */
      updated_at?: (db.TimestampString | Date) | db.Parameter<(db.TimestampString | Date)> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, (db.TimestampString | Date) | db.Parameter<(db.TimestampString | Date)> | db.SQLFragment | db.ParentColumn>;
    }
    export interface Insertable {
      /**
      * **posts.content**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      content: string | db.Parameter<string> | db.SQLFragment;
      /**
      * **posts.created_at**
      * - `timestamp` in database
      * - Nullable, default: `CURRENT_TIMESTAMP`
      */
      created_at?: (db.TimestampString | Date) | db.Parameter<(db.TimestampString | Date)> | null | db.DefaultType | db.SQLFragment;
      /**
      * **posts.id**
      * - `uuid` in database
      * - `NOT NULL`, default: `uuid_generate_v4()`
      */
      id?: string | db.Parameter<string> | db.DefaultType | db.SQLFragment;
      /**
      * **posts.status**
      * - `varchar` in database
      * - Nullable, default: `'draft'::character varying`
      */
      status?: string | db.Parameter<string> | null | db.DefaultType | db.SQLFragment;
      /**
      * **posts.title**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      title: string | db.Parameter<string> | db.SQLFragment;
      /**
      * **posts.updated_at**
      * - `timestamp` in database
      * - Nullable, default: `CURRENT_TIMESTAMP`
      */
      updated_at?: (db.TimestampString | Date) | db.Parameter<(db.TimestampString | Date)> | null | db.DefaultType | db.SQLFragment;
    }
    export interface Updatable {
      /**
      * **posts.content**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      content?: string | db.Parameter<string> | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment>;
      /**
      * **posts.created_at**
      * - `timestamp` in database
      * - Nullable, default: `CURRENT_TIMESTAMP`
      */
      created_at?: (db.TimestampString | Date) | db.Parameter<(db.TimestampString | Date)> | null | db.DefaultType | db.SQLFragment | db.SQLFragment<any, (db.TimestampString | Date) | db.Parameter<(db.TimestampString | Date)> | null | db.DefaultType | db.SQLFragment>;
      /**
      * **posts.id**
      * - `uuid` in database
      * - `NOT NULL`, default: `uuid_generate_v4()`
      */
      id?: string | db.Parameter<string> | db.DefaultType | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | db.DefaultType | db.SQLFragment>;
      /**
      * **posts.status**
      * - `varchar` in database
      * - Nullable, default: `'draft'::character varying`
      */
      status?: string | db.Parameter<string> | null | db.DefaultType | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | null | db.DefaultType | db.SQLFragment>;
      /**
      * **posts.title**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      title?: string | db.Parameter<string> | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment>;
      /**
      * **posts.updated_at**
      * - `timestamp` in database
      * - Nullable, default: `CURRENT_TIMESTAMP`
      */
      updated_at?: (db.TimestampString | Date) | db.Parameter<(db.TimestampString | Date)> | null | db.DefaultType | db.SQLFragment | db.SQLFragment<any, (db.TimestampString | Date) | db.Parameter<(db.TimestampString | Date)> | null | db.DefaultType | db.SQLFragment>;
    }
    export type UniqueIndex = 'posts_pkey';
    export type Column = keyof Selectable;
    export type OnlyCols<T extends readonly Column[]> = Pick<Selectable, T[number]>;
    export type SQLExpression = Table | db.ColumnNames<Updatable | (keyof Updatable)[]> | db.ColumnValues<Updatable> | Whereable | Column | db.ParentColumn | db.GenericSQLExpression;
    export type SQL = SQLExpression | SQLExpression[];
  }

  /**
   * **schema_migrations**
   * - Table in database
   */
  export namespace schema_migrations {
    export type Table = 'schema_migrations';
    export interface Selectable {
      /**
      * **schema_migrations.version**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      version: string;
    }
    export interface JSONSelectable {
      /**
      * **schema_migrations.version**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      version: string;
    }
    export interface Whereable {
      /**
      * **schema_migrations.version**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      version?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
    }
    export interface Insertable {
      /**
      * **schema_migrations.version**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      version: string | db.Parameter<string> | db.SQLFragment;
    }
    export interface Updatable {
      /**
      * **schema_migrations.version**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      version?: string | db.Parameter<string> | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment>;
    }
    export type UniqueIndex = 'schema_migrations_pkey';
    export type Column = keyof Selectable;
    export type OnlyCols<T extends readonly Column[]> = Pick<Selectable, T[number]>;
    export type SQLExpression = Table | db.ColumnNames<Updatable | (keyof Updatable)[]> | db.ColumnValues<Updatable> | Whereable | Column | db.ParentColumn | db.GenericSQLExpression;
    export type SQL = SQLExpression | SQLExpression[];
  }

  /**
   * **users**
   * - Table in database
   */
  export namespace users {
    export type Table = 'users';
    export interface Selectable {
      /**
      * **users.email**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      email: string;
      /**
      * **users.id**
      * - `uuid` in database
      * - `NOT NULL`, default: `uuid_generate_v4()`
      */
      id: string;
      /**
      * **users.name**
      * - `varchar` in database
      * - Nullable, no default
      */
      name: string | null;
      /**
      * **users.password**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      password: string;
    }
    export interface JSONSelectable {
      /**
      * **users.email**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      email: string;
      /**
      * **users.id**
      * - `uuid` in database
      * - `NOT NULL`, default: `uuid_generate_v4()`
      */
      id: string;
      /**
      * **users.name**
      * - `varchar` in database
      * - Nullable, no default
      */
      name: string | null;
      /**
      * **users.password**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      password: string;
    }
    export interface Whereable {
      /**
      * **users.email**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      email?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
      /**
      * **users.id**
      * - `uuid` in database
      * - `NOT NULL`, default: `uuid_generate_v4()`
      */
      id?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
      /**
      * **users.name**
      * - `varchar` in database
      * - Nullable, no default
      */
      name?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
      /**
      * **users.password**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      password?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
    }
    export interface Insertable {
      /**
      * **users.email**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      email: string | db.Parameter<string> | db.SQLFragment;
      /**
      * **users.id**
      * - `uuid` in database
      * - `NOT NULL`, default: `uuid_generate_v4()`
      */
      id?: string | db.Parameter<string> | db.DefaultType | db.SQLFragment;
      /**
      * **users.name**
      * - `varchar` in database
      * - Nullable, no default
      */
      name?: string | db.Parameter<string> | null | db.DefaultType | db.SQLFragment;
      /**
      * **users.password**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      password: string | db.Parameter<string> | db.SQLFragment;
    }
    export interface Updatable {
      /**
      * **users.email**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      email?: string | db.Parameter<string> | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment>;
      /**
      * **users.id**
      * - `uuid` in database
      * - `NOT NULL`, default: `uuid_generate_v4()`
      */
      id?: string | db.Parameter<string> | db.DefaultType | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | db.DefaultType | db.SQLFragment>;
      /**
      * **users.name**
      * - `varchar` in database
      * - Nullable, no default
      */
      name?: string | db.Parameter<string> | null | db.DefaultType | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | null | db.DefaultType | db.SQLFragment>;
      /**
      * **users.password**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      password?: string | db.Parameter<string> | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment>;
    }
    export type UniqueIndex = 'users_email_key' | 'users_pkey';
    export type Column = keyof Selectable;
    export type OnlyCols<T extends readonly Column[]> = Pick<Selectable, T[number]>;
    export type SQLExpression = Table | db.ColumnNames<Updatable | (keyof Updatable)[]> | db.ColumnValues<Updatable> | Whereable | Column | db.ParentColumn | db.GenericSQLExpression;
    export type SQL = SQLExpression | SQLExpression[];
  }

  /* --- aggregate types --- */

  export namespace public {  
    export type Table = posts.Table | schema_migrations.Table | users.Table;
    export type Selectable = posts.Selectable | schema_migrations.Selectable | users.Selectable;
    export type JSONSelectable = posts.JSONSelectable | schema_migrations.JSONSelectable | users.JSONSelectable;
    export type Whereable = posts.Whereable | schema_migrations.Whereable | users.Whereable;
    export type Insertable = posts.Insertable | schema_migrations.Insertable | users.Insertable;
    export type Updatable = posts.Updatable | schema_migrations.Updatable | users.Updatable;
    export type UniqueIndex = posts.UniqueIndex | schema_migrations.UniqueIndex | users.UniqueIndex;
    export type Column = posts.Column | schema_migrations.Column | users.Column;
  
    export type AllBaseTables = [posts.Table, schema_migrations.Table, users.Table];
    export type AllForeignTables = [];
    export type AllViews = [];
    export type AllMaterializedViews = [];
    export type AllTablesAndViews = [posts.Table, schema_migrations.Table, users.Table];
  }



  /* === global aggregate types === */

  export type Schema = 'public';
  export type Table = public.Table;
  export type Selectable = public.Selectable;
  export type JSONSelectable = public.JSONSelectable;
  export type Whereable = public.Whereable;
  export type Insertable = public.Insertable;
  export type Updatable = public.Updatable;
  export type UniqueIndex = public.UniqueIndex;
  export type Column = public.Column;

  export type AllSchemas = ['public'];
  export type AllBaseTables = [...public.AllBaseTables];
  export type AllForeignTables = [...public.AllForeignTables];
  export type AllViews = [...public.AllViews];
  export type AllMaterializedViews = [...public.AllMaterializedViews];
  export type AllTablesAndViews = [...public.AllTablesAndViews];


  /* === lookups === */

  export type SelectableForTable<T extends Table> = {
    "posts": posts.Selectable;
    "schema_migrations": schema_migrations.Selectable;
    "users": users.Selectable;
  }[T];

  export type JSONSelectableForTable<T extends Table> = {
    "posts": posts.JSONSelectable;
    "schema_migrations": schema_migrations.JSONSelectable;
    "users": users.JSONSelectable;
  }[T];

  export type WhereableForTable<T extends Table> = {
    "posts": posts.Whereable;
    "schema_migrations": schema_migrations.Whereable;
    "users": users.Whereable;
  }[T];

  export type InsertableForTable<T extends Table> = {
    "posts": posts.Insertable;
    "schema_migrations": schema_migrations.Insertable;
    "users": users.Insertable;
  }[T];

  export type UpdatableForTable<T extends Table> = {
    "posts": posts.Updatable;
    "schema_migrations": schema_migrations.Updatable;
    "users": users.Updatable;
  }[T];

  export type UniqueIndexForTable<T extends Table> = {
    "posts": posts.UniqueIndex;
    "schema_migrations": schema_migrations.UniqueIndex;
    "users": users.UniqueIndex;
  }[T];

  export type ColumnForTable<T extends Table> = {
    "posts": posts.Column;
    "schema_migrations": schema_migrations.Column;
    "users": users.Column;
  }[T];

  export type SQLForTable<T extends Table> = {
    "posts": posts.SQL;
    "schema_migrations": schema_migrations.SQL;
    "users": users.SQL;
  }[T];

}
