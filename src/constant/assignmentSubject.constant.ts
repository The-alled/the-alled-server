import * as z from 'zod/v4';

export const AssignmentSubjectType = z.object({
	subject: z.literal(['toan', 'ly', 'sinh', 'hoa']),
	class: z.literal(['10', '11', '12']),
});

export const AssignmentSubjectParseErrorType = z.object({
	message: z.string(),
	error: z.string(),
});
