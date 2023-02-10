import type { NextApiRequest, NextApiResponse } from "next";

namespace Article {
  export interface ArticleValidator {
    isAcceptable(s: string): boolean;
  }
}

let Article = {
  name: "apiResponse"
}

type Data = {
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

}
