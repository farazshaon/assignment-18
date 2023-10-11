import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";



export async function POST(req, res) {

//! Single Insert Data
  //   try {
  //     const prisma = new PrismaClient();
  //     let reqBody = await req.json();
  //     let result = await prisma.user.create({ data: reqBody });

  //     return NextResponse.json({ status: "Success", result: result });
  //   } catch (err) {
  //     return NextResponse.json({ status: "Fail", result: err.toString() });
  //   }

  //!  Insert Many Data
  //   try {
  //     const prisma = new PrismaClient();
  //     let reqBody = await req.json();
  //     let result = await prisma.post.createMany({ data: reqBody });

  //     return NextResponse.json({ status: "Success", result: result });
  //   } catch (err) {
  //     return NextResponse.json({ status: "Fail", result: err.toString() });
  //   }

  //!  Read All Data
  //   try {
  //     const prisma = new PrismaClient();
  //     let result = await prisma.post_comment.findMany();

  //     return NextResponse.json({ status: "Success", result: result });
  //   } catch (err) {
  //     return NextResponse.json({ status: "Fail", result: err.toString() });
  //   }

  //!  Read Single Data
  //   try {
  //     const prisma = new PrismaClient();

  //     let result = await prisma.tag.findMany({
  //       skip: 2,
  //       take: 3,
  //       select: {
  //         id: true,
  //         title: true,
  //         metaTitle: true,
  //       },
  //     });
  //     return NextResponse.json({ status: "Success", result: result });
  //   } catch (err) {
  //     return NextResponse.json({ status: "Fail", result: err.toString() });
  //   }

  //!  Read Single Data by contains
  //   try {
  //     const prisma = new PrismaClient();

  //     let result = await prisma. post_tag.findMany({
  //       where: {
  //         tagId: { contains: 1 },
  //       },
  //     });
  //     return NextResponse.json({ status: "Success", result: result });
  //   } catch (err) {
  //     return NextResponse.json({ status: "Fail", result: err.toString() });
  //   }

  //!  Delete Single Data by contains
  //   try {
  //     const prisma = new PrismaClient();
  //     let reqBody = await req.json();
  //     let result = await prisma.post_meta.delete({
  //       where: reqBody,
  //     });
  //     return NextResponse.json({ status: "Success", result: result });
  //   } catch (err) {
  //     return NextResponse.json({ status: "Fail", result: err.toString() });
  //   }

  //!  Update Single Data by contains
  //   try {
  //     const prisma = new PrismaClient();
  //     let reqBody = await req.json();
  //     let result = await prisma.category .update({
  //       where: reqBody,
  //       data: {
  //         title: "catagoru title",
  //         metaTitle: "meta tag",
  //         
  //       },
  //     });
  //     return NextResponse.json({ status: "Success", result: result });
  //   } catch (err) {
  //     return NextResponse.json({ status: "Fail", result: err.toString() });
  //   }


}