import type { NextApiRequest, NextApiResponse } from 'next';
import { getSchoolsReviews } from 'services/SchoolServiceWithoutCache';


/**
 * @description - get review data against a specific school.
 * @param req - Req.
 * @param res - Res.
 * @returns - Return review data against a specific school.
 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/explicit-module-boundary-types
async function Schools(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const data = await getSchoolsReviews(req.query.slug);
      res.send(data);
    } catch (error) {
      console.log(error);
      res.status(504).json({ message: 'Server Error' });
    }
  } else {
    // Handle any other HTTP method
  }
}

export default Schools;