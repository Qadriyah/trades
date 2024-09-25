import {
  CreateLineItemDto,
  CreateLineItemResponseDto,
} from "src/database/dto/line-item.js";
import LineItemModel from "../database/models/LineItems.js";

class LineItemService {
  async create(
    createLineItemDto: CreateLineItemDto[]
  ): Promise<CreateLineItemResponseDto> {
    try {
      const lineItems = await LineItemModel.create(createLineItemDto);
      return { lineItems };
    } catch (err) {
      return {
        errors: [
          {
            field: "",
            message: "Something went wrong",
          },
        ],
      };
    }
  }
}

export default new LineItemService();
