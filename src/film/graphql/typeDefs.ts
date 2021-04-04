/*
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

/**
 * Das Modul enthält die _Typdefinitionen_ für GraphQL, die mit einem _Tagged
 * Template String_ für Apollo realisiert sind.
 *
 * Vordefinierte skalare Typen
 * - Int: 32‐bit Integer
 * - Float: Gleitkommmazahl mit doppelter Genauigkeit
 * - String:
 * - Boolean: true, false
 * - ID: eindeutiger Bezeichner, wird serialisiert wie ein String
 *
 * `Film`: eigene Typdefinition für Queries. `!` markiert Pflichtfelder
 *
 * `Query`: Signatur der Lese-Methoden
 *
 * `Mutation`: Signatur der Schreib-Methoden
 * @packageDocumentation
 */

import { gql } from 'apollo-server-express';

// https://www.apollographql.com/docs/apollo-server/migration-two-dot/#the-gql-tag
// https://www.apollographql.com/docs/apollo-server/schema/schema

/**
 * _Tagged Template String_, d.h. der Template-String wird durch eine Funktion
 * (hier: `gql`) modifiziert. Die Funktion `gql` wird für Syntax-Highlighting
 * und für die Formatierung durch Prettier verwendet.
 */
export const typeDefs = gql`
    "Enum-Typ fuer das Genre eines Films"
    enum Genre {
        DOKUMENTATION
        KOMOEDIE
        DRAMA
        HORROR
        ACTION
    }

    "Enum-Typ fuer das Produktionsstudio eines Films"
    enum ProduktionsStudio {
        DISNEY
        UNIVERSAL
        WARNERBROS
    }

    "Datenschema eines Films, das empfangen oder gesendet wird"
    type Film {
        id: ID!
        version: Int
        titel: String!
        bewertung: Int
        genre: Genre
        produktionsStudio: ProduktionsStudio!
        preis: Float
        rabatt: Float
        verfuegbarkeit: Boolean
        veroeffentlichung: String
        beschreibung: String
        website: String
        schauspieler: [String]
        spieldauer: Int
    }

    "Funktionen, um Filme zu empfangen"
    type Query {
        filme(titel: String): [Film]
        film(id: ID!): Film
    }

    "Funktionen, um Filme anzulegen, zu aktualisieren oder zu loeschen"
    type Mutation {
        createFilm(
            titel: String!
            bewertung: Int
            genre: Genre
            produktionsStudio: ProduktionsStudio!
            preis: Float
            rabatt: Float
            verfuegbarkeit: Boolean
            veroeffentlichung: String
            beschreibung: String
            website: String
            schauspieler: [String]
            spieldauer: Int
        ): String
        updateFilm(
            id: ID!
            titel: String!
            bewertung: Int
            genre: Genre
            produktionsStudio: ProduktionsStudio!
            preis: Float
            rabatt: Float
            verfuegbarkeit: Boolean
            veroeffentlichung: String
            beschreibung: String
            website: String
            schauspieler: [String]
            spieldauer: Int
            version: Int
        ): Int
        deleteFilm(id: ID!): Boolean
    }
`;
