// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  gameString: string; // could abstract this to make it easier to type the hooks/ files
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ gameString: "ABADBDABADBCBBACBC" });
}
