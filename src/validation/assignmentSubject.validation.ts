import * as z from 'zod/v4';
import { AssignmentSubjectParseErrorType } from '../constant/assignmentSubject.constant';

export function AssignmentSubjectParseError(error: string) {
	return AssignmentSubjectParseErrorType.safeParse({
		message: 'Parse failed',
		error: error,
	}).data;
}
