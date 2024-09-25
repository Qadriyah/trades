import { Request, Response } from "express";

abstract class BaseController {
  /**
   * Controllers will figure out the implementation
   * of this method
   * @param req
   * @param res
   */
  protected abstract executeImpl(
    req: Request,
    res: Response
  ): Promise<Response>;

  /**
   * This is the method we execute from our routes
   * @param req
   * @param res
   */
  public async execute(req: Request, res: Response): Promise<void> {
    try {
      await this.executeImpl(req, res);
    } catch (err: any) {
      this.fail(res, err.message);
    }
  }

  public success<T>(res: Response, msg: string, dto?: T): Response {
    if (dto) {
      res.type("application/json");
      return res.status(200).json({
        statusCode: 200,
        message: msg,
        data: dto,
      });
    }
    return res.status(200).json({
      statusCode: 200,
      message: msg,
    });
  }

  public static jsonResponse(
    res: Response,
    code: number,
    message: string
  ): Response {
    return res.status(code).json({
      statusCode: code,
      message,
    });
  }

  public clientError(res: Response, message?: string): Response {
    return BaseController.jsonResponse(
      res,
      400,
      message ? message : "Bad request"
    );
  }

  public fail(res: Response, message?: string): Response {
    return BaseController.jsonResponse(
      res,
      500,
      message ? message : "Database error"
    );
  }
}

export default BaseController;
