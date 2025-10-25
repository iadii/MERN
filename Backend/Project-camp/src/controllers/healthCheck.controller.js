import { ApiResponse } from "../utils/api-response.js";
import { asyncHandler } from "../utils/asyncHandler.js";

//since we have created asunc handler util no  need of write try-catch
/* const healthCheck = async (req, res, next) => {
  try {
    res
      .status(200)
      .json(new ApiResponse(200, { message: "Server is runnig " }));
  } catch (error) {
    next(error);
  }
}; */

const healthCheck = asyncHandler(async (req, res) => {
  res
  .status(200)
  .json(new ApiResponse(200, { message: "Server is runnig " }));
  
});

export { healthCheck };
