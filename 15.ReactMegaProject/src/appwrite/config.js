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

async updatePost(slug,{title, content, featuredImage, status}) {
    try {
        return await this.databases.updateDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
            {
                title,
                content,
                featuredImage,
                status
            }
        );
    } catch (error) {
        throw new Error("Error updating post: " + error.message);
    }

}

async deletePost(slug){
   try {
    return await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug)
        return true;
    
   } catch (error) {
       throw new Error("Error deleting post: " + error.message);
    
   }
   return false;
}

async getPost() {
    try{
 return this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
       slug
 )
    }
    catch{
        throw new Error("Error fetching posts");
      }
    }

async getPosts(quaries=[Query.equal("status","active")]){
    try {
        return await this.databases.listDocuments(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            quaries
        );
    } catch (error) {
        throw new Error("Error fetching posts: " + error.message);
    }
    return false;
}
// File upload and management methods
async uploadFile(file){
try {
    return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
    )
    
} catch (error) {
    throw new Error("Error uploading file: " + error.message);
}
return false;
}

async deleteFile(fileId){
  try {
    return this.bucket.deleteFile(
        conf.appwriteBucketId,
        fileId
    )
  } catch (error) {
    throw new Error("Error deleting file: " + error.message);
  }
  return false;
}

getFilePreview(fileId) {
    return this.bucket.getFilePreview(
        conf.appwriteBucketId,
        fileId
    );
}
}
const service=new Service();
export default service