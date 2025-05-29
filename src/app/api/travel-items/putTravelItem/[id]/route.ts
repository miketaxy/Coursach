import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import prisma from "@/app/lib/db";

export async function POST(request: Request) {
  const formData = await request.formData();

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  const title = formData.get("Title") as string;
  const description = formData.get("description") as string;
  const price = formData.get("Price") as string;
  const imageFile = formData.get("Image") as File;

  // Создаем папку если ее нет
  const uploadDir = path.join(process.cwd(), "public", "travelItemsStorage");
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  // Генерируем уникальное имя файла
  const timestamp = Date.now();
  const fileExtension = imageFile.name.split(".").pop();
  const fileName = `${title
    .toLowerCase()
    .replace(/\s+/g, "-")}-${timestamp}.${fileExtension}`;
  const filePath = path.join(uploadDir, fileName);

  // Конвертируем File в Buffer и сохраняем
  const fileBuffer = Buffer.from(await imageFile.arrayBuffer());
  fs.writeFileSync(filePath, fileBuffer);

  // Здесь можно сохранить данные в БД, включая путь к изображению
  const imagePath = `/travelItemsStorage/${fileName}`;

  prisma.travelItem
    .update({
      where: {
        id: Number(id),
      },
      data: {
        Title: title,
        description,
        Price: parseFloat(price),
        Image: imagePath,
      },
    })
    .catch((error) => {
      console.error("Ошибка при сохранении в БД:", error);
      return NextResponse.json({
        success: false,
        error: "Ошибка при сохранении в БД",
      });
    });

  return NextResponse.json({
    success: true,
    imagePath,
    data: { title, description, price },
  });
}
