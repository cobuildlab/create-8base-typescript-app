/**
 * This file was generated using 8base CLI.
 *
 * To learn more about writing custom task functions, visit
 * the 8base documentation at:
 *
 * https://docs.8base.com/8base-console/custom-functions/tasks.
 *
 * To update this functions invocation settings, update its configuration block
 * in the projects 8base.yml file:
 *  functions:
 *    task:
 *      ...
 *
 * Data that is sent to the function can be accessed on the event argument at:
 *  event.data[KEY_NAME].
 *
 * There are two ways to invoke this function locally:
 *
 *  (1) Explicit file mock file path using '-p' flag:
 *    8base invoke-local task -p src/resolvers/task/mocks/request.json.
 *
 *  (2) Default mock file location using -m flag:
 *    8base invoke-local task -m request.
 *
 *  Add new mocks to this function to test different input arguments. Mocks can easily be generated
 *  the following generator command:
 *    8base generate mock task -m [MOCK_FILE_NAME].
 */

import {
  FunctionContext,
  FunctionEvent,
  FunctionResult,
} from '8base-cli-types';

type TaskResult = FunctionResult<{
  result: string;
}>;

export default async (
  event: FunctionEvent<{ foo: string }>,
  ctx: FunctionContext,
): TaskResult => {
  ctx;
  return {
    data: {
      result: `Task received: ${event.data.foo}`,
    },
  };
};
