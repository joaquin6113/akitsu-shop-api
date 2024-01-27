import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3"

const s3Client = new S3Client({
    region: "us-west-2",
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
    },
})

interface CustomFile {
    name: string
    data: Buffer
}

export async function uploadFile(file: CustomFile) {
    const keyFile = `images/codigo-15-${Date.now()}-${file.name}`
    const params = {
        Bucket: "proyecto-akitsu-shop",
        Key: keyFile,
        Body: file.data,
    }
    // cuando mandemos la imagen al servidor, se debe esperar un tiempo

    const data = await s3Client.send(new PutObjectCommand(params))
    
    return {
        location: keyFile,
        data,
    }
}