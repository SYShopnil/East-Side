import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    res.clearPreviewData();

    return res.status(200).json({ message: 'Cookies Cleared' });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}
