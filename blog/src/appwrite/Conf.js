import Config from "../config/Config";
import {Client,ID,Databases,Storage, Query} from "appwrite"

export class Service{
    client = new Client()
    databases;
    Storage; // bucket

    constructor(){
          this.client
            .setEndpoint(Config.appwriteurl)
            .setProject(Config.appwriteprojectid)
            this.databases = new Databases(this.client) // create database which create constructer 
            this.Storage = new Storage(this.client)
    }
    async createPost({title,slug,content,featureimg,status,userid}){
        try{
            return await this.databases.createDocument(
                Config.appwritedatabaseid,
                Config.appwritecollectionid,slug,
                {
                    title,
                    content,
                    featureimg,
                    status,
                    userid
                }
            )
        }

            catch(error){
                console.log("Appwrite createPost error:", error);
                
            }
        
    }
    async updatepost( slug,{title,content,featureimg,status}){
        try{
 return await this.databases.updateDocument(
    Config.appwritedatabaseid,
    Config.appwritecollectionid,
    slug,
    {
        title,
        content,
        featureimg,
        status
    }
 )
        }catch(error){
            console.log("error");
            
        }
    }

    async deletepost(slug){
        try {
            await this.databases.deleteDocument(
                Config.appwritedatabaseid,
                Config.appwritecollectionid,
                slug
            )
            return true;
            
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async getpost(slug){
        try {
            return await this.databases.getDocument(
                Config.appwritedatabaseid,
                Config.appwritecollectionid,slug
            )
        } catch (error) {
            console.log(error)
        }
    }
     async getposts(queries = [Query.equal("status","active")]){
            try {
                return await this.databases.listDocuments(
                    Config.appwritedatabaseid,
                    Config.appwritecollectionid,
                    queries,
                )
            } catch (error) {
                console.log(error);
                
            }
     }

     //file upload service
     async uploadfile(file){
        try {
            return await this.Storage.createFile(
                Config.appwritebucketid,
                ID.unique(),
                file
            )
        } catch (error) {
              console.log("Appwrite serive :: getPosts :: error", error);
              return false;
        }
     }

     async deletefile(fieldid){
        try {
            await this.Storage.deleteFile(
                Config.appwritebucketid,
                fieldid
            )
            return  true;
        } catch (error) {
             console.log("Appwrite serive :: deleteFile :: error", error);
            return false
        }
     }

     getfilepreview(fieldid){
        return this.Storage.getFilePreview(
            Config.appwritebucketid,
            fieldid
        )
     }
    }
const service= new Service();
export default service