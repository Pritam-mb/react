import Config from "../config/Config";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    storage;

    constructor() {
        this.client
            .setEndpoint(Config.appwriteurl)
            .setProject(Config.appwriteprojectid);
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    async createPost({ title, slug, content, featureimg, status, userid }) {
        try {
            return await this.databases.createDocument(
                Config.appwritedatabaseid,
                Config.appwritecollectionid,
                slug,
                { title, content, featureimg, status, userid }
            );
        } catch (error) {
            console.log("Appwrite createPost error:", error);
        }
    }

    async updatepost(slug, { title, content, featureimg, status }) {
        try {
            return await this.databases.updateDocument(
                Config.appwritedatabaseid,
                Config.appwritecollectionid,
                slug,
                { title, content, featureimg, status }
            );
        } catch (error) {
            console.log("Appwrite updatePost error:", error);
        }
    }

    async deletepost(slug) {
        try {
            await this.databases.deleteDocument(
                Config.appwritedatabaseid,
                Config.appwritecollectionid,
                slug
            );
            return true;
        } catch (error) {
            console.log("Appwrite deletePost error:", error);
            return false;
        }
    }

    async getpost(slug) {
        try {
            return await this.databases.getDocument(
                Config.appwritedatabaseid,
                Config.appwritecollectionid,
                slug
            );
        } catch (error) {
            console.log("Appwrite getPost error:", error);
        }
    }

    async getposts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                Config.appwritedatabaseid,
                Config.appwritecollectionid,
                queries
            );
        } catch (error) {
            console.log("Appwrite getPosts error:", error);
        }
    }

    async uploadfile(file) {
        try {
            console.log("Uploading file to bucket:", Config.appwritebucketid);
            return await this.storage.createFile(
                Config.appwritebucketid,
                ID.unique(),
                file
            );
        } catch (error) {
            console.log("Appwrite uploadFile error:", error);
            return false;
        }
    }

    async deletefile(fileid) {
        try {
            await this.storage.deleteFile(Config.appwritebucketid, fileid);
            return true;
        } catch (error) {
            console.log("Appwrite deleteFile error:", error);
            return false;
        }
    }

    getfilepreview(fileid) {
        return this.storage.getFilePreview(Config.appwritebucketid, fileid);
    }

    async testConnection() {
        try {
            const result = await this.storage.listFiles(Config.appwritebucketid);
            console.log("Bucket access successful:", result);
            return true;
        } catch (error) {
            console.error("Bucket access failed:", error);
            return false;
        }
    }
}

const service = new Service();
export default service;
