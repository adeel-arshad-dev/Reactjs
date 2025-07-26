import conf from "../conf/conf";
import {Client,Account,ID,Databases,Storage,Query} from "appwrite"

export class Service{
client=new Client();
databases;
bucket;

constructor(){
    this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
    this.databases=new Databases(this.client);
    this.bucket=new Storage(this.client);
}

async createPost({title,slug, content, featuredImage, status,userId}) {
    try {
        return await this.databases.createDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
            {
                title: title,
                content: content,
                featuredImage: featuredImage,
                status: status,
                userId: userId
            }
        );  
    } catch (error) {
        throw new Error("Error creating post: " + error.message);
    }
}

}

const service=new Service();
export default service