import { v4 } from 'uuid';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

const s3Client = new S3Client({
  region: process.env.NEXT_PUBLIC_AWS_S3_REGION || "",
  forcePathStyle: true,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_S3_BUCKET_ID || "",
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_S3_BUCKET_SECRET || "",
  }
});

export const createDocument = async (
  file: File,
): Promise<string> => {
  const docId = v4();
  const fileName = file.name;

  const params = {
    Body: Buffer.from(await file.arrayBuffer()),
    Bucket: process.env.S3_BUCKET as string,
    Key: docId,
    ContentType: file.type,
  };

  const uploadCommand = new PutObjectCommand(params);
  await s3Client.send(uploadCommand);
  const imageUrl = `https://${process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME}.s3.${process.env.NEXT_PUBLIC_AWS_S3_REGION}.amazonaws.com/${docId}`;

  return imageUrl;
};
