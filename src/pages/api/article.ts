import type { NextApiRequest, NextApiResponse } from "next";
import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: "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"
})

namespace Article {
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
