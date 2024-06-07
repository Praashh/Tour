import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
    region: process.env.NEXT_PUBLIC_AWS_S3_REGION || "",
    credentials: {
        accessKeyId: process.env.NEXT_PUBLIC_AWS_S3_BUCKET_ID || "",
        secretAccessKey: process.env.NEXT_PUBLIC_AWS_S3_BUCKET_SECRET || "",
    }
});

export async function uploadFileToS3(file: any, fileName: any, contentType: any) {
    const params = {
        Bucket: process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME,
        Key: fileName,
        Body: file,
        ContentType: contentType
    };

    const command = new PutObjectCommand(params);
    await s3Client.send(command);

    return `https://${process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME}.s3.${process.env.NEXT_PUBLIC_AWS_S3_REGION}.amazonaws.com/${fileName}`;
}

export async function handleFileUpload(file: { arrayBuffer: () => WithImplicitCoercion<ArrayBuffer | SharedArrayBuffer> | PromiseLike<WithImplicitCoercion<ArrayBuffer | SharedArrayBuffer>>; name: any; type: any; }) {
    if (!file) {
        throw new Error("File is required.");
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const fileName = file.name;
    const contentType = file.type;

    return await uploadFileToS3(buffer, fileName, contentType);
}
