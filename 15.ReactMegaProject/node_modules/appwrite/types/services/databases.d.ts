import { Client } from '../client';
import type { Models } from '../models';
export declare class Databases {
    client: Client;
    constructor(client: Client);
    /**
     * Get a list of all the user&#039;s documents in a given collection. You can use the query params to filter your results.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise<Models.DocumentList<Document>>}
     */
    listDocuments<Document extends Models.Document = Models.DefaultDocument>(databaseId: string, collectionId: string, queries?: string[]): Promise<Models.DocumentList<Document>>;
    /**
     * Create a new Document. Before using this route, you should create a new collection resource using either a [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection) API or directly from your database console.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} documentId
     * @param {Document extends Models.DefaultDocument ? Models.DataWithoutDocumentKeys : Omit<Document, keyof Models.Document>} data
     * @param {string[]} permissions
     * @throws {AppwriteException}
     * @returns {Promise<Document>}
     */
    createDocument<Document extends Models.Document = Models.DefaultDocument>(databaseId: string, collectionId: string, documentId: string, data: Document extends Models.DefaultDocument ? Models.DataWithoutDocumentKeys : Omit<Document, keyof Models.Document>, permissions?: string[]): Promise<Document>;
    /**
     * Get a document by its unique ID. This endpoint response returns a JSON object with the document data.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} documentId
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise<Document>}
     */
    getDocument<Document extends Models.Document = Models.DefaultDocument>(databaseId: string, collectionId: string, documentId: string, queries?: string[]): Promise<Document>;
    /**
     * **WARNING: Experimental Feature** - This endpoint is experimental and not yet officially supported. It may be subject to breaking changes or removal in future versions.
     *
     * Create or update a Document. Before using this route, you should create a new collection resource using either a [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection) API or directly from your database console.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} documentId
     * @param {object} data
     * @param {string[]} permissions
     * @throws {AppwriteException}
     * @returns {Promise<Document>}
     */
    upsertDocument<Document extends Models.Document = Models.DefaultDocument>(databaseId: string, collectionId: string, documentId: string, data: object, permissions?: string[]): Promise<Document>;
    /**
     * Update a document by its unique ID. Using the patch method you can pass only specific fields that will get updated.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} documentId
     * @param {Partial<Document extends Models.DefaultDocument ? Models.DataWithoutDocumentKeys : Omit<Document, keyof Models.Document>>} data
     * @param {string[]} permissions
     * @throws {AppwriteException}
     * @returns {Promise<Document>}
     */
    updateDocument<Document extends Models.Document = Models.DefaultDocument>(databaseId: string, collectionId: string, documentId: string, data?: Partial<Document extends Models.DefaultDocument ? Models.DataWithoutDocumentKeys : Omit<Document, keyof Models.Document>>, permissions?: string[]): Promise<Document>;
    /**
     * Delete a document by its unique ID.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} documentId
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteDocument(databaseId: string, collectionId: string, documentId: string): Promise<{}>;
    /**
     * Decrement a specific attribute of a document by a given value.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} documentId
     * @param {string} attribute
     * @param {number} value
     * @param {number} min
     * @throws {AppwriteException}
     * @returns {Promise<Document>}
     */
    decrementDocumentAttribute<Document extends Models.Document = Models.DefaultDocument>(databaseId: string, collectionId: string, documentId: string, attribute: string, value?: number, min?: number): Promise<Document>;
    /**
     * Increment a specific attribute of a document by a given value.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} documentId
     * @param {string} attribute
     * @param {number} value
     * @param {number} max
     * @throws {AppwriteException}
     * @returns {Promise<Document>}
     */
    incrementDocumentAttribute<Document extends Models.Document = Models.DefaultDocument>(databaseId: string, collectionId: string, documentId: string, attribute: string, value?: number, max?: number): Promise<Document>;
}
