import sqlite3 from "sqlite3";
import { open } from "sqlite";
import { dirname } from 'path';

export async function connectSqlite() {
    return await open({
        filename: (dirname, "./database/projects.db"),
        driver: sqlite3.Database
    });
};