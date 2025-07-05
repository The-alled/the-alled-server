import { CreatedResponse } from "@/core/success.response";
import problemHandler from "@/config/generateProblem";
import generateContext from "@/utils/generateText";

class AssignmentService {
  // This service can contain methods to interact with the database or perform business logic related to assignments.
  async createAssignment(data: { fixedPrompt: string; quantity: number }) {
    // Logic to create an assignment
    const createdPrompt = problemHandler(data.fixedPrompt, data.quantity);
    //call google api
    const resultResponse = await generateContext(createdPrompt);

    if (!resultResponse) throw new Error("No internet");

    // await new Promise((res) => setTimeout(res, 300000));

    return new CreatedResponse("Assignment created successfully", {
      resultResponse,
    });
  }

  async getAssignment(id: string) {
    // Logic to retrieve an assignment by ID
    return {
      id,
      title: "Sample Assignment",
      description: "This is a sample assignment.",
    };
  }
}

const assignmentService = new AssignmentService();
export default assignmentService;
