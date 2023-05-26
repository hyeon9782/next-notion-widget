import { getDatabase } from "@/service/database";

export function GET(req: Request) {
  console.log("route 진입");

  return getDatabase();
}

// export async function POST(req: Request) {
//   const body = req.json();
//   console.log(body);
//   console.log(databaseId);

//   try {
//     const response = await notion.pages.create({
//       parent: { database_id: databaseId },
//       properties: {
//         title: {
//           title: [
//             {
//               text: {
//                 content: body.text,
//               },
//             },
//           ],
//         },
//       },
//     });
//     console.log(response);
//   } catch (err) {
//     console.error(err.body);
//   }
// }
