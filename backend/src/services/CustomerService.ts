import {
  CreateCustomerDto,
  CreateCustomerResponseDto,
} from "../database/dto/customer.js";
import CustomerModel from "../database/models/Customer.js";

class CustomerService {
  async create(
    createCustomerDto: CreateCustomerDto
  ): Promise<CreateCustomerResponseDto> {
    try {
      const customer = await CustomerModel.create(createCustomerDto);
      return { customer };
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

export default new CustomerService();
